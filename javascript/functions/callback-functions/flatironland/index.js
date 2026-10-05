const themeParkRides = ["Flatacoaster", "Flata-Ferris Wheel", "Flatburger bumper cars"];


function selectThemeParkRide(displayRideDetails) {
    const rideName = prompt("Please select a theme park ride:\n\n- Enter 'Flatacoaster' to select the Flatacoaster ride\n- Enter 'Flata-Ferris Wheel' to select the Flata-Ferris Wheel ride\n- Enter 'Flatburger bumper cars' to select the Flatburger bumper cars ride");
    if(!themeParkRides.includes(rideName)){
        alert("Error: Invalid theme park ride!");
        return;
    }
}
    
selectThemeParkRide((ride) => {
    alert(`You selected the ${ride.name} ride! Here's the ride description: ${ride.description}`);

    })
console.log("Welcome to Flatiron Land!");
