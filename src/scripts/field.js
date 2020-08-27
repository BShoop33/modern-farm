//importing the seed files according to the Tilling the Field instructions to add them to the usePlants array using the usePlants function
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'

//creating an empty array variable according to the Tilling the Field instructions
let plants = [];
const asparagusSeed = createAsparagus();
const cornSeed = createCorn();
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const wheatSeed = createWheat();

//creates a function that pushes a given item into the plants array and exports it
export const addPlant = (plant) => {
    plants.push(plant);
    return plants
};

export const usePlants = () => {
    return plants.slice();
};