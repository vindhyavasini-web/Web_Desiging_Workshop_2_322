function findLargest() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("result").innerHTML =
            "Please enter all three numbers.";
        return;
    }

    let largest = Math.max(num1, num2, num3);

    document.getElementById("result").innerHTML =
        "Largest Number: " + largest;
}