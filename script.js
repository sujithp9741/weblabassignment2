$(document).ready(function() {
$('#registrationForm').on('submit', function(e) { e.preventDefault(); // Prevent default form submission

// Serialize form data
const formData = $(this).serializeArray();
let outputHTML = '<h2>Submitted Data</h2>';

// Loop through form data and format it formData.forEach(field => {
outputHTML += `<p><strong>${field.name}:</strong> ${field.value}</p>`;
});

// Display the output
$('#output').html(outputHTML);
});


