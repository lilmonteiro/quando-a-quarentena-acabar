import { ListItemComponent } from "/components/ListItemComponent.js"
import { AddItemListBtnComponent } from "/components/AddItemListBtnComponent.js"


var start = function() {
    let cancelAddBtn = document.querySelector("#add-cancel-btn")
    cancelAddBtn.addEventListener("click", function() {
        window.location = "/html/index.html"
    });

    let addItemListBtn = document.querySelector("add-item-list-btn");
    addItemListBtn.addEventListener("click", addItemListBtnHandler);    

    let saveNewListBtn = document.querySelector("#add-save-btn");
    saveNewListBtn.addEventListener("click", function(e){
        window.location = "/html/sucessNewListPage.html"
    })
}

var addItemListBtnHandler = function(e){
    let addItemListBtn = document.querySelector("add-item-list-btn");
    let listContainer = document.querySelector(".list-field");
    listContainer.removeChild(addItemListBtn)
    let listItem = new ListItemComponent;
    listContainer.appendChild(listItem)
    listContainer.appendChild(addItemListBtn)
}


window.addEventListener("load", start);