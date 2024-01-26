let counterValue = 0;

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    const mainContainer = document.createElement("div");
    mainContainer.id = "main-container";

    const header = document.createElement("div");
    header.id = "header";

    const changeButton = document.createElement("button");
    changeButton.id = "btn-change";
    changeButton.textContent = "Dark";
    changeButton.addEventListener("click", changeTheme);

    const counterContainer = document.createElement("div");
    counterContainer.className = "counter-container";

    const counterHeading = document.createElement("h1");
    counterHeading.id = "counter";
    counterHeading.textContent = "0";

    const buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttons";

    const decrementButton = document.createElement("button");
    decrementButton.textContent = "-";
    decrementButton.addEventListener("click", decrement);

    const incrementButton = document.createElement("button");
    incrementButton.textContent = "+";
    incrementButton.addEventListener("click", increment);


    body.className = "light-theme";
    body.appendChild(mainContainer);

    header.appendChild(changeButton);
    mainContainer.appendChild(header);

    counterContainer.appendChild(counterHeading);
    buttonsContainer.appendChild(decrementButton);
    buttonsContainer.appendChild(incrementButton);
    counterContainer.appendChild(buttonsContainer);
    mainContainer.appendChild(counterContainer);
});

function updateCounter() {
    document.getElementById("counter").textContent = counterValue;
}

function increment() {
    counterValue++;
    updateCounter();
}

function decrement() {
    if (counterValue > 0) {
        counterValue--;
        updateCounter();
    }
}

function changeTheme() {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    const className = document.body.className;
    if (className == "light-theme") {
        document.getElementById("btn-change").textContent = "Dark";
    } else {
        document.getElementById("btn-change").textContent = "Light";
    }

    console.log("current class name: " + className);
}
