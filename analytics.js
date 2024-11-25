// CRUD Functionality for Manage Motorcycles Page
function addMotorcycle() {
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const price = document.getElementById('price').value;

    if (name && type && price) {
        const table = document.getElementById('motorcycle-list');
        const row = table.insertRow();
        row.innerHTML = `
            <td>${name}</td>
            <td>${type}</td>
            <td>${price}</td>
            <td><button onclick="deleteRow(this)">Delete</button></td>
        `;
    } else {
        alert('Please fill in all fields');
    }
}

function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Analytics for Data Analytics Page
const ctx = document.getElementById('chart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Sport', 'Cruiser', 'Touring', 'Adventure', 'Electric'],
        datasets: [{
            label: 'Motorcycle Sales (in 1000s)',
            data: [20, 15, 30, 10, 5],
            backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple']
        }]
    }
});

