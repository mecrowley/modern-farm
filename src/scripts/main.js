console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

const yearlyPlan = createPlan()

console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus()

import { createCorn } from "./seeds/corn.js"
const cornSeed = createCorn()

import { createPotato } from "./seeds/potato.js"
const potatoSeed = createPotato()

import { createSoybean } from "./seeds/soybean.js"
const soybeanSeed = createSoybean()

import { createSunflower } from "./seeds/sunflower.js"
const sunflowerSeed = createSunflower()

import { createWheat } from "./seeds/wheat.js"
const wheatSeed = createWheat()

import { addPlant } from "./field.js"
import {usePlants} from "./field.js"

addPlant(asparagusSeed)
addPlant(soybeanSeed)
addPlant(sunflowerSeed)
addPlant(cornSeed)

const plantedField = usePlants()
console.log(plantedField)



