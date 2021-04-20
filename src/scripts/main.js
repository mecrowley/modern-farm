console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

const yearlyPlan = createPlan()

console.log(yearlyPlan)

import {plantSeeds} from "./tractor.js"
import {usePlants} from "./field.js"

plantSeeds(yearlyPlan)
const plantedField = usePlants()

console.log(plantedField)


