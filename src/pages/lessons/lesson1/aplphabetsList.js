import React from 'react';


const nextPrevLetter = (btnType) => {
    let letterLabel = document.querySelector(".letter-label");
    let letterValue = document.querySelector(".letter-val");
    let letterA = document.querySelector(".letter-a");

    let currentLetterIndex = alphabetsList?.findIndex((letter) => letter.value === letterA.innerHTML);

    if (btnType == "next") {
        currentLetterIndex++;
        if (currentLetterIndex < alphabetsList.length)
            letterLabel.innerHTML = alphabetsList[currentLetterIndex].label + "=";
        letterValue.innerHTML = alphabetsList[currentLetterIndex].value;
        letterA.innerHTML = alphabetsList[currentLetterIndex].value;

    } else {
        currentLetterIndex--;
        if (currentLetterIndex >= 0)
            letterLabel.innerHTML = alphabetsList[currentLetterIndex].label + "=";
        letterValue.innerHTML = alphabetsList[currentLetterIndex].value;
        letterA.innerHTML = alphabetsList[currentLetterIndex].value;

    }
}

export default nextPrevLetter;