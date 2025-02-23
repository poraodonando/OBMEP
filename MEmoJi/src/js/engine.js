const emojis = [// 'Windows + .'
    "🤡",
    "🤡",
    "🤢",
    "🤢",
    "👹",
    "👹",
    "👾",
    "👾",
    "😎",
    "😎",
    "🤬",
    "🤬",
    "💀",
    "💀",
    "👽",
    "👽",
    "👻",
    "👻",
    "🤖",
    "🤖",
    "🐱‍👤",
    "🐱‍👤",
    "🎅",
    "🎅",
    "👼",
    "👼",
    "👨‍🔬",
    "👨‍🔬",
    "🎃",
    "🎃",
    "🌚",
    "🌚",
    "🤑",
    "🤑",
    "🥶",
    "🥶",
    "🤠",
    "🤠",
    "🥺",
    "🥺",
    "😈",
    "😈",
    "👺",
    "👺",
    

];

let openCards = [];

let shurfleEmojis = emojis.sort(()=>(Math.random() > 0.5 ? 2:-1));

   
    
    
    for(let i = 0; i<emojis.length; i++ ){
        
        let box = document.createElement("div");
        box.className = "item";
        box.innerHTML = shurfleEmojis[i];
        box.onclick = handleClick;
        document.querySelector(".game").appendChild(box);
    }

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);

    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500)
    }
}

function checkMatch(){
    
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        
    }

    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("HORIZONTAIS " + "\n" + " 3 - Soma dos lados de uma figura geometrica. " + "\n" + " 5 - Linha curva que delimita um circulo " + "\n" + " 9 - Medida tridimensional de espaço ocupado por um objeto " + "\n" + " 10 - Numero que representa uma parte de um inteiro, dividido por um denominador " + "\n" + " 11 - resultado da adição de dois ou mais numeros " + "\n" + " 12 - numero que, quando multiplicado por ele mesmo resulta em um determinado valor. ")
    }
}