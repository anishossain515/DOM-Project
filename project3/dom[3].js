let textInput = document.querySelector('#textInput');
let wordCount = document.querySelector('#wordCount')

textInput.addEventListener("input",()=>{
    const text = textInput.value.trim();

    const word = text.spilt(/\s+/).filter(word => word.length > 0);

    wordCount.textContent = word.length
})

