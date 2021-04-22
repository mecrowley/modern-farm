export const Catalog = (allPlants) => {
  let plantsHTML = "";
  for (const plant of allPlants) {
    plantsHTML += `<section class="plant">${plant.type}</section>`;
  }
  return plantsHTML;
};
