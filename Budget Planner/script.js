const cash = document.getElementById("cash-input");
const card = document.getElementById("card-input");
const price = document.getElementById("price-input");
const desc = document.getElementById("description-input");
const submitBtn = document.getElementById("submit");
const table = document.getElementById("history");
const radioCash = document.getElementById("radio-cash");
const radioCard = document.getElementById("radio-card");
let useCash, remainingCash, remainingCard;

submitBtn.addEventListener("click", (event) => {   
    if (radioCash.checked) {
        remainingCash = cash.value - price.value;
        remainingCard = card.value;
    } else if (radioCard.checked) {
        remainingCard = card.value - price.value;
        remainingCash = cash.value;
    } else {
        alert("Please select a button!");
        event.preventDefault();
        return;
    }

    table.innerHTML += `
    <tr>
        <td>${price.value}</td>
        <td>${desc.value}</td>
        <td>${remainingCash}</td>
        <td>${remainingCard}</td>
    </tr>
    `

    cash.value = remainingCash;
    card.value = remainingCard;
    desc.value = '';
    price.value = ''
    radioCash.checked = false;

    event.preventDefault();
});

const method = (bool) => {
    useCash = bool;
    return;
};