console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { usePlants } from './field.js'
const createdPlan = createPlan();
plantSeeds(createdPlan);

const plantsArray = usePlants();
console.log(plantsArray);