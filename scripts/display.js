//display pets in list items

function displayPet(){
    
    let tmp="";  //clear the field
    for(let i=0;i<petSalon.pets.length;i++);{
        let pet = petSalon.pets[i];
        tmp+=`<li>${pet.name} --- ${pet.age}</li>`; //concatenation\
    }
        
    document.getElementById("pets").innerHTML=tmp;

}


//display pets in cards

function displayCards(){
    let tmp="";  
    for(let i=0;i<petSalon.pets.length;i++){
       let pet = petSalon.pets[i];
    tmp+=`
    <div id=${pet.id} class="pet">
       <div class="pet-header">
        <h4>${pet.name}</h4>
        <button onclick="deletePet(${pet.id});"> 🗑️ </button>
        </div>
        
        <label>Age: ${pet.age}</label>
        <label>Gender: ${pet.gender}</label>
        <label>Breed: ${pet.breed}</label>
      


    </div>
    `;
    document.getElementById("pets").innerHTML=tmp; 
    
    }
        
}

function displayTable(){

}


//display pets in table