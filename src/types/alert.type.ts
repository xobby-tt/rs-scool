export enum AlertStatus {
  Success = 'Success',
  Error = 'Error',
  Info = 'Info',
}

export interface IAlert {
  status: AlertStatus;
  message: string;
}
