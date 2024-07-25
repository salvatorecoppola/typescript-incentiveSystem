"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Citizen = void 0;
class Citizen {
    constructor(name, surname, age, sportsInterests, goal) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.sportsInterests = sportsInterests;
        this.goal = goal;
    }
    participateInActivity(startup) {
        if (startup.sports.includes(this.sportsInterests)) {
            console.log(`${this.name} ${this.surname}, age ${this.age}, can relies on ${startup.name} to achieve his goal: "${this.goal}"`);
        }
        else {
            console.log(`The startup ${startup.name} does not meet the interests of the client ${this.name}.`);
        }
    }
}
exports.Citizen = Citizen;
