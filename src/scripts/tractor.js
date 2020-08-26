import {createPlan} from './plan.js'

const createdPlan = createPlan();
let planArrays = [];
export const plantSeeds = (planArrays) => {
    for(i = 0; i < createdPlan.length; i++){
            planArrays.push(createdPlan)
            
    }