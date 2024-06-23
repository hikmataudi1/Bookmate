const quotes =[
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans." ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things." 
]
const btn = document.querySelector("#generateButton")
const quote =document.querySelector("#quote")
const btnContainer = document.querySelector(".btnContainer")
const copyButton = document.querySelector(".copyButton")


btn.addEventListener("click" , generateQuote)
copyButton.addEventListener("click", ()=>{

    const textToCopy =quote.textContent
    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log("Text copied to clipboard successfully");
        alert("Text copied to clipboard!");
    }).catch((error) => {
        console.error("Unable to copy text to clipboard: ", error);
        alert("Failed to copy text to clipboard!");
    });
})


function generateQuote(){
    const randnum = Math.floor(Math.random()*quotes.length)
    quote.textContent= quotes[randnum]
}


