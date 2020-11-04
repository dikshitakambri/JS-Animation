//Setup website here
let hero = document.querySelector("#hero");
let villain = document.querySelector("#villain");
let lightning = document.querySelector("#lightning");

//Setup animation code here

let lightningStart = {"left":"290px"};
let lightningEnd = {"left":"900px"};
let options = {"duration": 1000};

let hitTheVillain = () => {
    let villainStart = {
        transform : 'rotate(0deg)',
        opacity : 100
    };
    let villainEnd = {
        transform : 'rotate(1000deg)',
        opacity : 0
    };
    let options = {"duration":1500 };
    villain.animate([villainStart,villainEnd],options);
}

//Run animation code here

lightning.animate([lightningStart,lightningEnd],options).onfinish = hitTheVillain;