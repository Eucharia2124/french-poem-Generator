function displayPoem(response) {

   new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generatePoem(event) {
    event.preventDefault()

    let instructionInput = document.querySelector("#user-instructions");
    let apiKey = "35f4a664892ct08f69ca41oe92eb5099";
    let prompt = `User instructions: Generate a short poem in French about ${instructionInput.value}`;
    let context = "You are a romantin poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separete each line with a <br />. Make sure the poem in basic HTML. make sure to follow the user`s instructions. Do not include a title to the poem, Sign the poem with `SheCodes AI` inside a <strong> element";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class = "generating">❤ Generating a French poem about ${instructionInput.value}</div>`;


   
    axios.get(apiUrl).then(displayPoem);
};


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);