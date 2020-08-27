import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'

let planArrays = [];

export const plantSeeds = (plan) => {
        for (const row of plan) {
                for (const item of row) {
                        if (item === "Asparagus") {
                                const asparagus = createAsparagus();
                                addPlant(asparagus);
                        }
                        else if (item === "Potato") {
                                const potato = createPotato();
                                addPlant(potato);
                        }
                        else if (item === "Soybean") {
                                const soybean = createSoybean();
                                addPlant(soybean);
                        }
                        else if (item === "Sunflower") {
                                const sunflower = createSunflower();
                                addPlant(sunflower);
                        }
                        else if (item === "Wheat") {
                                const wheat = createWheat();
                                addPlant(wheat);
                        }
                }
        }
}