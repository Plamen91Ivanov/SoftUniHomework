const meals = document.getElementById("meals");

getRandomMeal();
 
async function getRandomMeal() {
   const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
   const responseData = await resp.json();
   const randomMeal = responseData.meals[0];
  
   addMeal(randomMeal, true);
}

async function getMealById(id) {
    const mealId = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
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
        btn.classList.toggle("active");
    })
    meals.appendChild(meal);
}

function removeMealFromLS(mealId){ 
    const mealIds = getMealsFromLS();
    localStorage.setItem('mealIds', JSON.stringify(mealIds.filter(id => id !== mealId)));
}

function AddMealToLS(mealId) {
    const mealIds = getMealsFromLS();
    localStorage.setItem('mealIds', JSON.stringify([...mealsIds, mealId]));
}

function getMealFromLS(){
    const mealIds = JSON.parse(localStorage.getItem('mealIds'));
    return mealIds;
}