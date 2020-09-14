async function getRandomMeal() {
   const randomMeal = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
}

async function getMealById(id) {
    const mealId = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
}

async function getMealBySearch(term) {
    const searchedMeal = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term)
}