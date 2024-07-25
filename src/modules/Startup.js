"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Startup = void 0;
class Startup {
    constructor(name, goal, sports, jobCreation, populationBenefits, environmentalBenefits) {
        this.name = name;
        this.goal = goal;
        this.sports = sports;
        this.jobCreation = jobCreation;
        this.populationBenefits = populationBenefits;
        this.environmentalBenefits = environmentalBenefits;
    }
    receiveIncentive(incentive) {
        console.log(`${incentive.name} received, now ${this.name} can achieve its goal: ${this.goal}`);
    }
}
exports.Startup = Startup;
