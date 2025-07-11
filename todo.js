import{app,db,collection, addDoc,getDocs,deleteDoc,doc,updateDoc} from "./firebase.js"

let addBtn=document.getElementById("addBtn")
let content=document.getElementById("content")
let delAll=document.getElementById("delAll")

let forAppend=document.getElementById("forAppend")
let editBtn

const userCollection=collection(db,"todos")

const getData= async()=>{
    try {
        let arr=[]
         const querySnapshot=await getDocs(userCollection)
        querySnapshot.forEach((doc)=>{
            console.log(doc.data(),doc.id,"doc.data(),doc.id")
            let todoVal=doc.data().todos
            let todoId=doc.id

            loader(todoVal,todoId)
        })
        console.log(arr)
    } catch (error) {
        
    }
}





window.addEventListener("load",getData)

const addFunction = async()=>{
try{

    if(!content.value){
    
    content.className="errorShow"
    content.placeholder="Input Feild Recquired !"
    
    
    
    return 
    }

    const todoContent={
        todos:content.value,
        
    }
    const response=await addDoc(userCollection,todoContent)
    console.log("response.id",response.id)

    loader(content.value,response.id)
        // forAppend.innerHTML+=`<div class="todo-container">
        //         <i onclick="compTask(this)" id="circle" class="fa-regular fa-circle"></i>
        //         <h4>${content.value}</h4>
        //         <div id="btnParent" class="btn-container">
        //              <button onclick="editFunction(this)" "><i class="fa-solid fa-pen"></i></button>
        //             <button onclick="delFunction(this)"><i class="fa-solid  fa-xmark"></i></button> 
    
                    
        //         </div>
        //     </div>`
    content.value=""
}catch(error){
    console.log(error.message)
}


    
}


function loader(val,id){

        

        forAppend.innerHTML+=`<div id=${id} class="todo-container">
                <i onclick="compTask(this)" id="circle" class="fa-regular fa-circle"></i>
                <h4 id=${id} >${val}</h4>
                <div id="btnParent" class="btn-container">
                     <button onclick="editFunction(this)" "><i class="fa-solid fa-pen"></i></button>
                    <button onclick="delFunction(this)"><i class="fa-solid  fa-xmark"></i></button> 
    
                    
                </div>
            </div>`
          
}


// 3JLcBfKrdbGmMjOxxLaD
const editFunction=async (ele)=>{
    try {
        let userChoice=prompt("Enter Updated Value ")
    let prevValue=ele.parentNode.parentNode.firstElementChild.nextElementSibling.innerHTML

    let id=ele.parentNode.parentNode.firstElementChild.nextElementSibling.id

    const updObj={
        todos:userChoice,
    }
     await updateDoc(doc(db,"todos",id),updObj)
    

    console.log("prevValue",prevValue)
    if(!userChoice){
        userChoice=prevValue
    }
    ele.parentNode.parentNode.firstElementChild.nextElementSibling.innerHTML=userChoice
    } catch (error) {
        console.log(error.message)
    }
    

}
// editBtn.addEventListener("click",editFunction)
const delFunction=async (ele)=>{
try {
    
    let id=ele.parentNode.parentNode.id
    await deleteDoc(doc(db, "todos", id));
    ele.parentNode.parentNode.remove()
} catch (error) {
    console.log(error.message)
}
    // console.log(ele.parentNode.parentNode.id)
    
}
const compTask=(ele)=>{
    ele.style.cursor="pointer"

    if(ele.className=="fa-regular fa-circle"){
        ele.className="fa-regular fa-circle-check"
        ele.style.color="lightGreen"
    }else{
        ele.className="fa-regular fa-circle"
        ele.style.color="black"
    }
    
    // console.log("ele",ele)
}


    
    
// window.addEventListener("load",compTask)

window.compTask=compTask
window.editFunction=editFunction
window.delFunction=delFunction





const delAllFunction= async()=>{
try {
    const querySnapshot = await getDocs(collection(db, "todos"));

    for (const singledoc of querySnapshot.docs) {
        await deleteDoc(doc(db,"todos",singledoc.id))
          // console.log(doc.id, doc.data());
      }
      forAppend.innerHTML=""
} catch (error) {
    console.log(error.message)  
}



}





delAll.addEventListener("click",delAllFunction)

addBtn.addEventListener("click",addFunction)
addBtn.addEventListener("blur",()=>{
    // console.log("helllo")
    // console.log(content)
    content.className="removeError"
    content.placeholder="Enter Task  ...."
    
})

let logoutBtn=document.getElementById("logoutBtn")
logoutBtn.addEventListener("click",()=>{
    window.location.replace("./index.html")
})