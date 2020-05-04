import { ListItemComponent } from "/components/ListItemComponent.js"
import { AddItemListBtnComponent } from "/components/AddItemListBtnComponent.js"

let data;

var start = function() {
    let cancelAddBtn = document.querySelector("#create-cancel-btn")
    cancelAddBtn.addEventListener("click", function() {
        window.location = "/html/index.html"
    });

    let addItemListBtn = document.querySelector("add-item-list-btn");
    addItemListBtn.addEventListener("click", addItemListBtnHandler);

    let saveListBtn = document.querySelector("#create-save-btn");
    saveListBtn.addEventListener("click", function(e) {
        window.location = "/html/sucessNewListPage.html"
    })

    requestJSON("/data.json", function(obj) {
        data = obj.results;
    });

}

let addItemListBtnHandler = function(e) {
    let addItemListBtn = document.querySelector("add-item-list-btn");
    let listContainer = document.querySelector(".list-field");
    listContainer.removeChild(addItemListBtn)
    let listItem = new ListItemComponent;
    listContainer.appendChild(listItem)
    listContainer.appendChild(addItemListBtn)
}



// DATA //
let requestJSON = function(url, successCallback) {
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        var obj = JSON.parse(xhttp.responseText)
        successCallback(obj);

    }

    xhttp.open("GET", url, true);
    xhttp.send();
}


window.addEventListener("load", start);