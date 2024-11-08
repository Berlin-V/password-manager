export interface ISavePassword {
  name: string;
  password: string;
  confirmPassword: string;
  description?: string;
  iconUrl?: string;
  pin: boolean;
}
