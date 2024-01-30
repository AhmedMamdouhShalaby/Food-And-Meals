// let ingredientsRow = document.getElementById('ingredientsRow')
// $('#searchLnk').click(function () {
//     $('#spinnerParent').fadeIn();
//     $('#searchSection').show(500)
//     $('#searchSection').css({
//         zIndex: 999,
//     })
//     categoriesSection.classList.add('d-none')
//     contactSection.classList.add('d-none')
//     ingredientsRow.classList.add('d-none')
//     areaSection.classList.add('d-none')

//     ingredientsSection.classList.add('d-none')

//     $('.sideBar').toggle(700);
// })


// $('#ingredientsLnk').click(function () {
//     $('#spinnerParent').fadeIn();
//     getIngrediendts()
//     $('#ingredientsSection').show(500)
//     $('#ingredientsSection').css({
//         zIndex: 999,
//     })
//     ingredientsRow.classList.remove('d-none')
//     categoriesSection.classList.add('d-none')

//     searchSection.classList.add('d-none')
//     contactSection.classList.add('d-none')
//     areaSection.classList.add('d-none')
//     $('.sideBar').toggle(700);
// })

// $('#areaLnk').click(function () {
//     $('#spinnerParent').fadeIn();
//     getArea()
//     $('#areaSection').show(500)
//     $('#areaSection').css({
//         zIndex: 999,
//     })
//     searchSection.classList.add('d-none')
//     categoriesSection.classList.add('d-none')
//     contactSection.classList.add('d-none')
//     ingredientsSection.classList.add('d-none')
//     $('.sideBar').toggle(700);
// })
// $('#contactLnk').click(function () {
//     $('#contactSection').show(500)
//     $('#contactSection').css({
//         zIndex: 999,
//     })
//     contactSection.classList.remove('d-none')

//     searchSection.classList.add('d-none')
//     categoriesSection.classList.add('d-none')
//     areaSection.classList.add('d-none')
//     ingredientsSection.classList.add('d-none')
//     $('.sideBar').toggle(700);
// })

// $('#bars').on('click', function () {
//     $('.sideBar').toggle(700);
//     $('.media').toggle(1000)
// });

// // ================================================ //
// let allMeals = [];
// const mainSection = document.getElementById('mainSection');
// const spinnerParent = document.getElementById('spinnerParent');
// const categoriesSection = document.getElementById('categoriesSection');
// const detailes = document.getElementById('detailes');
// const rowDetailes = document.getElementById('rowDetailes');
// const searchByFirstLetter = document.getElementById('searchByFirstLetter');
// const searchByName = document.getElementById('searchByName');
// let ids = [];

// async function getMeals() {
//     $('#spinnerParent').fadeIn();
//     let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beaf`;
//     let response = await fetch(url);
//     let result = await response.json();
//     allMeals = result;
//     console.log(result);
//     $('#spinnerParent').fadeOut(1000);
//     function displayMainMeals(arr) {
//         let mealsMainBox = ``;
//         for (let i = 0; i < arr.meals.length; i++) {
//             ids.push(arr.meals[i].idMeal);
//             mealsMainBox += `
//             <div class="col-md-3 ">
//                 <div onclick="getId('${arr.meals[i].idMeal}')" class="imageParent rounded-2 position-relative overflow-hidden">
//                     <img src="${arr.meals[i].strMealThumb}" alt="food">
//                     <div class="layer d-flex justify-content-center align-items-center">
//                         <h2 class="text-center px-3">${arr.meals[i].strMeal}</h2>
//                     </div>
//                 </div>
//             </div>
//             `;
//         }
//         mainSection.innerHTML = mealsMainBox;
//     }
//     displayMainMeals();
// }
// getMeals();

// //======= fetching url ==============//
// $('#categoriesLnk').click(async function () {
//     $('#spinnerParent').fadeIn();
//     let url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
//     let response = await fetch(url);
//     let result = await response.json();
//     console.log(result);
//     displayCategories(result.categories);
//     $('#spinnerParent').fadeOut(1000);
// });

// function displayCategories(categories) {
//     let categoriesBox = ``;
//     for (let i = 0; i < categories.length; i++) {
//         ids.push(categories[i].idCategory);
//         categoriesBox += `
//         <div class="col-md-3 py-3 px-2">
//             <div onclick="getCategMale('${categories[i].strCategory}')" class="imageParent rounded-2 position-relative overflow-hidden">
//                 <img src="${categories[i].strCategoryThumb}" class="mx- w-100" alt="food">
//                 <div class="layer text-center d-flex justify-content-center align-items-center w-100">
//                     <div class="layerContent d-flex justify-content-center flex-column align-items-center">
//                         <h2>${categories[i].strCategory}</h2>
//                         <p>${sliceText(categories[i].strCategoryDescription, 10)}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `;
//     }

//     categoriesSectionRow.innerHTML = categoriesBox;
// }
// let categoriesSectionRow = document.getElementById('categoriesSectionRow');

// async function getCategMale(catUrl) {
//     try {
//         let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catUrl}`;
//         let response = await fetch(url);
//         let result = await response.json();
//         console.log(result);

//         function disMalesCateg() {
//             let categMaleBox = ``;
//             for (let i = 0; i < result.meals.length; i++) {
//                 let meal = result.meals[i];
//                 categMaleBox += `
//                 <div class="col-md-3">
//                     <div onclick="getId('${meal.idMeal}')" class="imageParent rounded-2 position-relative overflow-hidden">
//                         <img src="${meal.strMealThumb}" alt="food">
//                         <div class="layer d-flex justify-content-center align-items-center">
//                             <h2 class="text-center px-3">${meal.strMeal}</h2>
//                         </div>
//                     </div>
//                 </div>
//             `;
//             }

//             categoriesSectionRow.innerHTML = categMaleBox;
//         }

//         disMalesCateg();
//     } catch (error) {
//         console.error('Error fetching and displaying category meals:', error);
//     }
// }

// // Example: Call the function with a specific category
// getCategMale('Beef');

// // =======silde===========//
// $('#categoriesLnk').click(function () {
//     $('#categoriesSection').show(500);
//     $('#categoriesSection').css({
//         zIndex: 999,
//     });
//     $('#searchSection').css({
//         zIndex: 1,
//     });
//     $('#contactSection').css({
//         zIndex: 1,
//     });
//     $('#areaSection').css({
//         zIndex: 1,
//     });
//     $('#ingredientsSection').css({
//         zIndex: 1,
//     });
//     $('.sideBar').toggle(700);
// });

// function sliceText(text, maxWords) {
//     const words = text.split(' ');
//     const spliceText = words.slice(0, maxWords).join(' ');
//     return spliceText;
// }
// $('#btnDetailesClose').click(function () {
//     detailes.classList.add('d-none')
// })

// // Define displayDetailes function here
// async function displayDetailes(id) {
//     let rowDetailes = document.getElementById('rowDetailes');
//     rowDetailes.innerHTML = ``;
//     let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
//     let response = await fetch(url);
//     let result = await response.json();
//     console.log(result);
//     console.log(id);

//     // Assuming you have a div with id 'rowDetailes' where you want to display the details
//     detailes.classList.remove('d-none');
//     let detailesBox = ``;
//     for (let i = 0; i < result.meals.length; i++) {

//         let meal = result.meals[i];
//         let mealThumb = meal.strMealThumb || '';
//         let mealName = meal.strMeal || '';
//         let instructions = meal.strInstructions || '';
//         let area = meal.strArea || '';
//         let category = meal.strMeasure1.concat(meal.strIngredient1) || '';
//         let sourceLink = `https://www.bbcgoodfoodme.com/`;

//         detailesBox += `
//             <div class="col-md-4">
//                 <div class="deataileHead">
//                     <img src="${mealThumb}" class="w-100" alt="${mealName}">
//                     <h2 class="text-white">${mealName}</h2>
//                 </div>
//             </div>
//             <div class="col-md-8">
//                 <h2 class="text-white">Instructions</h2>
//                 <p class="text-white" id="explainFood">${instructions}</p>
//                 <h2 id="area" class="fw-bold text-white text-capitalize">Area: 
//                     <span class="fs-3 fw-medium text-capitalize">${area}</span>
//                 </h2>
//                 <h2 id="category" class="fw-bold text-white text-capitalize">Category: 
//                     <span class="fs-3 fw-medium text-capitalize">${category}</span>
//                 </h2>
//                 <div class="recipesDetaileas mb-3" id="recipesDetaileas">
//                     <h2 id="recipes" class="fw-bold mb-3 text-white text-capitalize">Recipes: </h2>
//                     <span class="alert alert-info m-2 p-1">${category}</span>
//                 </div>
//                 <div class="tagsContent mb-3" id="tagsContent">
//                     <h2 id="tags" class="fw-bold text-white text-capitalize mb-3">Tags: </h2>
//                     <span class="alert alert-danger m-2 p-1">Soup</span>
//                 </div>
//                 <a href="${sourceLink}" target="_blank" class="btn btn-success">Source</a>
//                 <a href="${meal.strYoutube}" target="_blank" class="btn btn-danger">YouTube</a>
//             </div>
//         `;
//     }

//     rowDetailes.innerHTML = detailesBox;
// }

// async function getId(id) {
//     // Call displayDetailes function
//     displayDetailes(id);
// }

// async function getArea() {

//     rowArea.innerHTML = "";

//     let url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
//     let response = await fetch(url);
//     let result = await response.json();
//     console.log(result.meals);

//     displayArea(result.meals);
//     $('#spinnerParent').fadeOut(1000);

// }

// let rowArea = document.getElementById('rowArea');

// async function displayArea(arr) {
//     let cartoona = "";

//     for (let i = 0; i < arr.length; i++) {
//         cartoona += `
//         <div class="col-md-3">
//             <div onclick="getAreaMeals('${arr[i].strArea}')" class="rounded-2 text-center cursor-pointer">
//                 <i class="fa-solid fa-house-laptop fa-4x text-white"></i>
//                 <h3 class="text-white">${arr[i].strArea}</h3>
//             </div>
//         </div>
//         `;
//     }

//     rowArea.innerHTML = cartoona;
// }


// async function getAreaMeals(area) {
//     spinnerParent.classList.remove('d-none')
//     rowArea.innerHTML = '';
//     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
//     let result = await response.json()
//     $('#spinnerParent').fadeOut(1000);
//     displayAreaMeals(result.meals)
// }
// async function displayAreaMeals(arr) {
//     let mealsMainBox = ``;
//     for (let i = 0; i < arr.length; i++) {
//         mealsMainBox += `
//         <div class="col-md-3 ">
//             <div  onclick="getId('${arr[i].idMeal}')" class="imageParent rounded-2 position-relative overflow-hidden">
//                 <img src="${arr[i].strMealThumb}" alt="food">
//                 <div class="layer d-flex justify-content-center align-items-center">
//                     <h2 class="text-center px-3">${arr[i].strMeal}</h2>
//                 </div>
//             </div>
//         </div>
//         `;
//     }
//     rowArea.innerHTML = mealsMainBox;
// }

// async function getIngrediendts() {
//     spinnerParent.classList.remove('d-none')
//     ingredientsRow.innerHTML = '';
//     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
//     let result = await response.json()
//     console.log(result);
//     $('#spinnerParent').fadeOut(1000);

//     displayIngrediendts(result.meals)
// }
// async function displayIngrediendts(arr) {
//     cartoona = ``;
//     for (let i = 0; i < arr.length; i++) {
//         const ingredient = arr[i];

//         // Check if the required properties exist in the ingredient object
//         if (ingredient && ingredient.strIngredient && ingredient.strDescription) {
//             const truncatedDescription = ingredient.strDescription.split(" ").slice(0, 20).join(" ");
//             cartoona += `
//                 <div class="col-md-3">
//                     <div class="ingredientsContent text-center" onclick="displayIngrediendtsMeals('${ingredient.strIngredient}')">
//                         <i class="fa-solid fa-drumstick-bite fa-4x text-white my-2"></i>
//                         <h3 class="text-capitalize text-white my-2">${ingredient.strIngredient}</h3>
//                         <p class="text-white">${truncatedDescription}</p>
//                     </div>
//                 </div>
//             `;
//         }
//     }
//     ingredientsRow.innerHTML = cartoona;
// }



// async function displayIngrediendtsMeals(KindOfFood) {
//     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${KindOfFood}`)
//     let result = await response.json()
//     console.log(result.meals);
//     displayIngrediendts(result.meals)
// }

// async function searchBn(value) {
//     spinnerParent.classList.remove('d-none')

//     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
//     let result = await response.json();
//     $('#spinnerParent').fadeOut(1000);
//     displaySearchedData(result.meals)
// }
// let searched = document.getElementById('searched');
// async function displaySearchedData(term) {
//     cartoona = ``;
//     for (let i = 0; i < term.length; i++) {
//         cartoona += `

//             <div class="col-md-3 ">
//                 <div onclick="getId('${term[i].idMeal}')" class="imageParent rounded-2 position-relative overflow-hidden">
//                     <img src="${term[i].strMealThumb}" alt="food">
//                     <div class="layer d-flex justify-content-center align-items-center">
//                         <h2 class="text-center px-3">${term[i].strMeal}</h2>
//                     </div>
//                 </div>
//             </div>
//             `;

//     }
//     searched.innerHTML = cartoona
// }

// async function searchBFl(value) {
//     spinnerParent.classList.remove('d-none')
//     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`)
//     let result = await response.json();
//     $('#spinnerParent').fadeOut(1000);
//     displaySearchedData(result.meals)
// }



// function showContacts() {
//     submitBtn = document.getElementById("submitBtn")


//     document.getElementById("nameInput").addEventListener("focus", () => {
//         nameInputTouched = true
//     })

//     document.getElementById("emailInput").addEventListener("focus", () => {
//         emailInputTouched = true
//     })

//     document.getElementById("phoneInput").addEventListener("focus", () => {
//         phoneInputTouched = true
//     })

//     document.getElementById("ageInput").addEventListener("focus", () => {
//         ageInputTouched = true
//     })

//     document.getElementById("passwordInput").addEventListener("focus", () => {
//         passwordInputTouched = true
//     })

//     document.getElementById("repasswordInput").addEventListener("focus", () => {
//         repasswordInputTouched = true
//     })
// }

// let nameInputTouched = false;
// let emailInputTouched = false;
// let phoneInputTouched = false;
// let ageInputTouched = false;
// let passwordInputTouched = false;
// let repasswordInputTouched = false;






// function nameValidation() {
//     nameInputTouched = true;
//     return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
// }

// function emailValidation() {
//     emailInputTouched = true;
//     return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
// }

// function phoneValidation() {
//     phoneInputTouched = true;
//     return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
// }

// function ageValidation() {
//     ageInputTouched = true;
//     return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
// }

// function passwordValidation() {
//     passwordInputTouched = true;
//     return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
// }

// function repasswordValidation() {
//     repasswordInputTouched = true;
//     return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
// }

// function inputsValidation() {
//     if (nameInputTouched) {
//         if (nameValidation()) {
//             document.getElementById("nameAlert").classList.replace("d-block", "d-none")
//         } else {
//             document.getElementById("nameAlert").classList.replace("d-none", "d-block")
//         }
//     }
//     if (emailInputTouched) {
//         if (emailValidation()) {
//             document.getElementById("emailAlert").classList.replace("d-block", "d-none")
//         } else {
//             document.getElementById("emailAlert").classList.replace("d-none", "d-block")
//         }
//     }
//     if (phoneInputTouched) {
//         if (phoneValidation()) {
//             document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
//         } else {
//             document.getElementById("phoneAlert").classList.replace("d-none", "d-block")
//         }
//     }
//     if (ageInputTouched) {
//         if (ageValidation()) {
//             document.getElementById("ageAlert").classList.replace("d-block", "d-none")
//         } else {
//             document.getElementById("ageAlert").classList.replace("d-none", "d-block")
//         }
//     }
//     if (passwordInputTouched) {
//         if (passwordValidation()) {
//             document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
//         } else {
//             document.getElementById("passwordAlert").classList.replace("d-none", "d-block")
//         }
//     }
//     if (repasswordInputTouched) {
//         if (repasswordValidation()) {
//             document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
//         } else {
//             document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")
//         }
//     }
//     if (nameValidation() && emailValidation() && phoneValidation() && ageValidation() && passwordValidation() && repasswordValidation()) {
//         document.getElementById("submitBtn").removeAttribute("disabled")
//     } else {
//         document.getElementById("submitBtn").setAttribute("disabled", true)
//     }
// }

// inputsValidation();

let mainSection = document.getElementById('mainSection');
let spinnerParent = document.getElementById('spinnerParent');
let rowDetailes = document.getElementById('rowDetailes');
let detailes = document.getElementById('detailes');
let btnDetailesClose = document.getElementById('btnDetailesClose');
let side = document.getElementById('side');
let searchSection = document.getElementById('searchSection');

$(document).ready(() => {
    $("#spinnerParent").fadeOut(1000)
    $("body").css("overflow", "visible")
    getMeals()
})
console.log(spinnerParent);
$('#bars').on('click', function () {
    $('.sideBar').toggle(700);
    $('.media').toggle(1000)
});


async function getMeals() {
    mainSection.innerHTML = '';
    searchSection.innerHTML = '';
    $("#spinnerParent").fadeIn(200)
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=beef`;
    let response = await fetch(url)
    let result = await response.json();
    displayMeals(result.meals)
}

function displayMeals(myArray) {
    let cartoona = ``;
    for (let i = 0; i < myArray.length; i++) {
        cartoona += `
        <div class="col-md-3">
        <div onclick="getMealDetails('${myArray[i].idMeal}')" class="imageParent position-relative overflow-hidden rounded-2 cursor-pointer">
            <img class="w-100" src="${myArray[i].strMealThumb}" alt="">
            <div class="layer position-absolute d-flex align-items-center text-black p-2">
                <h3 class="text-white">${myArray[i].strMeal}</h3>
            </div>
        </div>
</div>
        `
    }
    mainSection.innerHTML = cartoona;
    $("#spinnerParent").fadeOut(1000)
}

async function getCategories() {
    $('.sideBar').toggle(700);
    $('.media').toggle(1000)
    mainSection.innerHTML = '';
    searchSection.innerHTML = '';
    $("#spinnerParent").fadeIn(200)
    let url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    let response = await fetch(url)
    let result = await response.json();
    displayCategories(result.categories)
}
function displayCategories(myArray) {
    cartoona = ``;
    for (let i = 0; i < myArray.length; i++) {
        cartoona += `
        <div class="col-md-3">
        <div onclick="displayCategoriesMaels('${myArray[i].strCategory}')" class="imageParent position-relative overflow-hidden rounded-2 cursor-pointer">
            <img class="w-100" src="${myArray[i].strCategoryThumb}"  alt="">
            <div class="layer flex-column position-absolute d-flex align-items-center text-black p-2">
                <h3 class="text-white">${myArray[i].strCategory}</h3>
                <p class="text-white">${myArray[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
            </div>
        </div>
</div>
        `
    }
    mainSection.innerHTML = cartoona;
    $("#spinnerParent").fadeOut(1000)
}


async function displayCategoriesMaels(category) {
    mainSection.innerHTML = '';
    $("#spinnerParent").fadeIn(200)
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    let response = await fetch(url);
    let result = await response.json();
    displayMeals(result.meals)
}

async function getArea() {
    $('.sideBar').toggle(700);
    $('.media').toggle(1000)
    mainSection.innerHTML = '';
    searchSection.innerHTML = '';
    $("#spinnerParent").fadeIn(200)
    let url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    let response = await fetch(url);
    let result = await response.json()
    displayArea(result.meals)
}

function displayArea(myArray) {
    let cartoona = ``;
    for (let i = 0; i < myArray.length; i++) {
        cartoona += ` 
               <div class="col-md-3">
        <div onclick="getAreaMeals('${myArray[i].strArea}')" class="rounded-2 text-center cursor-pointer">
                <i class="fa-solid fa-house-laptop fa-4x text-white"></i>
                <h3 class="text-white">${myArray[i].strArea}</h3>
        </div>
</div>

        `
    }
    mainSection.innerHTML = cartoona;
    $("#spinnerParent").fadeOut(1000)
}

async function getAreaMeals(area) {
    mainSection.innerHTML = '';
    searchSection.innerHTML = '';
    $("#spinnerParent").fadeIn(200)
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
    let response = await fetch(url);
    let result = await response.json()
    console.log(result.meals);
    displayMeals(result.meals)
}

async function getIngrediendts() {
    $('.sideBar').toggle(700);
    $('.media').toggle(1000)
    mainSection.innerHTML = '';
    searchSection.innerHTML = '';
    $("#spinnerParent").fadeIn(200);
    let url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    let response = await fetch(url);
    let result = await response.json();
    displayIngrediendts(result.meals)
}

function displayIngrediendts(myArray) {
    let cartoona = ``;
    for (let i = 0; i < myArray.length; i++) {
        let description = myArray[i].strDescription || ''; // Handle null or undefined
        description = description.replace(/<[^>]*>/g, ''); // Remove HTML tags
        let limitedDescription = limitWords(description, 20);

        cartoona += `
        <div class="col-md-3">
            <div onclick="getIngrediendtsMeals('${myArray[i].strIngredient}')" class="rounded-2 text-center cursor-pointer">
                <i class="fa-solid fa-drumstick-bite fa-4x text-white"></i>
                <h3 class="text-white">${myArray[i].strIngredient}</h3>
                <p class="text-white">${limitedDescription}</p>
            </div>
        </div>
        `;
    }
    mainSection.innerHTML = cartoona;
    $("#spinnerParent").fadeOut(1000);
}

function limitWords(text, wordLimit) {
    let words = text.split(/\s+/); // Split by any whitespace character
    let limitedWords = words.slice(0, wordLimit);
    return limitedWords.join(' ');
}


async function getIngrediendtsMeals(KindOfFood) {
    mainSection.innerHTML = '';
    searchSection.innerHTML = '';
    $("#spinnerParent").fadeIn(200);
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${KindOfFood}`;
    let response = await fetch(url);
    let result = await response.json();
    displayMeals(result.meals)
}

async function getMealDetails(id) {
    mainSection.innerHTML = '';
    searchSection.innerHTML = '';
    $("#spinnerParent").fadeIn(200);
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    let response = await fetch(url);
    let result = await response.json();
    console.log(result.meals);
    displayDetailes(result.meals)
}



function displayDetailes(myArray) {
    detailes.classList.remove('d-none');
    side.classList.add('d-none');

    cartoona = '';
    for (let i = 0; i < myArray.length; i++) {
        cartoona += `
            <div class="col-md-4">
                <div class="deataileHead">
                    <img src="${myArray[i].strMealThumb}" class="w-100" alt="">
                    <h2 class="text-white" id="foodName">${myArray[i].strMeal}</h2>
                </div>
            </div>
            <div class="col-md-8">
            <h2 class="text-white">instructions</h2>
            <p class="text-white" id="explainFood">${myArray[i].strInstructions}</p>
            <h2 id="area" class="fw-bold  text-white text-capitalize">Area: <span
                    class="fs-3 fw-medium text-capitalize">${myArray[i].strArea}</span></h2>
            <h2 id="category" class="fw-bold  text-white   text-capitalize">category: <span
                    class="fs-3 fw-medium text-capitalize">${myArray[i].strCategory}</span>
            </h2>
            <div class="recipesDetaileas mb-3" id="recipesDetaileas">
                <h2 id="recipes" class="fw-bold mb-3   text-white  text-capitalize">recipes: </h2>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-warning m-2 p-1"> ${myArray[i].strIngredient1}</li>
        </ul>
            </div>
            <div class="tagsContent mb-3" id="tagsContent">
                <h2 id="tags" class="fw-bold   text-white  text-capitalize mb-3">tags: </h2>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-info m-2 p-1">${myArray[i].strMeasure1}</li>
            </ul>
                                </div>
            <a href="${myArray[i].strSource}" class="btn btn-success">Source</a>
            <a href="${myArray[i].strYoutube}" class="btn btn-danger">YouTube</a>
            </div>
        `;
    }

    rowDetailes.innerHTML = cartoona;
    $("#spinnerParent").fadeOut(1000);
}


async function closeDetails() {
    detailes.classList.add('d-none');
    side.classList.remove('d-none');
    searchContainer();
    $("#spinnerParent").fadeOut(1000);
}

async function searchContainer() {
    $("#spinnerParent").fadeIn(200);
    $('.sideBar').toggle(700);
    $('.media').toggle(1000)
    mainSection.innerHTML = '';
    searchSection.innerHTML = `
    <div class="container  my-5 py-5 d-flex justify-content-between">
    <input id="searchByName" oninput="searchBn(this.value)" type="text" placeholder="Search By Name"
        class="form-control bg-transparent text-white me-1">
    <input id="searchByFirstLetter" maxlength="1" oninput="searchBFl(this.value)" type="text"
        placeholder="Search By First Letter" class="form-control bg-transparent text-white ms-1">
</div>
    `;
    $("#spinnerParent").fadeOut(1000);
}


async function searchBn(inputValueName) {
    $("#spinnerParent").fadeIn(200);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValueName}`;
    let response = await fetch(url);
    let result = await response.json()
    displayMeals(result.meals)
}

async function searchBFl(inputValueLetter) {
    $("#spinnerParent").fadeIn(200);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValueLetter}`;
    let response = await fetch(url);
    let result = await response.json()
    console.log(result.meals);
    displayMeals(result.meals)
}

function displayContact() {
    $("#spinnerParent").fadeIn(200);
    mainSection.innerHTML = `

    <div class="vh-100 d-flex justify-content-center align-items-center">
    <div class="d-flex flex-wrap">
        <div class="w-50 px-2">
            <input id="username" type="text" placeholder="Name" class="form-control" oninput="validateUsername(this.value)">
            <div id="usernameError" class="error-message"></div>
        </div>

        <div class="w-50 px-2">
            <input id="email" class="form-control" placeholder="Email" type="email" oninput="validateEmail(this.value)">
            <div id="emailError" class="error-message"></div>
        </div>

        <div class="w-50 px-2">
            <input id="Age" class="form-control" placeholder="Age" type="number" oninput="validateAge(this.value)">
            <div id="AgeError" class="error-message"></div>
        </div>

        <div class="w-50 px-2">
            <input id="phone" class="form-control" placeholder="Phone" type="text" oninput="validatePhone(this.value)">
            <div id="phoneError" class="error-message"></div>
        </div>
        <div class="w-50 px-2">
            <input id="password" class="form-control" placeholder="Password" type="password" oninput="validatePassword(this.value)">
            <div id="passwordError" class="error-message"></div>
        </div>

        <div class="w-50 px-2">
            <input id="repassword" class="form-control" placeholder="Re-enter Password" type="password" oninput="validateRepassword(this.value)">
            <div id="repasswordError" class="error-message"></div>
        </div>
        <div class="w-100 text-center pt-2 px-2">
            <button id="submitButton" type="submit" class="btn btn-primary" onclick="submitForm()" disabled>Submit</button>
        </div>
    </div>
</div>
    `;
    $("#spinnerParent").fadeOut(1000);
}
let one;
let two;
let three;
let four;
let five;
let six;
function validateUsername(value) {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    const usernameErrorElement = document.getElementById('usernameError');
    one = usernameRegex
    if (usernameRegex.test(value)) {
        usernameErrorElement.textContent = '';
    } else {
        usernameErrorElement.textContent = 'Username must be 3-16 characters long and can only contain letters, numbers, underscores, and hyphens.';
    }
    updateSubmitButton()
}

function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailErrorElement = document.getElementById('emailError');
    two = emailRegex
    if (emailRegex.test(value)) {
        emailErrorElement.textContent = '';
    } else {
        emailErrorElement.textContent = 'Please enter a valid email address.';
    }
    updateSubmitButton()
}

function validateAge(value) {
    const ageRegex = /^(0?[1-9]|[1-9][0-9])$/;
    const ageErrorElement = document.getElementById('AgeError');
    three = ageRegex
    if (ageRegex.test(value)) {
        ageErrorElement.textContent = '';
    } else {
        ageErrorElement.textContent = 'Please enter a valid age.';
    }
    updateSubmitButton()
}

function validatePhone(value) {
    const phoneRegex = /^\d{10}$/;
    const phoneErrorElement = document.getElementById('phoneError');
    four = phoneRegex
    if (phoneRegex.test(value)) {
        phoneErrorElement.textContent = '';
    } else {
        phoneErrorElement.textContent = 'Please enter a valid phone number.';
    }
    updateSubmitButton()
}

function validatePassword(value) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\S]{8,}$/;
    const passwordErrorElement = document.getElementById('passwordError');
    five = passwordRegex
    if (passwordRegex.test(value)) {
        passwordErrorElement.textContent = '';
    } else {
        passwordErrorElement.textContent = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one special character.';
    }
    updateSubmitButton()
}

function validateRepassword(value) {
    const passwordValue = document.getElementById('password').value;
    const repasswordErrorElement = document.getElementById('repasswordError');
    six = passwordValue
    if (value === passwordValue) {
        repasswordErrorElement.textContent = '';
    } else {
        repasswordErrorElement.textContent = 'Passwords do not match.';
    }
    updateSubmitButton()
}
async function updateSubmitButton() {
    const submitButton = document.getElementById('submitButton');
    const usernameError = document.getElementById('usernameError').textContent;
    const emailError = document.getElementById('emailError').textContent;
    const ageError = document.getElementById('AgeError').textContent;
    const phoneError = document.getElementById('phoneError').textContent;
    const passwordError = document.getElementById('passwordError').textContent;

    if (
        usernameError == one &&
        emailError == two &&
        ageError == three &&
        phoneError == four &&
        passwordError == five
    ) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'true');
    }
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', updateSubmitButton);
});