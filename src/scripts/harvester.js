export const harvestPlants = (plants) => {
  const seedObjects = [];
  for (const plant of plants) {
    if (plant.type === "Corn") {
      const cornOutput = plant.output / 2;
      for (let i = 0; i < cornOutput; i++) {
        seedObjects.push(plant);
      }
    } else {
      const plantOutput = plant.output;
      for (let i = 0; i < plantOutput; i++) {
        seedObjects.push(plant);
      }
    }
  }
  return seedObjects;
};
