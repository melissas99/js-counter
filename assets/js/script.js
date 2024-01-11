let counterValue = 0;

function updateCounter() {
    document.getElementById('counter').textContent = counterValue;
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
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className == "light-theme") {
        document.getElementById('btn-change').textContent = "Dark";
    } else {
        document.getElementById('btn-change').textContent = "Light";
    }

    console.log('current class name: ' + className);

}