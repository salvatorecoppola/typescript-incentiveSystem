import { Incentive } from "../modules/Incentive";
export interface IStartup {
  name: string;
  goal: string;
  sports: string[];
  jobCreation: boolean;
  populationBenefits: boolean;
  environmentalBenefits: boolean;

  receiveIncentive(incentive: Incentive): void;
}
