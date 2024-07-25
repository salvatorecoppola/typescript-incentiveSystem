import { IIncentive } from "../interfaces/IIncentive";
import { Startup } from "./Startup";
export class Incentive implements IIncentive {
  constructor(
    public name: string,
    public identificationCode: string,
    public incentiveValue: number
  ) {}

  assignToStartup(startup: Startup): void {
    const satisfiedCriteria: string[] = [];

    // Check eligibility criteria
    if (this.identificationCode === "TE1234" && startup.jobCreation) {
      satisfiedCriteria.push("job creation");
    }
    if (this.identificationCode === "EN5678" && startup.environmentalBenefits) {
      satisfiedCriteria.push("environmental benefits");
    }
    if (this.identificationCode === "HE91011" && startup.populationBenefits) {
      satisfiedCriteria.push("population benefits");
    }

    // Assign incentive only if some criteria are satisfied
    if (satisfiedCriteria.length > 0) {
      console.log(
        `${this.name} worth €${this.incentiveValue} assigned to startup ${
          startup.name
        } for ${satisfiedCriteria.join(", ")}.`
      );
      startup.receiveIncentive(this);
    } else {
      console.log(
        `The startup ${startup.name} does not meet the eligibility criteria for the incentive ${this.name}.`
      );
    }
  }
}
