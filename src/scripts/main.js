import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";

console.log("Welcome to the main module");

// creating the harvest plan
const yearlyPlan = createPlan();
console.log(yearlyPlan);

// planting the seeds
plantSeeds(yearlyPlan);
const plants = usePlants();
console.log(plants);

// getting the final plant harvest
const harvest = harvestPlants(plants);
console.log(harvest);

// creating the html to display the plant harvest
const catalogHTML = Catalog(harvest);

// adding the catalog html to the website 
const mainContainer = document.querySelector(".container")

const applicationHTML = `${catalogHTML}`

mainContainer.innerHTML = applicationHTML