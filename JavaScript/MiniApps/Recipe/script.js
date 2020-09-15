const meals = document.getElementById("meals");
const favoriteContainer = document.getElementById("fav-meals"); 

getRandomMeal();
fetchFavMeal();

 
async function getRandomMeal() {
   const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
   const responseData = await resp.json();
   const randomMeal = responseData.meals[0];
  
   addMeal(randomMeal, true);
}

async function getMealById(id) {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
    const respData = await resp.json();
    const meal = respData.meals[0];

    return meal; 
}

async function getMealBySearch(term) {
    const searchedMeal = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term)
}

function addMeal(mealData, random = false) {
    const meal = document.createElement('div')
    meal.classList.add('meal')
    meal.innerHTML = `
    ${random ? `
    <span class="random">
        Random Recipe
    </span>` : ''}
    <div class="meal-header"> 
        <img src="${mealData.strMealThumb}" alt="${mealData.Meal}"> 
        
    </div>
    <div class="meal-body">
        <h4>${mealData.Meal}</h4>
        <button class="fav-btn">
            <i class="fas fa-heart"></i>
        </button>
    </div> 
    `
    const btn = meal.querySelector(".meal-body .fav-btn");
    btn.addEventListener("click", () => {
        if (btn.classList.contains("active")) {
            removeMealFLS(mealData.idMeal);
            btn.classList.remove("active");
        }else{
            addMealLS(mealData.idMeal);
            btn.classList.add("active");
        }
       
    })
    meals.appendChild(meal);
}

function removeMealFLS(mealId){ 
    const mealIds = getMealLS();
    localStorage.setItem('mealIds', JSON.stringify(mealIds.filter(id => id !== mealId)));
}

function addMealLS(mealId) {
    const mealIds = getMealLS();
    localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));
}

function getMealLS(){
    const mealIds = JSON.parse(localStorage.getItem('mealIds'));
    return mealIds === null ? [] : mealIds;
}

async function fetchFavMeal() {
    const mealIds = getMealLS();

    const meals = [];
    for (let i = 0; i < mealIds.length; i++) {
        const mealId = mealIds[i];
        
        meal = await getMealById(mealId);

        addMealFav(meal);
        
    }
    console.log(meals)
}

function addMealFav(mealData) {
    const favMeal = document.createElement('lu') 
    favMeal.innerHTML = `
      <li><img 
      src="${mealData.strMealThumb}" 
      alt="${mealData.strMeal}">
      <span>${mealData.strMeal}</span></li> 
    ` 
    favoriteContainer.appendChild(favMeal);
}