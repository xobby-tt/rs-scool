export interface ICard {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  address?: string;
  tags?: string[];
  birthdate?: Date;
  isBirthDateVisible?: boolean;
  sex?: 'Female' | 'Male';
  profession?: string;
}
