/**
 * 
 */
/**
 * 
 */
let note = document.getElementsByClassName("note");
let save = document.getElementById("save");
let deleteButton = document.getElementById("delete");
var selected = null;
console.log(selected);
deleteButton.addEventListener("click",(event)=>deleteNote())
 save.addEventListener("click",(event)=>saveContent())
 function deleteNote(){
	 if(selected == null){
		 let noteTitle = document.getElementById("noteTitle");
    noteTitle.setAttribute("value","");
    let noteContent = document.getElementById("noteContent");
    noteContent.innerText="";
	 }else{
		 var data = {
			 "id" : selected
		 };
		 var xhr = new XMLHttpRequest();
    xhr.open("POST", "delete", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Reload the page after successful save
                location.reload();
            } else {
                // Handle error cases
                console.error("Error:", xhr.status);
            }
        }
    };
	 }
 }
 function saveContent() {
    if(selected == null){
		var title = document.getElementById("noteTitle").value;
    var content = document.getElementById("noteContent").innerHTML;
	var data = {
        "title": title,
        "content": content
    };
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "home", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Reload the page after successful save
                location.reload();
            } else {
                // Handle error cases
                console.error("Error:", xhr.status);
            }
        }
    };
	}else{
		var title = document.getElementById("noteTitle").value;
    var content = document.getElementById("noteContent").innerHTML;
	var data = {
		"id":selected,
        "title": title,
        "content": content
    };
    console.log(selected);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "update", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Reload the page after successful save
                location.reload();
            } else {
                // Handle error cases
                console.error("Error:", xhr.status);
            }
        }
    };
	}
}
function loadNote(title,content,time,id){
	console.log(id);
	console.log(title);
	console.log(content);
	console.log(time);
	selected = id;
	let info = document.getElementById("info");
    const play = document.getElementById("infoDiv");
    if(play!=null){
        info.removeChild(play);
    }
    event.preventDefault();

    let noteTitle = document.getElementById("noteTitle");
    noteTitle.setAttribute("value",title);
    let noteContent = document.getElementById("noteContent");
    noteContent.innerHTML=content;

    
    // <h2>Info</h2>
    //     <h4 id="fileName">File Name: Demo</h4>
    //     <h4 id="wordCount">Word Count: 30</h4>
    //     <h4 id="lastEdited">Last Edited: 3:30 pm</h4>
    let infoDiv = document.createElement("div");
    infoDiv.id="infoDiv";
    let h2 = document.createElement("h2");
    h2.innerText="Info";
    let fileName = document.createElement("h4");
    fileName.innerText = "File Name : "+ title;
    let wordCount = document.createElement("h4");
    wordCount.innerText = "Word Count : "+content.length;
    let lastEdited = document.createElement("h4");
    lastEdited.innerText = "Last Edited : "+time;
    infoDiv.append(h2,fileName,wordCount,lastEdited);
    info.appendChild(infoDiv);
}

 
 
 
 
 
 
 
 
 
 
 