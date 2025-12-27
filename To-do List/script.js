let inputB =document.getElementById("inputBox");
let listC =document.getElementById("listContainer");
function addTask(){
    if(inputB.value===""){
        alert("Task cannot be empty");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputB.value;
        listC.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputB.value ="";
    saveData();
}


listC.addEventListener("click", event=>{
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
});// use capture is the third parameter of an event handler which can be ignored cause it is usually false by default.
function saveData(){
    localStorage.setItem("data", listC.innerHTML);
}
function showTask(){
    listC.innerHTML=localStorage.getItem("data");
}
showTask();