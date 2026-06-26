function sortHouse(){

    let gryffindor = 0;
    let hufflepuff = 0;
    let ravenclaw = 0;
    let slytherin = 0;

    let answers = document.querySelectorAll('input[type="radio"]:checked');

    answers.forEach(answer => {

        switch(answer.value){

            case "gryffindor":
                gryffindor++;
                break;

            case "hufflepuff":
                hufflepuff++;
                break;

            case "ravenclaw":
                ravenclaw++;
                break;

            case "slytherin":
                slytherin++;
                break;
        }

    });

    let house = "Gryffindor";
    let description = "You value courage, bravery, and standing up for what is right.";
    let cardClass = "gryffindor";

    let highest = gryffindor;

    if(hufflepuff > highest){
        highest = hufflepuff;
        house = "Hufflepuff";
        description = "You are loyal, kind, hardworking, and fair.";
        cardClass = "hufflepuff";
    }

    if(ravenclaw > highest){
        highest = ravenclaw;
        house = "Ravenclaw";
        description = "You are intelligent, creative, curious, and wise.";
        cardClass = "ravenclaw";
    }

    if(slytherin > highest){
        highest = slytherin;
        house = "Slytherin";
        description = "You are ambitious, determined, resourceful, and a natural leader.";
        cardClass = "slytherin";
    }

    document.getElementById("house-result").className =
    "house-card " + cardClass;

    document.getElementById("house-result").innerHTML =
    `
        <h3>🎉 ${house}!</h3>
        <p>${description}</p>
    `;
}
function playSound(id){

    const sound = document.getElementById(id);

    sound.currentTime = 0;

    sound.play();

}

gryffindor.addEventListener("mouseenter", () => playSound("lionSound"));
hufflepuff.addEventListener("mouseenter", () => playSound("badgerSound"));
ravenclaw.addEventListener("mouseenter", () => playSound("eagleSound"));
slytherin.addEventListener("mouseenter", () => playSound("snakeSound"));