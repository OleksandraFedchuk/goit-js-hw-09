// const STORAGE_KEY = "feedback-form-state";
// const formData = {
// email:"",
// message:"",
// }

// const form = document.querySelector('.feedback-form');
// const email = document.querySelector('.email');
// const message = document.querySelector('.message');


// form.addEventListener("input" , handlerInput);
// form.addEventListener("submit", handlerSubmit);

// function handlerInput(event) {
//     formData[event.target.name] = event.target.value.trim();
//     const savedMessage = JSON.stringify(formData);
//     localStorage.setItem(STORAGE_KEY, savedMessage);
// }


// const savedData = localStorage.getItem(STORAGE_KEY);
// if (savedData) {
//     const parsedData = JSON.parse(savedData);
//     formData.email = parsedData.email || "";
//     formData.message = parsedData.message || "";

//     email.value = formData.email;
//     message.value = formData.message;
// }



// function handlerSubmit(event){
// if(!formData.email || !formData.message){
//     alert("Fill please all fields");
//     return;
// }else {
//     console.log(formData);
    
// }
//     event.preventDefault();
//     event.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
//     form.reset();
//     formData.email = "";
//     formData.message = "";
    
// }

// const STORAGE_KEY = "feedback-form-state";
// const formData = {
//   email : '',
//   message : '',
// }

// const form = document.querySelector('.feedback-form');
// const email = document.querySelector('.email');
// const message = document.querySelector('.message');

// form.addEventListener('input' , handlerInput);

// function handlerInput(event){
//   formData[event.target.name] = event.target.value;
//   const savedMessage = JSON.stringify(formData);
//   localStorage.setItem(STORAGE_KEY, savedMessage);
// }

// const savedData = localStorage.getItem(STORAGE_KEY);
// if(savedData){
//   const parsedData = JSON.parse(savedData);
//   formData.email = parsedData.email || '';
//   formData.message = parsedData.message || '';

// email.value = formData.email;
// message.value = formData.message;
// }

// form.addEventListener('submit' , handlerSubmit);

// function handlerSubmit (event){
//   if(!formData.email || !formData.message){
//     alert("Fill please all fields");
//     return;
//   }else {
//     console.log(formData);
  
//   }
//   event.preventDefault();
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   form.reset();
//   formData.email = '';
//   formData.message = '';
// }

