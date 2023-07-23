var plan;

function cancelOrder() {
    document.querySelector(".loader").style.display = "block";
    setTimeout(function () {
        document.querySelector(".loader").style.display = "none";
        window.location.href = "orderCancelled.html";
    }, 1000);
}

function toPayment() {
    document.querySelector(".loader").style.display = "block";
    setTimeout(function () {
        document.querySelector(".loader").style.display = "none";
        window.location.href = "payment.html";
    }, 1000);
}

function toHome() {
    document.querySelector(".loader").style.display = "block";
    setTimeout(function () {
        document.querySelector(".loader").style.display = "none";
        window.location.href = "index.html";
    }, 1000);
}

function toPlans() {
    document.querySelector(".loader").style.display = "block";
    setTimeout(function () {
        document.querySelector(".loader").style.display = "none";
        window.location.href = "plans.html";
    }, 1000);
}


function selectPlan() {
    var plans = document.querySelectorAll(".form-check-input");
    var i = 0;
    for (const selectedPlan of plans) {
        if (selectedPlan.checked) {
            document.getElementsByTagName("h3")[0].style.color = "black";
            document.querySelector(".loader").style.display = "block";
            const newPlan = document.querySelectorAll(".form-check-label")[i].innerText;
            window.localStorage.setItem("inputValue", newPlan);
            setTimeout(function () {
                document.querySelector(".loader").style.display = "none";
                window.location.href = "index.html";
            }, 1000);
            return
        }
        i++;
    }
    document.getElementsByTagName("h3")[0].style.color = "#FF6666";

}