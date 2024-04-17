document.getElementById("addItemForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    var itemNameInput = document.getElementById("itemName");
    var itemImageInput = document.getElementById("itemImage");
    var itemName = itemNameInput.value.trim();
    var itemImage = itemImageInput.value.trim();
    if (itemName !== "" && itemImage !== "") {
        addItemToList(itemName, itemImage);
        itemNameInput.value = ""; // Clear the input field
        itemImageInput.value = ""; // Clear the input field
    } else {
        alert("Please enter both item name and image URL.");
    }
});

function addItemToList(name, image) {
    var shoppingList = document.getElementById("shoppingList");
    var li = document.createElement("li");
    li.innerHTML = `<img src="${image}" alt="${name}"> <span>${name}</span> <button class="removeBtn">Remove</button>`;
    shoppingList.appendChild(li);
}

document.getElementById("shoppingList").addEventListener("click", function(event) {
    if (event.target.classList.contains("removeBtn")) {
        event.target.parentElement.remove();
    }
});
