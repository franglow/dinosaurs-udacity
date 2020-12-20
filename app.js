    // Create Dino Constructor

function Dino(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}

    // Create Dino Objects
    const createDinos = (function () {
        let dinosObj = {};

        function getDinos() {
        
            fetch('./dino.json')
                .then(res => res.json())
                .then((data) => {
                    console.log('finished fetch');
                    dinosObj.dinos = data.Dinos.map((dino) => {
                        let {species, weight, height, diet, where, when, fact } = dino
                        return new Dino(species, weight, height, diet, where, when, fact )
                    });
                    return dinosObj;
                });   
                return dinosObj;
        }
        
        return {
            dinos: getDinos
            }
    }
    );

    
    // Create Human Object
    function Human(name, heightFeet, heightInches, weight, diet = {}) {
        this.name = name;
        this.heightFeet = heightFeet;
        this.heightInches = heightInches;
        this.weight = weight;
        this.diet = diet;
    }
    // Appending Empty Human Object to dinos Array
    const humans = new Human({});


    // Use IIFE to get human data from form



    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
