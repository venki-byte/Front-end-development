var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

var cancelpopup = document.getElementById("cancel-popup");

cancelpopup.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
                     <h5>${bookauthorinput.value}</h5>
                     <p>${bookdescriptioninput.value}</p>
                     <button class="delete-book">Delete</button>`;
    container.append(div);

    // Add delete functionality to each dynamically created book
    div.querySelector(".delete-book").addEventListener("click", function() {
        div.remove();
    });

    // Hide the popup and clear the inputs
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
    booktitleinput.value = '';
    bookauthorinput.value = '';
    bookdescriptioninput.value = '';
});

// Add delete functionality for pre-existing books (if any)
document.querySelectorAll(".delete-book").forEach(function(button) {
    button.addEventListener("click", function() {
        button.parentElement.remove();
    });
});

