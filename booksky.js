//selecting popup box popup overlay and button
var popupoverley=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")
addpopupbutton.addEventListener("click",function(){
    popupoverley.style.display="block"
    popupbox.style.display="block"})
    //selecting cancel button 
    var cancelbutton=document.getElementById("cancel-popup")
    cancelbutton.addEventListener("click",function(event){
        event.preventDefault()
        popupoverley.style.display="none"
    popupbox.style.display="none"

    })
    //select container ,add book button,book title.book author input,book descriptin input
    var container=document.querySelector(".container")
    var addbook=document.getElementById("add-book")
    var booktitleinput=document.getElementById("book-title-input")
    var bookauthorinput=document.getElementById("book-title-input")
    var bookdescriptioninput=document.getElementById("book-description-input")
    addbook.addEventListener("click",function(event){
        event.preventDefault()
        var div=document.createElement("div")
        div.setAttribute("class","book-container")
        div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
        container.append(div)
        popupoverley.style.display="none"
        popupbox.style.display="none"
    })
 function deletebook(event){
event.target.parentElement.remove()
 }
    
