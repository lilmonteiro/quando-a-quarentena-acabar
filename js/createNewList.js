import { ListItemComponent } from "/components/ListItemComponent.js"

var start = function() {
    var cancelAddBtn = document.querySelector("#create-cancel-btn")
    cancelAddBtn.addEventListener("click", function() {
        window.location = "/html/index.html"
    })

    teste();
}

let teste = function() {
    let listContainer = document.querySelector(".list-field")
    for (let i = 0; i < 20; i++) {
        let itemList = new ListItemComponent;
        listContainer.appendChild(itemList);
    }
}


window.addEventListener("load", start);