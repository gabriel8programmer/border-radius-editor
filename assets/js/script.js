
const ranges = document.querySelectorAll(".container-box input[type='range']");
const box = document.querySelector("#box");
const inputCopy = document.querySelector(".input-copy");
const btnCopy = document.querySelector("#copy");

function copyClipboard() {
    const allStyles = window.getComputedStyle(box);
    const borderRadiusValue = allStyles.getPropertyValue("border-radius");
    // Copy the text inside the text field
    navigator.clipboard.writeText(borderRadiusValue);
    //show message from info
    alert("Copiado para a área de transferência.");
}

function handleRange(e){
    let newRanges = [...ranges];
    const values = newRanges.map(range => range.value);
    //set values
    const tl = values[0];//topleft
    const tr = values[1];//topright
    const bl = values[2];//bottomleft
    const br = values[3];//bottomright
    box.style.borderRadius = `${tl}% ${tr}% ${br}% ${bl}%`;
    //get value of the border radius
    const allStyles = window.getComputedStyle(box);
    const borderRadiusValue = allStyles.getPropertyValue("border-radius");
    //attribute in the input the value of the border radius
    inputCopy.value = borderRadiusValue;
}

ranges.forEach(range => range.addEventListener("input", handleRange));

btnCopy.addEventListener("click", copyClipboard);