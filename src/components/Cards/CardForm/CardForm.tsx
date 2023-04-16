import { Pokemon, PokemonEnum } from '@favware/graphql-pokemon';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AlertStatus } from '../../../types';
import {
  IndexOptional,
  validatorCompose,
  ValidatorCompose,
  validators,
} from '../../../utils/form.util';
import { AlertContext, Button, Size } from '../../UI';
import { Input, InputCheckbox, InputDate, InputFile, Label, Radio, Select } from '../../UI/Form';
import classes from './CardForm.module.css';

type CardFormProps = {
  createCard: (card: Partial<Pokemon>) => void;
};

type TCardForm = {
  cardName: string;
  description: string;
  image: FileList;
  sex: 'Female' | 'Male';
  isBirthDateHidden: boolean;
  profession: string;
  birthdate: Date;
};

export const CardForm = (props: CardFormProps) => {
  const { register, handleSubmit, reset } = useForm<TCardForm>();
  const [errors, setErrors] = useState<{ [key in keyof TCardForm]?: string[] }>({});
  const { sendAlert } = useContext(AlertContext);
  const formValidator: ValidatorCompose<TCardForm> = validatorCompose<IndexOptional<TCardForm>>({
    cardName: [validators.required()],
    description: [validators.required()],
    profession: [validators.required('Please select your profession')],
    birthdate: [validators.required(), validators.maxDate(new Date())],
    sex: [validators.required()],
    image: [validators.required()],
  });

  const getFormFields = (formValues: TCardForm): Partial<Pokemon> => {
    const { cardName, description, image, sex, isBirthDateHidden, profession, birthdate } =
      formValues;
    const imageFile = image?.item(0);

    return {
      key: `${cardName} ${isBirthDateHidden ? '' : birthdate}` as PokemonEnum,
      flavorTexts: [{ flavor: description, game: undefined }],
      sprite: imageFile ? URL.createObjectURL(imageFile) : null,
      color: profession,
      gender: sex === 'Female' ? { female: '100%', male: '0%' } : { female: '0%', male: '100%' },
    };
  };

  const onSubmit = (formValues: TCardForm) => {
    const cardItem = getFormFields(formValues);
    const validator = formValidator(formValues);

    if (validator.isFormValid) {
      props.createCard(cardItem);
      reset();
    } else {
      sendAlert({ status: AlertStatus.Error, message: 'Invalid form' });
    }

    setErrors(validator.errors);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label label="What is your pokemon name?" className={classes.field}>
          <Input {...register('cardName')} errorText={errors['cardName']?.[0]}></Input>
        </Label>

        <Label label="Describe the abilities please" className={classes.field}>
          <Input {...register('description')} errorText={errors['description']?.[0]}></Input>
        </Label>

        <Label label="Select color" className={classes.field}>
          <Select
            {...register('profession')}
            options={['Red', 'Green', 'Blue', 'White', 'Yellow']}
            errorText={errors['profession']?.[0]}
          ></Select>
        </Label>

        <div className={`${classes.field} ${classes.multiFields}`}>
          <div className={classes.multiField}>
            <Label label="Birthdate" className={classes.field}>
              <InputDate
                {...register('birthdate')}
                errorText={errors['birthdate']?.[0]}
              ></InputDate>
            </Label>
            <div className={classes.field}>
              <InputCheckbox {...register('isBirthDateHidden')}>Hide Birthdate</InputCheckbox>
            </div>
          </div>

          <div className={classes.multiField}>
            <Label label="Sex" className={classes.field}>
              <Radio
                {...register('sex')}
                options={['Male', 'Female']}
                errorText={errors['sex']?.[0]}
              ></Radio>
            </Label>
          </div>
        </div>

        <Label label="Select best Photo" className={classes.field}>
          <InputFile {...register('image')} errorText={errors['image']?.[0]}></InputFile>
        </Label>

        <div className={classes.createBtn}>
          <Button type="submit" size={Size.M} data-testid="sumbit">
            Create
          </Button>
        </div>
      </form>
    </>
  );
};
