import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t="feedback-form-state",e={email:"",message:""},s=document.querySelector(".feedback-form"),m=document.querySelector(".email"),o=document.querySelector(".message");s.addEventListener("input",n);s.addEventListener("submit",c);function n(a){e[a.target.name]=a.target.value;const l=JSON.stringify(e);localStorage.setItem(t,l)}const r=localStorage.getItem(t);if(r){const a=JSON.parse(r);e.email=a.email||"",e.message=a.message||"",m.value=e.email,o.value=e.message}function c(a){if(!e.email||!e.message){alert("Fill please all fields");return}else console.log(e);a.preventDefault(),a.currentTarget.reset(),localStorage.removeItem(t),s.reset(),e.email="",e.message=""}
//# sourceMappingURL=2-form.js.map
