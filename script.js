
let submitBtn = document.getElementById("submitBtn");


let bmiCalculate = () => {
    let height = document.getElementById("height").value;

    let weight = document.getElementById("weight").value;
    let h = height / 100;
    let bmi = weight / (h * h);
    document.getElementById("result").innerHTML = `Your BMI is ${bmi}`;
}

submitBtn.addEventListener("click", bmiCalculate);