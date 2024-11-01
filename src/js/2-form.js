const STORAGE_KEY = "feedback-form-state";
const formData = {
email:"",
message:"",
}

const form = document.querySelector('.feedback-form');
const inputArea = document.querySelector('.input-field');
const textArea = document.querySelector('.textarea-field');


form.addEventListener("input" , handlerInput);
form.addEventListener("submit", handlerSubmit);

function handlerInput(event) {
    formData[event.target.name] = event.target.value.trim();
    const savedMessage = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, savedMessage);
}


const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";

    inputArea.value = formData.email;
    textArea.value = formData.message;
}



function handlerSubmit(event){
if(!formData.email || !formData.message){
    alert("Fill please all fields");
    return;
}else {
    console.log(formData);
    
}

    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData.email = "";
    formData.message = "";
    
}


