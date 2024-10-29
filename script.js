const cash = document.getElementById("cash-input");
const card = document.getElementById("card-input");
const price = document.getElementById("price-input");
const desc = document.getElementById("description-input");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const table = document.getElementById("history");
const radioCash = document.getElementById("radio-cash");
const radioCard = document.getElementById("radio-card");
const totalMoneySpentDOM = document.getElementById("total-money-spent");
const totalCashSpentDOM = document.getElementById("total-cash-spent");
const totalCardSpentDOM = document.getElementById("total-card-spent");
const totalMoneyRemainingDOM = document.getElementById("total-money-remaining");
const totalCashRemainingDOM = document.getElementById("total-cash-remaining");
const totalCardRemainingDOM = document.getElementById("total-card-remaining");

let useCash, remainingCash, remainingCard;
let totalMoneySpent = 0; 
let totalCashSpent = 0; 
let totalCardSpent = 0; 
let undoCounter = false;
let lastState = [];

submitBtn.addEventListener("click", (event) => {   
    if (radioCash.checked) {
        remainingCash = cash.value - price.value;
        remainingCard = card.value;
        totalCashSpent += Number(price.value);
    } else if (radioCard.checked) {
        remainingCard = card.value - price.value;
        remainingCash = cash.value;
        totalCardSpent += Number(price.value);
    } else {
        alert("Please select a button!");
        return;
    }

    totalMoneySpent += Number(price.value);

    table.innerHTML += `
    <tr>
        <td>${price.value}</td>
        <td>${desc.value}</td>
        <td><i class="fa-solid fa-money-bill"></i> ${remainingCash} / <i class="fa-solid fa-credit-card"></i> ${remainingCard}</td>
    </tr>
    `

    cash.value = remainingCash;
    card.value = remainingCard;
    desc.value = '';
    price.value = '';

    totalMoneySpentDOM.innerHTML = totalMoneySpent;
    totalCashSpentDOM.innerHTML = totalCashSpent;
    totalCardSpentDOM.innerHTML = totalCardSpent;
    totalMoneyRemainingDOM.innerHTML = Number(cash.value) + Number(card.value);
    totalCashRemainingDOM.innerHTML = cash.value;
    totalCardRemainingDOM.innerHTML = card.value;
});

resetBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to reset? All progress will be lost.")) {
        cash.value = "";
        card.value = "";
        desc.value = "";
        price.value = "";

        table.innerHTML = "";
        totalMoneySpentDOM.innerHTML = 0;
        totalCashSpentDOM.innerHTML = 0;
        totalCardSpentDOM.innerHTML = 0;
        totalMoneyRemainingDOM.innerHTML = 0;
        totalCashRemainingDOM.innerHTML = 0;
        totalCardRemainingDOM.innerHTML = 0;
    } else {
        return;
    }
});