export interface ICard {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  work?: string;
  address?: string;
  tags?: string[];
}
