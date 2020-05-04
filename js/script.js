
var start = function() {
    var addListBtn = document.querySelector(".btn-add-list");
    addListBtn.addEventListener("click", addListEventHandler.bind(addListBtn, createListBtn))

    var createListBtn = document.querySelector(".btn-create-list");
    createListBtn.addEventListener("click", function(){
        window.location="/html/createNewList.html"
    })
    
}

var addListEventHandler = function(event){
    var createListBtn = document.querySelector(".btn-create-list")
    var addListBtn = document.querySelector(".btn-add-list")
    createListBtn.classList.add("inactive")
    addListBtn.classList.add("inactive")

    var idInputContainer = document.querySelector(".id-input-container")
    idInputContainer.classList.add("active")

    var closeInputBtn = document.querySelector(".close-input-icon")
    closeInputBtn.addEventListener("click", function(){
        idInputContainer.classList.remove("active")
        createListBtn.classList.remove("inactive")
        addListBtn.classList.remove("inactive")
    })

    var sendIdBtn = document.querySelector(".send-input-icon")
    sendIdBtn.addEventListener("click", function(e){
        window.location="/html/AddToList.html"
    })
}

window.addEventListener("load", start);