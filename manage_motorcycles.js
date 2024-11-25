// Get references to form inputs and table
const motorcycleName = document.getElementById("motorcycleName");
const motorcycleType = document.getElementById("motorcycleType");
const motorcyclePrice = document.getElementById("motorcyclePrice");
const addMotorcycleButton = document.getElementById("addMotorcycle");
const motorcycleTableBody = document.querySelector("#motorcycleTable tbody");

// Function to create a new row in the table
function addMotorcycle() {
    const name = motorcycleName.value.trim();
    const type = motorcycleType.value;
    const price = motorcyclePrice.value.trim();

    if (name === "" || price === "") {
        alert("Please fill in all fields!");
        return;
    }

    const row = document.createElement("tr");

    // Name cell
    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    row.appendChild(nameCell);

    // Type cell
    const typeCell = document.createElement("td");
    typeCell.textContent = type;
    row.appendChild(typeCell);

    // Price cell
    const priceCell = document.createElement("td");
    priceCell.textContent = `$${parseFloat(price).toFixed(2)}`;
    row.appendChild(priceCell);

    // Actions cell
    const actionsCell = document.createElement("td");

    // Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";
    editButton.onclick = () => editMotorcycle(row);
    actionsCell.appendChild(editButton);

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = () => deleteMotorcycle(row);
    actionsCell.appendChild(deleteButton);

    row.appendChild(actionsCell);

    // Add the row to the table
    motorcycleTableBody.appendChild(row);

    // Clear the form
    motorcycleName.value = "";
    motorcyclePrice.value = "";
}

// Function to delete a row
function deleteMotorcycle(row) {
    motorcycleTableBody.removeChild(row);
}

// Function to edit a row
function editMotorcycle(row) {
    const cells = row.querySelectorAll("td");

    // Populate the form with existing data
    motorcycleName.value = cells[0].textContent;
    motorcycleType.value = cells[1].textContent;
    motorcyclePrice.value = cells[2].textContent.replace("$", "");

    // Remove the row being edited
    deleteMotorcycle(row);
}

// Add event listener to the Add Motorcycle button
addMotorcycleButton.addEventListener("click", addMotorcycle);
