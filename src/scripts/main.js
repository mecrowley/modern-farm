console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

const yearlyPlan = createPlan()

console.log(yearlyPlan)

import {plantSeeds} from "./tractor.js"
import {usePlants} from "./field.js"
import { harvestPlants } from "./harvester.js"

plantSeeds(yearlyPlan)
const plants = usePlants()

console.log(plants)


const harvest = harvestPlants(plants)
console.log(harvest)