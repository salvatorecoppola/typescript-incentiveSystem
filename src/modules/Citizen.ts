import { ICitizen } from "../interfaces/ICitizen";
import { Startup } from "./Startup";
export class Citizen implements ICitizen {
  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public sportsInterests: string,
    public goal: string
  ) {}

  participateInActivity(startup: Startup): void {
    if (startup.sports.includes(this.sportsInterests)) {
      console.log(
        `${this.name} ${this.surname}, age ${this.age}, can relies on ${startup.name} to achieve his goal: "${this.goal}"`
      );
    } else {
      console.log(
        `The startup ${startup.name} does not meet the interests of the client ${this.name}.`
      );
    }
  }
}
