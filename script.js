const real_file = document.getElementById("real_file");
const custom_file = document.querySelector(".inner-container2");
const custom_text = document.querySelector("#custom_text");

custom_file.addEventListener("click", function() {
    real_file.click();
});

real_file.addEventListener("change", function() {
    if (real_file.value) {
        custom_text.innerText = real_file.value;
    }
});

const year = document.querySelector(".current_year");
year.innerHTML = new Date().getFullYear();