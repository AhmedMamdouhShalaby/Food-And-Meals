let ingredientsRow = document.getElementById('ingredientsRow')
$('#searchLnk').click(function () {
    $('#spinnerParent').fadeIn();
    $('#searchSection').show(500)
    $('#searchSection').css({
        zIndex: 999,
    })
    categoriesSection.classList.add('d-none')
    contactSection.classList.add('d-none')
    ingredientsRow.classList.add('d-none')
    areaSection.classList.add('d-none')

    ingredientsSection.classList.add('d-none')

    $('.sideBar').toggle(700);
})


$('#ingredientsLnk').click(function () {
    $('#spinnerParent').fadeIn();
    getIngrediendts()
    $('#ingredientsSection').show(500)
    $('#ingredientsSection').css({
        zIndex: 999,
    })
    ingredientsRow.classList.remove('d-none')
    categoriesSection.classList.add('d-none')

    searchSection.classList.add('d-none')
    contactSection.classList.add('d-none')
    areaSection.classList.add('d-none')
    $('.sideBar').toggle(700);
})

$('#areaLnk').click(function () {
    $('#spinnerParent').fadeIn();
    getArea()
    $('#areaSection').show(500)
    $('#areaSection').css({
        zIndex: 999,
    })
    searchSection.classList.add('d-none')
    categoriesSection.classList.add('d-none')
    contactSection.classList.add('d-none')
    ingredientsSection.classList.add('d-none')
    $('.sideBar').toggle(700);
})
$('#contactLnk').click(function () {
    $('#contactSection').show(500)
    $('#contactSection').css({
        zIndex: 999,
    })
    contactSection.classList.remove('d-none')

    searchSection.classList.add('d-none')
    categoriesSection.classList.add('d-none')
    areaSection.classList.add('d-none')
    ingredientsSection.classList.add('d-none')
    $('.sideBar').toggle(700);
})

$('#bars').on('click', function () {
    $('.sideBar').toggle(700);
    $('.media').toggle(1000)
});

// ================================================ //
let allMeals = [];
const mainSection = document.getElementById('mainSection');
const spinnerParent = document.getElementById('spinnerParent');
const categoriesSection = document.getElementById('categoriesSection');
const detailes = document.getElementById('detailes');
const rowDetailes = document.getElementById('rowDetailes');
const searchByFirstLetter = document.getElementById('searchByFirstLetter');
const searchByName = document.getElementById('searchByName');
let ids = [];

async function getMeals() {
    $('#spinnerParent').fadeIn();
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beaf`;
    let response = await fetch(url);
    let result = await response.json();
    allMeals = result;
    console.log(result);
    $('#spinnerParent').fadeOut(1000);
    function displayMainMeals(arr) {
        let mealsMainBox = ``;
        for (let i = 0; i < arr.meals.length; i++) {
            ids.push(arr.meals[i].idMeal);
            mealsMainBox += `
            <div class="col-md-3 ">
                <div onclick="getId('${arr.meals[i].idMeal}')" class="imageParent rounded-2 position-relative overflow-hidden">
                    <img src="${arr.meals[i].strMealThumb}" alt="food">
                    <div class="layer d-flex justify-content-center align-items-center">
                        <h2 class="text-center px-3">${arr.meals[i].strMeal}</h2>
                    </div>
                </div>
            </div>
            `;
        }
        mainSection.innerHTML = mealsMainBox;
    }
    displayMainMeals();
}
getMeals();

//======= fetching url ==============//
$('#categoriesLnk').click(async function () {
    $('#spinnerParent').fadeIn();
    let url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
    displayCategories(result.categories);
    $('#spinnerParent').fadeOut(1000);
});

function displayCategories(categories) {
    let categoriesBox = ``;
    for (let i = 0; i < categories.length; i++) {
        ids.push(categories[i].idCategory);
        categoriesBox += `
        <div class="col-md-3 py-3 px-2">
            <div onclick="getCategMale('${categories[i].strCategory}')" class="imageParent rounded-2 position-relative overflow-hidden">
                <img src="${categories[i].strCategoryThumb}" class="mx- w-100" alt="food">
                <div class="layer text-center d-flex justify-content-center align-items-center w-100">
                    <div class="layerContent d-flex justify-content-center flex-column align-items-center">
                        <h2>${categories[i].strCategory}</h2>
                        <p>${sliceText(categories[i].strCategoryDescription, 10)}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    categoriesSectionRow.innerHTML = categoriesBox;
}
let categoriesSectionRow = document.getElementById('categoriesSectionRow');

async function getCategMale(catUrl) {
    try {
        let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catUrl}`;
        let response = await fetch(url);
        let result = await response.json();
        console.log(result);

        function disMalesCateg() {
            let categMaleBox = ``;
            for (let i = 0; i < result.meals.length; i++) {
                let meal = result.meals[i];
                categMaleBox += `
                <div class="col-md-3">
                    <div onclick="getId('${meal.idMeal}')" class="imageParent rounded-2 position-relative overflow-hidden">
                        <img src="${meal.strMealThumb}" alt="food">
                        <div class="layer d-flex justify-content-center align-items-center">
                            <h2 class="text-center px-3">${meal.strMeal}</h2>
                        </div>
                    </div>
                </div>
            `;
            }

            categoriesSectionRow.innerHTML = categMaleBox;
        }

        disMalesCateg();
    } catch (error) {
        console.error('Error fetching and displaying category meals:', error);
    }
}

// Example: Call the function with a specific category
getCategMale('Beef');

// =======silde===========//
$('#categoriesLnk').click(function () {
    $('#categoriesSection').show(500);
    $('#categoriesSection').css({
        zIndex: 999,
    });
    $('#searchSection').css({
        zIndex: 1,
    });
    $('#contactSection').css({
        zIndex: 1,
    });
    $('#areaSection').css({
        zIndex: 1,
    });
    $('#ingredientsSection').css({
        zIndex: 1,
    });
    $('.sideBar').toggle(700);
});

function sliceText(text, maxWords) {
    const words = text.split(' ');
    const spliceText = words.slice(0, maxWords).join(' ');
    return spliceText;
}
$('#btnDetailesClose').click(function () {
    detailes.classList.add('d-none')
})

// Define displayDetailes function here
async function displayDetailes(id) {
    let rowDetailes = document.getElementById('rowDetailes');
    rowDetailes.innerHTML = ``;
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
    console.log(id);

    // Assuming you have a div with id 'rowDetailes' where you want to display the details
    detailes.classList.remove('d-none');
    let detailesBox = ``;
    for (let i = 0; i < result.meals.length; i++) {

        let meal = result.meals[i];
        let mealThumb = meal.strMealThumb || '';
        let mealName = meal.strMeal || '';
        let instructions = meal.strInstructions || '';
        let area = meal.strArea || '';
        let category = meal.strMeasure1.concat(meal.strIngredient1) || '';
        let sourceLink = `https://www.bbcgoodfoodme.com/`;

        detailesBox += `
            <div class="col-md-4">
                <div class="deataileHead">
                    <img src="${mealThumb}" class="w-100" alt="${mealName}">
                    <h2 class="text-white">${mealName}</h2>
                </div>
            </div>
            <div class="col-md-8">
                <h2 class="text-white">Instructions</h2>
                <p class="text-white" id="explainFood">${instructions}</p>
                <h2 id="area" class="fw-bold text-white text-capitalize">Area: 
                    <span class="fs-3 fw-medium text-capitalize">${area}</span>
                </h2>
                <h2 id="category" class="fw-bold text-white text-capitalize">Category: 
                    <span class="fs-3 fw-medium text-capitalize">${category}</span>
                </h2>
                <div class="recipesDetaileas mb-3" id="recipesDetaileas">
                    <h2 id="recipes" class="fw-bold mb-3 text-white text-capitalize">Recipes: </h2>
                    <span class="alert alert-info m-2 p-1">${category}</span>
                </div>
                <div class="tagsContent mb-3" id="tagsContent">
                    <h2 id="tags" class="fw-bold text-white text-capitalize mb-3">Tags: </h2>
                    <span class="alert alert-danger m-2 p-1">Soup</span>
                </div>
                <a href="${sourceLink}" target="_blank" class="btn btn-success">Source</a>
                <a href="${meal.strYoutube}" target="_blank" class="btn btn-danger">YouTube</a>
            </div>
        `;
    }

    rowDetailes.innerHTML = detailesBox;
}

async function getId(id) {
    // Call displayDetailes function
    displayDetailes(id);
}

async function getArea() {

    rowArea.innerHTML = "";

    let url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
    let response = await fetch(url);
    let result = await response.json();
    console.log(result.meals);

    displayArea(result.meals);
    $('#spinnerParent').fadeOut(1000);

}

let rowArea = document.getElementById('rowArea');

async function displayArea(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-md-3">
            <div onclick="getAreaMeals('${arr[i].strArea}')" class="rounded-2 text-center cursor-pointer">
                <i class="fa-solid fa-house-laptop fa-4x text-white"></i>
                <h3 class="text-white">${arr[i].strArea}</h3>
            </div>
        </div>
        `;
    }

    rowArea.innerHTML = cartoona;
}


async function getAreaMeals(area) {
    spinnerParent.classList.remove('d-none')
    rowArea.innerHTML = '';
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    let result = await response.json()
    $('#spinnerParent').fadeOut(1000);
    displayAreaMeals(result.meals)
}
async function displayAreaMeals(arr) {
    let mealsMainBox = ``;
    for (let i = 0; i < arr.length; i++) {
        mealsMainBox += `
        <div class="col-md-3 ">
            <div  onclick="getId('${arr[i].idMeal}')" class="imageParent rounded-2 position-relative overflow-hidden">
                <img src="${arr[i].strMealThumb}" alt="food">
                <div class="layer d-flex justify-content-center align-items-center">
                    <h2 class="text-center px-3">${arr[i].strMeal}</h2>
                </div>
            </div>
        </div>
        `;
    }
    rowArea.innerHTML = mealsMainBox;
}

async function getIngrediendts() {
    spinnerParent.classList.remove('d-none')
    ingredientsRow.innerHTML = '';
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    let result = await response.json()
    console.log(result);
    $('#spinnerParent').fadeOut(1000);

    displayIngrediendts(result.meals)
}
async function displayIngrediendts(arr) {
    cartoona = ``;
    for (let i = 0; i < arr.length; i++) {
        const ingredient = arr[i];

        // Check if the required properties exist in the ingredient object
        if (ingredient && ingredient.strIngredient && ingredient.strDescription) {
            const truncatedDescription = ingredient.strDescription.split(" ").slice(0, 20).join(" ");
            cartoona += `
                <div class="col-md-3">
                    <div class="ingredientsContent text-center" onclick="displayIngrediendtsMeals('${ingredient.strIngredient}')">
                        <i class="fa-solid fa-drumstick-bite fa-4x text-white my-2"></i>
                        <h3 class="text-capitalize text-white my-2">${ingredient.strIngredient}</h3>
                        <p class="text-white">${truncatedDescription}</p>
                    </div>
                </div>
            `;
        }
    }
    ingredientsRow.innerHTML = cartoona;
}



async function displayIngrediendtsMeals(KindOfFood) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${KindOfFood}`)
    let result = await response.json()
    console.log(result.meals);
    displayIngrediendts(result.meals)
}

async function searchBn(value) {
    spinnerParent.classList.remove('d-none')

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    let result = await response.json();
    $('#spinnerParent').fadeOut(1000);
    displaySearchedData(result.meals)
}
let searched = document.getElementById('searched');
async function displaySearchedData(term) {
    cartoona = ``;
    for (let i = 0; i < term.length; i++) {
        cartoona += `
        
            <div class="col-md-3 ">
                <div onclick="getId('${term[i].idMeal}')" class="imageParent rounded-2 position-relative overflow-hidden">
                    <img src="${term[i].strMealThumb}" alt="food">
                    <div class="layer d-flex justify-content-center align-items-center">
                        <h2 class="text-center px-3">${term[i].strMeal}</h2>
                    </div>
                </div>
            </div>
            `;

    }
    searched.innerHTML = cartoona
}

async function searchBFl(value) {
    spinnerParent.classList.remove('d-none')
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`)
    let result = await response.json();
    $('#spinnerParent').fadeOut(1000);
    displaySearchedData(result.meals)
}



function showContacts() {
    submitBtn = document.getElementById("submitBtn")


    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputTouched = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputTouched = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputTouched = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputTouched = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputTouched = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputTouched = true
    })
}

let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;






function nameValidation() {
    nameInputTouched = true;
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    emailInputTouched = true;
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    phoneInputTouched = true;
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    ageInputTouched = true;
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    passwordInputTouched = true;
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    repasswordInputTouched = true;
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}

function inputsValidation() {
    if (nameInputTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")
        }
    }
    if (emailInputTouched) {
        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")
        }
    }
    if (phoneInputTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")
        }
    }
    if (ageInputTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")
        }
    }
    if (passwordInputTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")
        }
    }
    if (repasswordInputTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")
        }
    }
    if (nameValidation() && emailValidation() && phoneValidation() && ageValidation() && passwordValidation() && repasswordValidation()) {
        document.getElementById("submitBtn").removeAttribute("disabled")
    } else {
        document.getElementById("submitBtn").setAttribute("disabled", true)
    }
}

inputsValidation();
