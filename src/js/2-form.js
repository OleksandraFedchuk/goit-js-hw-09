const STORAGE_KEY = "feedback-msg";
const form = document.querySelector('.feedback-form');
const textArea = document.querySelector('.textarea-field');
getItems();

textArea.addEventListener("input" , handlerInput);
form.addEventListener("submit", handlerSubmit);


function handlerInput(event) {
const message = event.target.value;
localStorage.setItem(STORAGE_KEY, message);
}

function getItems() {
    const savedMsg = localStorage.getItem(STORAGE_KEY);
 if(savedMsg) {
    textArea.value = savedMsg; 
 }  
    
}

function handlerSubmit(event){
    event.preventDefault();
    console.log("Sent form");
    event.currentTarget.reset();
    
}