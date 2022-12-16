// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
    }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let selectPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectPlanet.name, selectPlanet.diameter, selectPlanet.star, selectPlanet.distance, selectPlanet.moons, selectPlanet.image)
    })

    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");

        //Get values for form fields: pilotName, copilotName, fuelLevel, cargoLevel//
        //Add preventDefault//
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
        
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;

        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = fuelInput.value;

        let cargoInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = cargoInput.value;

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    });
});