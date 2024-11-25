// Data for the chart
const labels = ['Sport', 'Cruiser', 'Touring', 'Adventure', 'Electric'];
const data = {
    labels: labels,
    datasets: [{
        label: 'Motorcycle Sales (in 1000s)',
        data: [25, 15, 20, 10, 5], // Example data: sales in thousands
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Config for the chart
const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render the chart
const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, config);
