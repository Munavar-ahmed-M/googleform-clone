const Password = document.querySelector("#text-password");
const CheckBox = document.querySelector("#show");
CheckBox.addEventListener('click',()=>{
    const type = Password.getAttribute('type') === "password" ? "text" : "password";
    Password.setAttribute("type",type);
})