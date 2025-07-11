import{db,auth,createUserWithEmailAndPassword,setDoc,doc,signInWithEmailAndPassword}from "./firebase.js"

let pass=document.getElementById("pass")
let icon=document.getElementById("icon")
icon.addEventListener("click",()=>{
    if(icon.className=="fa-solid fa-eye-slash"){
        icon.className="fa-solid fa-eye"
        pass.type="Text"
    }
    else{
        icon.className="fa-solid fa-eye-slash"
        pass.type="password"
    }
})


let loginBtn=document.getElementById("loginBtn")
async function login(){
    try {

        let email=document.getElementById("email")
        
        await signInWithEmailAndPassword(auth, email.value, pass.value)
        window.location.replace("./todo.html")
        
        
    } 
    catch (error) {
        alert(error.message)
    }
    
    
}
loginBtn.addEventListener("click",login)