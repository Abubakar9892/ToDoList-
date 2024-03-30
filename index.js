
function getAndUpdated() {
    console.log("Updating list...");
    let tit = document.getElementById("tit").value;
    let dese = document.getElementById("description").value;

    let itemJsonArray;
    if (localStorage.getItem("itemsJson") === null) {
        itemJsonArray = [];
    } else {
        itemJsonArray = JSON.parse(localStorage.getItem("itemsJson"));
    }

    // Push new item to the array
    itemJsonArray.push([tit, dese]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    
    // Update table
    updateTable(itemJsonArray);
}

function updateTable(itemJsonArray) {
    // Update table body with the new items
    let tablebody = document.getElementById("itemsBody");
    let str = ""; // Initialize empty string
    itemJsonArray.forEach((element, index) => {
        str += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-primary delete" data-index="${index}">Delete</button></td>
            </tr>`;
    });
    tablebody.innerHTML = str;

    // Add event listeners to the delete buttons
    let deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {
            let index = button.getAttribute("data-index");
            // Remove item from array
            itemJsonArray.splice(index, 1);
            // Update local storage
            localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
            // Update table
            updateTable(itemJsonArray);
        });
    });
}

let add = document.getElementById("add");
add.addEventListener("click", getAndUpdated);

// Initial update of the table
let initialItems = localStorage.getItem("itemsJson") ? JSON.parse(localStorage.getItem("itemsJson")) : [];
updateTable(initialItems);

//  clearButton function 


function clearstorage() {
    console.log("Clearing the storage");
    localStorage.clear();
    update();
}

function update() {
    console.log("Updating list...");
    let itemJsonArray = localStorage.getItem("itemsJson") ? JSON.parse(localStorage.getItem("itemsJson")) : [];

    // Update table
    updateTable(itemJsonArray);
}

function updateTable(itemJsonArray) {
    // Update table body with the new items
    let tablebody = document.getElementById("itemsBody");
    let str = ""; // Initialize empty string
    itemJsonArray.forEach((element, index) => {
        str += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-primary delete" data-index="${index}">Delete</button></td>
            </tr>`;
    });
    tablebody.innerHTML = str;

    // Add event listeners to the delete buttons
    let deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {
            let index = button.getAttribute("data-index");
            // Remove item from array
            itemJsonArray.splice(index, 1);
            // Update local storage
            localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
            // Update table
            updateTable(itemJsonArray);
        });
    });
}

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearstorage);

// Initial update of the table
update();
