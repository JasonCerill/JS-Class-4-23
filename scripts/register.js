let petSalon = {
    name: "The Fashion Pet",
    address: {
        street:  "Wagalong st",
        zip:  "48484"
    },
    hours:{
        open:"9:00am",
        close: "8:00pm"
    },
    pets:[]
}

let c=0;

function Pet(name, age, gender, breed, service, ownerName, contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
    this.id=c++;//increase the var 1 every time that it's used

}

//get info from inputs and store the information (store it where?)

let inputName=document.getElementById("textName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("selService");
let inputOwner=document.getElementById("txtOwner");
let inputPhone=document.getElementById("txtTel");

function isValid(aPet){
    //return false when the pet is not valid
    //return true when the pet is valid
    let valid=true;
    if(aPet.name.length==0){
       //if we get here, it means that the name is not valid
        valid=false;
        console.error("Invalid Name");
    }
    if(aPet.service.length==0){
        valid=false;
        console.error("Invalid Name");
    }
    if(aPet.phone.length==0){
        valid=false;
        console.error("Invalid Number");
    }

    return valid; //could be true or false
}

function register(){
    //create pet
    let thePet = new Pet (inputName.value,inputAge.value,inputGender.value, inputBreed.value, inputOwner.value, inputService.value, inputPhone.value); 
    if(isValid(thePet)){

    
        petSalon.pets.push(thePet);
        //displayPet();
        displayCards()
        clearInputs();
    }
    //push pet into array
    //clear inputs

}

function clearInputs(){
    inputName.value="";
    inputAge.value="";

}

function deletePet(petId){
    console.log("Deleting" +petId);
    //to search for pet, need an id in the pet constructor to identify pet.
    //we need a delete button in the html
    //travel array to find id. (for loop)
    for(let i=0; i<petSalon.pets.length;i++){
        let pet= petSalon.pets[i];
        if(petId==pet.id){
            //find id (if)
            //get the position in the arrary (store in a var)
            deleteIndex=i;
            console.log("I found it in position:" +i)

        }
    }

 //remove from arrary (splice)
    petSalon.pets.splice(deleteIndex,1);
//remove from html (remove)
    document.getElementById(petId).remove();
   //display to the user a message
}

function searchPet(){
   let searchString = document.getElementById("txtSearch").value;
   console.log("Searching " + searchString);
   for(let i=0; i<petSalon.pets.length;i++){
    let pet= petSalon.pets[i];

    if(searchString === pet.name){
        
        document.getElementById(pet.id).classList.add ("highlight");
    }
   
    }
        
}
    
    //travel array to find id. (for loop)
    //find id (if)
    //highlight the result
    



let Louise= new Pet("Louise", "5", "female", "pitbull-mix", "full-groom", "Jason", "7818645555");
let Coco= new Pet("Coco", "3", "female", "Shepherd-Mix", "nail-clipping", "Jen", "647-563-46474");
let Django= new Pet("Django", "1", "male", "Mutt", "Poofing", "Dion", "647-563-46474");

petSalon.pets.push(Louise, Coco, Django);

displayCards();