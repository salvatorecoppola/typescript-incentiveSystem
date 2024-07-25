import { IStartup } from "../interfaces/IStartup";
import { Startup } from "../modules/Startup";
export interface IIncentive {
  name: string;
  identificationCode: string;
  incentiveValue: number;

  assignToStartup(startup: Startup): void;
}
