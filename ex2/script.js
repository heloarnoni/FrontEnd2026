const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

celsius.addEventListener("input", () => {
    let c = Number(celsius.value);

    if (celsius.value === "") {
        fahrenheit.value = "";
        return;
    }

    fahrenheit.value = ((c * 9/5) + 32).toFixed(2);
});

fahrenheit.addEventListener("input", () => {
    let f = Number(fahrenheit.value);

    if (fahrenheit.value === "") {
        celsius.value = "";
        return;
    }

    celsius.value = ((f - 32) * 5/9).toFixed(2);
});