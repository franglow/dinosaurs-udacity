FIXME
// https://knowledge.udacity.com/questions/415792
import dinosjson from './dino.js'
// dinos es un objeto que contine el array Dinos 

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

const dinos = dinosjson.Dinos.map((dino) => {
    let {species, weight, height, diet, where, when, fact } = dino
    return new Dino(species, weight, height, diet, where, when, fact )
    
})

FIXME
console.log(dinos);

    
    // Create Human Object


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
