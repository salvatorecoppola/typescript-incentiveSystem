import { Startup } from "./modules/Startup";
import { Incentive } from "./modules/Incentive";
import { Citizen } from "./modules/Citizen";
// Create instances of Startup
const FitFusion = new Startup(
  "FitFusion",
  "Promote health and wellness through personalized fitness programs integrated with advanced monitoring technologies.",
  ["Bodybuilding", "Boxing", "Zumba"],
  true,
  true,
  true
);

const KeepFit = new Startup(
  "KeepFit",
  "Reduce the environmental impact of fitness facilities and promote a sustainable lifestyle among members.",
  ["Zumba", "Pilates", "Yoga"],
  false,
  true,
  true
);

const RonnieGym = new Startup(
  "RonnieGym",
  "Provide fitness programs specifically designed for the needs of the elderly, improving their quality of life and preventing age-related health problems.",
  ["Bodybuilding", "Calisthenics", "Dance"],
  true,
  true,
  true
);

// Create instances of Incentive
const incentiveTech = new Incentive(
  "Grants for Technological Innovation",
  "TE1234",
  100000
);

const incentiveEnergy = new Incentive(
  "Incentive for Energy Efficiency",
  "EN5678",
  100000
);

const incentiveHealth = new Incentive(
  "Incentive for Health and Wellness Promotion",
  "HE91011",
  100000
);

// Assign incentives to startups
incentiveTech.assignToStartup(KeepFit);
incentiveTech.assignToStartup(RonnieGym);
incentiveTech.assignToStartup(FitFusion);
incentiveEnergy.assignToStartup(KeepFit);
incentiveEnergy.assignToStartup(RonnieGym);
incentiveEnergy.assignToStartup(FitFusion);
incentiveHealth.assignToStartup(RonnieGym);
incentiveHealth.assignToStartup(FitFusion);
incentiveHealth.assignToStartup(KeepFit);

// Create instances of Citizen
const clientI = new Citizen("Paolo", "Rossi", 53, "Boxing", "Weight loss");
const clientII = new Citizen(
  "Gianmarco",
  "Verdi",
  33,
  "Bodybuilding",
  "Gain muscle"
);
const clientIII = new Citizen(
  "Anna",
  "Bianchi",
  18,
  "Dance",
  "Increase flexibility"
);

// Clients participate in activities
clientI.participateInActivity(FitFusion);
clientI.participateInActivity(KeepFit);
clientI.participateInActivity(RonnieGym);
clientII.participateInActivity(FitFusion);
clientII.participateInActivity(KeepFit);
clientII.participateInActivity(RonnieGym);
clientIII.participateInActivity(FitFusion);
clientIII.participateInActivity(KeepFit);
clientIII.participateInActivity(RonnieGym);
