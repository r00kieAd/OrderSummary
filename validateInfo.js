const displayInfo = document.querySelector(".card-text");
const button = document.querySelector(".btn");
var proceed;

function checkName(e) {
    let text = e.value;
    const hasNumber = /\d/.test(text);
    if (hasNumber) {
        button.classList.add("disabled");
        e.classList.add("error");
        displayInfo.classList.add("error");
        displayInfo.textContent = "Enter a valid name";
        proceed = false;
    } else {
        button.classList.remove("disabled");
        e.classList.remove("error");
        displayInfo.classList.remove("error");
        displayInfo.textContent = "Enter your card's information";
        proceed = true;
    }
}

function checkCard(e) {
    let num = e.value;
    const hasNumber = /^[0-9]+$/.test(num);
    if (!hasNumber) {
        button.classList.add("disabled");
        e.classList.add("error");
        displayInfo.classList.add("error");
        displayInfo.textContent = "Enter a valid card number";
        proceed = false;
    } else {
        proceed = true;
        button.classList.remove("disabled");
        e.classList.remove("error");
        displayInfo.classList.remove("error");
        displayInfo.textContent = "Enter your card's information";
    }
}

const curr_d = new Date();
function checkDate(e) {
    let d = new Date(e.value);
    if (Date.parse(curr_d) > Date.parse(d)) {
        button.classList.add("disabled");
        e.classList.add("error");
        displayInfo.classList.add("error");
        displayInfo.textContent = "This card has expired!";
        proceed = false;
    } else {
        button.classList.remove("disabled");
        e.classList.remove("error");
        displayInfo.classList.remove("error");
        displayInfo.textContent = "Enter your card's information";
        proceed = true;
    }
}

function checkCvv(e) {
    let num = e.value;
    const hasNumber = /^[0-9]+$/.test(num);
    if (!hasNumber) {
        button.classList.add("disabled");
        e.classList.add("error");
        displayInfo.classList.add("error");
        displayInfo.textContent = "Enter a valid cvv";
        proceed = false;
    } else {
        button.classList.remove("disabled");
        e.classList.remove("error");
        displayInfo.classList.remove("error");
        displayInfo.textContent = "Enter your card's information";
        proceed = true;
    }
}

function validateInfo() {
    if (!proceed) {
        return
    }
    let card = document.querySelector("#card");
    let cvv = document.querySelector("#cvv");
    if (String(card.value).length != 16) {
        button.classList.add("disabled");
        card.classList.add("error");
        displayInfo.classList.add("error");
        displayInfo.textContent = "Card number should be 16 digits long";
        return
    } else {
        button.classList.remove("disabled");
        card.classList.remove("error");
        displayInfo.classList.remove("error");
        displayInfo.textContent = "Enter your card's information";
    }

    if (String(cvv.value).length != 3) {
        button.classList.add("disabled");
        cvv.classList.add("error");
        displayInfo.classList.add("error");
        displayInfo.textContent = "cvv must be of 3 digits";
        return
    } else {
        button.classList.remove("disabled");
        card.classList.remove("error");
        displayInfo.classList.remove("error");
        displayInfo.textContent = "Enter your card's information";
    }

    displayInfo.textContent = "Processing...";
    document.querySelector(".loader").style.display = "block";
    setTimeout(function () {
        document.querySelector(".loader").style.display = "none";
        window.location.href = "thankYou.html";
    }, 1000);
}