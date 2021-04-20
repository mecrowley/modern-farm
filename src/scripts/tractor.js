import { createCorn } from "./seeds/corn.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import {addPlant} from "./field.js"

export const plantSeeds = (plantingPlan) => {
  for (const row of plantingPlan) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === "Corn") {
        const cornSeed = createCorn();
        for (const corn of cornSeed) {
        addPlant(corn);
        }
      } else if (row[i] === "Asparagus") {
        const asparagusSeed = createAsparagus();
        addPlant(asparagusSeed);
      } else if (row[i] === "Potato") {
        const potatoSeed = createPotato();
        addPlant(potatoSeed);
      } else if (row[i] === "Soybean") {
        const soybeanSeed = createSoybean();
        addPlant(soybeanSeed);
      } else if (row[i] === "Sunflower") {
        const sunflowerSeed = createSunflower();
        addPlant(sunflowerSeed);
      } else {
        const wheatSeed = createWheat();
        addPlant(wheatSeed);
      }
    }
  }
};
