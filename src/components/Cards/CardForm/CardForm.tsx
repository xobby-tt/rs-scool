import { Component, FormEvent } from 'react';
import { AlertStatus, IAlert, ICard } from '../../../types';
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

type CardFormState = {
  errors: { [key in keyof ICard]?: string[] };
};

export class CardForm extends Component<CardFormProps, CardFormState> {
  form: HTMLFormElement = null;
  validator: ValidatorCompose<ICard>;

  constructor(props: CardFormProps) {
    super(props);

    this.validator = validatorCompose<IndexOptional<ICard>>({
      name: [validators.required()],
      description: [validators.required()],
      profession: [validators.required('Please select your profession')],
      birthdate: [validators.required(), validators.maxDate(new Date())],
      sex: [validators.required()],
    });

    this.state = {
      errors: {},
    };
  }

  getFormFields(form: HTMLFormElement): ICard {
    const { cardName, description, image, sex, isBirthDateVisible, profession, birthdate } = form;
    const imageFile = image?.files[0];

    return {
      id: Date.now().toString(),
      name: cardName.value,
      description: description?.value,
      imageUrl: imageFile ? URL.createObjectURL(imageFile) : null,
      birthdate: birthdate?.value,
      profession: profession?.value,
      isBirthDateVisible: !isBirthDateVisible?.checked,
      sex: sex?.value,
    };
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>, sendAlert: (alert: IAlert) => void) => {
    e.preventDefault();

    const cardItem = this.getFormFields(this.form);
    const validator = this.validator(cardItem);

    if (validator.isFormValid) {
      this.props.createCard(cardItem);
      this.form.reset();
    } else {
      sendAlert({ status: AlertStatus.Error, message: 'Invalid form' });
    }

    this.setState({ errors: validator.errors });
  };

  render() {
    return (
      <>
        <AlertContext.Consumer>
          {({ sendAlert }) => (
            <form
              ref={(form) => (this.form = form)}
              onSubmit={(e) => this.handleSubmit(e, sendAlert)}
            >
              <Label label="What is your name?" className={classes.field}>
                <Input name={'cardName'} errorText={this.state.errors['name']?.[0]}></Input>
              </Label>

              <Label label="Describe yourself please" className={classes.field}>
                <Input
                  name={'description'}
                  errorText={this.state.errors['description']?.[0]}
                ></Input>
              </Label>

              <Label label="Who you are?" className={classes.field}>
                <Select
                  name={'profession'}
                  options={['Sportsmen', 'Photograper', 'Designer']}
                  errorText={this.state.errors['profession']?.[0]}
                ></Select>
              </Label>

              <div className={`${classes.field} ${classes.multiFields}`}>
                <div className={classes.multiField}>
                  <Label label="Birthdate" className={classes.field}>
                    <InputDate
                      name={'birthdate'}
                      errorText={this.state.errors['birthdate']?.[0]}
                    ></InputDate>
                  </Label>
                  <div className={classes.field}>
                    <InputCheckbox name={'isBirthDateVisible'}>Hide Birthdate</InputCheckbox>
                  </div>
                </div>

                <div className={classes.multiField}>
                  <Label label="Sex" className={classes.field}>
                    <Radio
                      name={'sex'}
                      options={['Male', 'Female']}
                      errorText={this.state.errors['sex']?.[0]}
                    ></Radio>
                  </Label>
                </div>
              </div>

              <Label label="Select your best Photo" className={classes.field}>
                <InputFile
                  name={'image'}
                  errorText={this.state.errors['imageUrl']?.[0]}
                ></InputFile>
              </Label>

              <div className={classes.createBtn}>
                <Button type="submit" size={Size.M} data-testid="sumbit">
                  Create sock-card
                </Button>
              </div>
            </form>
          )}
        </AlertContext.Consumer>
      </>
    );
  }
}
