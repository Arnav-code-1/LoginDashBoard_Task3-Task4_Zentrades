document.addEventListener('DOMContentLoaded', function() {
    // Chart for Revenue By Job Location
    var jobLocationChart = new Chart(document.getElementById('jobLocationChart'), {
        type: 'bar', // Change the chart type to 'bar' instead of 'horizontalBar'
        data: {
            labels: ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds'],
            datasets: [{
                label: 'Revenue for Nov 2019',
                data: [80000, 75000, 49000, 47000, 46000, 34000],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true,
                    stepSize: 5000
                }
            }
        }
    });

    // Chart for Revenue By Job Type
    var jobTypeChart = new Chart(document.getElementById('jobTypeChart'), {
        type: 'bar', // Change the chart type to 'bar' instead of 'horizontalBar'
        data: {
            labels: ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Maintenance', 'Material Sale'],
            datasets: [{
                label: 'Revenue for Nov 2019',
                data: [190000, 120000, 80000, 70000, 50000, 45000, 5000],
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true,
                    stepSize: 20000
                }
            }
        }
    });
});
