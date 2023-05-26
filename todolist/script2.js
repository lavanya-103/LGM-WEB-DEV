const inputBox=document.getElementById("input-box");
const listBox=document.getElementById("list-box");
function addTask(){
    if(inputBox.value  ===''){
        alert("Add an activity");
    }else{
        let li=document.createElement("LI");
        li.innerHTML=inputBox.value;
        listBox.appendChild(li);
        let span=document.createElement("SPAN");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    savedata();
}

  
listBox.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }else if(e.target.tagName   ==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data",listBox.innerHTML);
}
function showTask(){
    listBox.innerHTML=localStorage.getItem("data");
}
showTask();