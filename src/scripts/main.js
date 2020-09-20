console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { usePlants } from './field.js'
import { harvestPlants } from './harvester.js'

const createdPlan = createPlan();
plantSeeds(createdPlan);

const plantsArray = usePlants();
console.log(plantsArray);

const test = harvestPlants()
console.log(test)