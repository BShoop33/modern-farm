//console log provided here as starter code
//console.log("Welcome to the main module")

//createPlan imported according to the Modern Farm Management instructions
//import {createPlan} from './plan.js';
//createPlan invoked according to the Modern Farm Management instructions
//createPlan();

//createPlan saved into the new yearlyPlan variable and then console logged according to the Modern Farm Management instructions
//const yearlyPlan = createPlan();
//console.log(yearlyPlan);

//test code provided at the end of Seed Producing Modules. Test proved successful.
//import { createAsparagus } from "./seeds/asparagus.js"
//const asparagusSeed = createAsparagus();
//console.log(asparagusSeed);


//importing the addPlant function containing the array of plants
import{ addPlant } from './field.js'
const plantAdded = addPlant();
console.log(plantAdded);

import{ createPlan } from './plan.js'
const plant = createPlan();
console.log(plant);

import {plantSeeds} from './tractor.js'
const test = plantSeeds();
console.log(test);

//import { createAsparagus } from "./seeds/asparagus.js"
//import { addPlant, usePlants } from './field.js';
//const asparagusSeed = createAsparagus()
//console.log(asparagusSeed)

//addPlant();
//const returnValue = usePlants();
//console.log(returnValue);