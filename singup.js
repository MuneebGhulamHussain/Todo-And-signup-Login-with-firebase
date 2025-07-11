import{db,auth,createUserWithEmailAndPassword,setDoc,doc}from "./firebase.js"

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


let btn=document.getElementById("btn")

let  name=document.getElementById("name")
let number=document.getElementById("number")

name.addEventListener("focus",removeErrorName)

function removeErrorName(){
    name.className="removeNameErr"
    name.placeholder="Enter Full Name"
    

}
number.addEventListener("focus",removeErrorNumber)

function removeErrorNumber(){
    number.className="removeNameErr"
   number.placeholder= "Enter phone number"
}





async function signUp(){
    try {
        let email=document.getElementById("email")
        
        if(!name.value || !number.value){
            
            if(!name.value && !number.value){

                name.className="errorName"
                name.placeholder="Input Feild Recquired !"
                number.classList="errorNumber"
                number.placeholder="Input Feild Recquired !"
                // number.style.backgroundColor="red"
                // name.style.backgroundColor="red"
                
            }
            else if(!name.value){
                // name.style.backgroundColor="red"
                name.className="errorName"
                name.placeholder="Input Feild Recquired !"
                
            }
            else if(!number.value){
                // name.style.backgroundColor="red"
                // number.style.backgroundColor="red"
                    number.classList="errorNumber"
                number.placeholder="Input Feild Recquired !"
                
      
        }
    }
    else{          
             const userAuth=await createUserWithEmailAndPassword(auth,email.value,pass.value)
            console.log("user",userAuth)    
    
            const userObj={
                name:name.value,
                number:number.value,
                email:email.value,
                accStatus:true,
                uid:userAuth.user.uid,
            }
            console.log("userObj",userObj)
            const userRef = doc(db, "users", userAuth.user.uid);
            const userDB=await setDoc(userRef, userObj);
            console.log("userDB",userDB)
    
            window.location.replace("./index.html")
        }
    }
        
    
    catch (error) {
        alert(error.message)
    }
    
    
}
btn.addEventListener("click",signUp)




