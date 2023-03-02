import React from 'react';
import "../../../css/lesson1.css";
import "../../../css/custom.css";
import Draw from './draw';
import useCopyToClipboard from '../../../utils/useCopyToClipboard';

const LetterShape = ({code}) => {



    let alphabetsList = [
        { label: "a", value: `అ` },
        { label: "aa", value: "ఆ" },
        { label: "i", value: "ఇ" },
        { label: "ee", value: "ఈ" },
        { label: "u", value: "ఉ" },
        { label: "oo", value: "ఊ" },
        { label: "ru", value: "ఋ" },
        { label: "e", value: "ఎ" },
        { label: "ai", value: "ఏ" },
        { label: "o", value: "ఒ" },
        { label: "au", value: "ఔ" },
        { label: "ka", value: "క" },
        { label: "kha", value: "ఖ" },
        { label: "ga", value: "గ" },
        { label: "gha", value: "ఘ" },
        { label: "nga", value: "ఙ" },
        { label: "cha", value: "చ" },
        { label: "chha", value: "ఛ" },
        { label: "ja", value: "జ" },
        { label: "jha", value: "ఝ" },
        { label: "nya", value: "ఞ" },
        { label: "ta", value: "ట" },
        { label: "tha", value: "ఠ" },
        { label: "da", value: "డ" },
        { label: "dha", value: "ఢ" },
        { label: "na", value: "ణ" },
        { label: "pa", value: "ప" },
        { label: "pha", value: "ఫ" },
        { label: "ba", value: "బ" },
        { label: "bha", value: "భ" },
        { label: "ma", value: "మ" },
        { label: "ya", value: "య" },
        { label: "ra", value: "ర" },
        { label: "la", value: "ల" },
        { label: "va", value: "వ" },
        { label: "sha", value: "శ" },
        { label: "shha", value: "ష" },
        { label: "sa", value: "స" },
        { label: "ha", value: "హ" },
        { label: "ksha", value: "క్ష" },
        { label: "tra", value: "త్ర" },
    ];

    const [isCopied, handleCopy] = useCopyToClipboard();

    let letterLabel = document.querySelector(".letter-label");
    let letterA = document.querySelector(".letter-a");
    let letterValue = document.querySelector(".letter-val");

    const nextPrevLetter = (btnType) => {
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
    let textInputField = letterValue?.innerHTML ?? "";
    let utterThis = new SpeechSynthesisUtterance()
    let synth = window.speechSynthesis;
    let ourText = "";

    const handleSubmit = (e) => {
        e.preventDefault()
        ourText = textInputField
        utterThis.text = ourText
        synth.speak(utterThis)
        textInputField = ""
    }

    function sample(arr, req) {
        arr = arr.sort(() => { return 0.5 - Math.random() });
        let i = 0,
            array = [];
        while (i < req) {
            array.push(arr[i])
            ++i
        }
        return array
    }

    let arr = [1, 2, 3, 4, 5];
    console.log(sample(arr, 2));
    console.log('speechSynthesis' in window ? console.log("Web Speech API supported!") : console.log("Web Speech API not supported :-("))
    return (
        <>
            <div className='letters-header'>
                <h1>Let's understand how to write Telugu Alphabets</h1>
                <button id="lesson-end-btn">Finish</button>
            </div>
            <div className='letters'>
                <div className='letters-display'>
                    <div className='letter-label'>{alphabetsList[0].label ?? ""}=</div>
                    <div className='letter-val'>{alphabetsList[0].value ?? ""}</div>
                    <div className='letter-a'>{alphabetsList[0].value ?? ""}</div>
                    <button onClick={()=> handleCopy("copy")}>{isCopied ? "Copied" : "oops"}</button>
                    <div className='letter-drawing-canva'>
                        <Draw />
                    </div>
                </div>
                <button className="custom-btn" id="prev-letter-btn" onClick={() => nextPrevLetter("prev")}>Previous</button>
                <button className="custom-btn" id="next-letter-btn" onClick={() => nextPrevLetter("next")}>Next</button>
                <button className="custom-btn" id="prev-letter-btn" onClick={(e) => handleSubmit(e)}>speak</button>
            </div>
        </>
    )
}
export default LetterShape;