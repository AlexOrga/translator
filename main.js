console.log('hi');

var spanish = {
        "a": "un",
        "an": "un",
        "the": "el",
        "and": "y",
        "happy": "feliz",
        "holiday": "fiesta",
        "holidays": "fiestas",
        "new": "nuevo",
        "year": "ano",
        "christmas": "navidad",
        "xmas": "navidad",
        "season": "temporada",
        "seasons": "temporadas",
        "greeting": "saludo",
        "greetings": "saludos",
        "hanukkah": "hanukkah",
        "warm": "calentar",
        "wishes": "deseos",
        "kwanzaa": "kwanzaa"
    };
var german = {
        "a": "ein",
        "an": "ein",
        "the": "das",
        "and": "und",
        "happy": "glücklich",
        "holiday": "urlaub",
        "holidays": "ferien",
        "new": "neu",
        "year": "jahr",
        "christmas": "weihnachten",
        "xmas": "weihnachten",
        "season": "jahreszeit",
        "seasons": "jahreszeiten",
        "greeting": "Gruß",
        "greetings": "Gruße",
        "hanukkah": "chanukka",
        "warm": "warm",
        "wishes": "wunsch",
        "kwanzaa": "kwanzaa"
    };
var klingon = {
        "a": ".",
        "an": "ghah",
        "the": ".",
        "and": "je",
        "happy": "quch",
        "holiday": "ql'lop",
        "holidays": "ql'lop",
        "new": "chu'",
        "year": "dis",
        "christmas": "christmas",
        "xmas": "christmas",
        "season": "maqtagh",
        "seasons": "maqtagh",
        "greeting": "ghah 'ej duvan",
        "greetings": "ghah 'ej duvan",
        "hanukkah": "hanukkah",
        "warm": "warm",
        "wishes": "vlneh",
        "kwanzaa": "kwanzaa"
    };

// var spanish = document.getElementById("spanishBtn");
// var array = ["merry", "christmas"];
// var span = languages[0];

// for(var i=0; i<span.length; i++){
//     var string = span[i];
//     console.log(string);
// }

// spanish.addEventListener("click", function getInput(){
//     var input = document.getElementById("textArea").value;
//     var splitInput = input.split(' ');
//     console.log(splitInput);
// });

// document.getElementById("germanBtn").addEventListener("click", );

// document.getElementById("klingonBtn").addEventListener("click", );

// function output(id){
//     var outputString = document.getElementById(id).value;
//     outputString.innerHTML = "<p>" + + "</p>";
// }

// *************************IN-CLASS**************************

// NEED SEPARATE OBJECTS FOR EACH LANGUAGE NOT ARRAY OF OBJECTS

const inputBox = document.getElementById("textArea");
const spanishBtn = document.getElementById("spanishBtn");
const outputBox = document.getElementById('output');

// spanishBtn.addEventListener('click', () => {
//     const userInput = inputBox.value.toLowerCase();
//     let domOutput = spanish[userInput];
//     outputBox.innerHTML = domOutput;
// })

// const allMyButtons = document.getElementsByClassName('translator');

// for (let i=0; i<allMyButtons.length; i++){
//     allMyButtons[i].addEventListener('click', (e) => {
//         const userInput = inputBox.value.toLowerCase();
//         let domOutput = '';
//         if (e.target.id === 'spanish') {
//             domOutput = spanish[userInput];
//         } else if (e.target.id === 'french'){
//             domOutput = french[userInput];
//         } else if( e.target.id === 'german'){
//             domOutput = german[userInput];
//         }
//         outputBox.innerHTML = domOutput;
//     })
// }

const allMyButtons = document.getElementsByClassName('translator');

for (let i=0; i<allMyButtons.length; i++){
    allMyButtons[i].addEventListener('click', (e) => {
        const userInput = inputBox.value.toLowerCase().split(' ');
        let domOutput = [];
        if (e.target.id === 'spanishBtn') {
            userInput.forEach((word) => {
                domOutput.push(spanish[word])
            });
        } else if (e.target.id === 'germanBtn'){
            userInput.forEach((word) => {
                domOutput.push(german[word])
            });
        } else if( e.target.id === 'klingonBtn'){
            userInput.forEach((word) => {
                domOutput.push(klingon[word])
            });
        }
        outputBox.innerHTML = domOutput.join(' ');
    })
}