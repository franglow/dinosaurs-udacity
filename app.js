    // Create Dino Constructor
    function Dino(species, weight, height, diet, where, when, fact, image) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.image = image;
    }

    
    // Create Dino Objects  
    const dinos = [];
    
    const getDinoData = async () => {
        const fetchData = await fetch('./dino.json');
        const data = await fetchData.json();
        return data.Dinos;
    };

    // window.onload = async () => {
    const createDinosArray = async () => {
        const dinoArray = await getDinoData();
        dinos.push(
            dinoArray.map(dinoObject => {
                let {species, weight, height, diet, where, when, fact } = dinoObject;
                return new Dino(species, weight, height, diet, where, when, fact );
            })
        );
        console.log(dinos);
        return dinos;
    }
    
    // Create Human Object
    function Human(name, heightFeet, heightInches, weight, diet = {}) {
        console.log(name, heightFeet, heightInches, weight, diet);
        this.name = name;
        this.heightFeet = heightFeet;
        this.heightInches = heightInches;
        this.weight = weight;
        this.diet = diet;
    }

    // Use IIFE to get human data from form

    const getFormData = () => {
        let form = {
            name: document.querySelector('#name').value,
            feet: document.querySelector('#feet').value,
            inches: document.querySelector('#inches').value,
            weight: document.querySelector('#weight').value,
            diet: document.querySelector('#diet').value,
        }
        let {name, feet, inches, weight, diet} = form;
        return new Human(name, feet, inches, weight, diet);
    }
    
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    function compareWeight() {
        console.log(`dinos: ${dinos}`);
        console.log(`dinos: ${createDinosArray( )}`);
        const user = getFormData();
        console.log(`user: ${user}`);
        dinos.forEach(dino => {
            if (dino.weight > user.weight) {
                console.log(`${dino.weight} es mayor que ${user.weight}`);
            } else {
                console.log(`${user.weight} es mayor que ${dino.weight}`);
            }
        });
    }
    
    const getCompare = document.querySelector('#btn');
    getCompare.addEventListener('click', compareWeight);
    
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    
    
    // Generate Tiles for each Dino in Array
    
    /*
    <div class="grid-item">
    <h3>Species</h3>
    <img src="dinoImageUrl" alt="dino name" />
    <p>Fact</p>
  </div>
  */
 
 // Add tiles to DOM
 
 // Remove form from screen
 
 
 // On button click, prepare and display infographic
