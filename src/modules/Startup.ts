import { IStartup } from "../interfaces/IStartup";
import { Incentive } from "./Incentive";

export class Startup implements IStartup {
  constructor(
    public name: string,
    public goal: string,
    public sports: string[],
    public jobCreation: boolean,
    public populationBenefits: boolean,
    public environmentalBenefits: boolean
  ) {}

  receiveIncentive(incentive: Incentive): void {
    console.log(
      `${incentive.name} received, now ${this.name} can achieve its goal: ${this.goal}`
    );
  }
}
