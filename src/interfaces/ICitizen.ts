import { Startup } from "../modules/Startup";
export interface ICitizen {
  name: string;
  surname: string;
  age: number;
  sportsInterests: string;
  goal: string;
  participateInActivity(activity: Startup): void;
}
