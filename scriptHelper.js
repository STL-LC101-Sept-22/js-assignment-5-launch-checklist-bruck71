// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   let numberInput = Number(testInput);
    //return "Empty"
    if (testInput === ''){
        return "Empty";
    }
    //return "Not a Number"
    else if (isNaN(numberInput)){
        return "Not a Number"
    }
    //return "Is a Number"
    else if(!isNaN(numberInput)){
        return "Is a Number"
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    // let fuel = document.getElementById("fuelLevel");
    // let cargo = document.getElementById("cargoMass");
    // let pilotStatus = document.getElementById("pilotStatus");
    // let copilotStatus = document.getElementById("copilotStatus");

    if(validateInput(pilot) === '' || validateInput(copilot) === '' || validateInput(fuelLevel) === '' || validateInput(cargoLevel) === ''){
        window.alert("All fields are required!");
    } else if(validateInput(pilot === "Is a Number") || validateInput(copilot === "Is a Number") || validateInput(fuelLevel === "Not a Number") || validateInput(cargoLevel === "Not a Number")) {
        window.alert("Make sure to enter valid information for each field!")
    }
   
}



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
