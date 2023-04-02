import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AlertStatus, ICard } from '../../../types';
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
  createCard: (card: ICard) => void;
};

type TCardForm = {
  cardName: string;
  description: string;
  image: FileList;
  sex: 'Female' | 'Male';
  isBirthDateVisible: boolean;
  profession: string;
  birthdate: Date;
};

export const CardForm = (props: CardFormProps) => {
  const { register, handleSubmit, reset } = useForm<TCardForm>();
  const [errors, setErrors] = useState<{ [key in keyof ICard]?: string[] }>({});
  const { sendAlert } = useContext(AlertContext);
  const formValidator: ValidatorCompose<ICard> = validatorCompose<IndexOptional<ICard>>({
    name: [validators.required()],
    description: [validators.required()],
    profession: [validators.required('Please select your profession')],
    birthdate: [validators.required(), validators.maxDate(new Date())],
    sex: [validators.required()],
    imageUrl: [validators.required()],
  });

  const getFormFields = (formValues: TCardForm): ICard => {
    const { cardName, description, image, sex, isBirthDateVisible, profession, birthdate } =
      formValues;
    const imageFile = image?.item(0);

    return {
      id: Date.now().toString(),
      name: cardName,
      description: description,
      imageUrl: imageFile ? URL.createObjectURL(imageFile) : null,
      birthdate: birthdate,
      profession: profession,
      isBirthDateVisible: !isBirthDateVisible,
      sex: sex,
    };
  };

  const onSubmit = (formValues: TCardForm) => {
    const cardItem = getFormFields(formValues);
    const validator = formValidator(cardItem);

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
        <Label label="What is your name?" className={classes.field}>
          <Input {...register('cardName')} errorText={errors['name']?.[0]}></Input>
        </Label>

        <Label label="Describe yourself please" className={classes.field}>
          <Input {...register('description')} errorText={errors['description']?.[0]}></Input>
        </Label>

        <Label label="Who you are?" className={classes.field}>
          <Select
            {...register('profession')}
            options={['Sportsmen', 'Photograper', 'Designer']}
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
              <InputCheckbox {...register('isBirthDateVisible')}>Hide Birthdate</InputCheckbox>
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

        <Label label="Select your best Photo" className={classes.field}>
          <InputFile {...register('image')} errorText={errors['imageUrl']?.[0]}></InputFile>
        </Label>

        <div className={classes.createBtn}>
          <Button type="submit" size={Size.M} data-testid="sumbit">
            Create sock-card
          </Button>
        </div>
      </form>
    </>
  );
};
