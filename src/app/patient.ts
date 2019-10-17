
export class Patient {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  dateOfBirth: Date;
  sex: {
    MALE, FEMALE, OTHERS
  };
  country: string;
  state: string;
  address: string;
  icon: string;
}
