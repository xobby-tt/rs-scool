export type ValidatorFn = (value: unknown) => string | null;
export type ValidatorConfig = { [key: string]: ValidatorFn[] };
export type ValidatorCompose<T> = (form: T) => {
  errors: { [key in keyof T]?: Array<string | null> };
  isFormValid: boolean;
};

export type IndexOptional<T> = Pick<T, keyof T>;

export function validatorCompose<T extends { [key: string]: unknown }>(
  config: ValidatorConfig
): ValidatorCompose<T> {
  return (formValues: T) => {
    const errors = Object.entries(config).reduce((acc, field) => {
      const [key, validators] = field;

      return {
        ...acc,
        [key]: validators.map((validator) => validator(formValues[key])).filter((error) => !!error),
      };
    }, {});

    return {
      errors,
      isFormValid: !Object.values(errors).flat().length,
    };
  };
}

export const validators = {
  required: (errorMessage?: string) => (val: unknown) => {
    return val ? '' : errorMessage || 'Field should not be empty';
  },
  max: (maxValue: number, errorMessage?: string) => (val: unknown) => {
    return val > maxValue ? '' : errorMessage || 'Wrong value';
  },
  maxDate: (maxDate: Date, errorMessage?: string) => (val: unknown) => {
    const selectedDate = new Date(String(val));

    return !val || maxDate > selectedDate ? '' : errorMessage || 'Invalid date';
  },
};
