// This script initializes Materialize side navigation components.
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'right' // Align mobile sidenav to the right
    });

    var elems2 = document.querySelectorAll('.sidenav-trigger');
    var instances2 = M.Sidenav.init(elems2);
});

document.addEventListener('DOMContentLoaded', function() {
    // Define your color palette
    var colorPalette = ["#007BFF", "#6F42C1", "#28A745", "#FFC107", "#17A2B8", "#DC3545", "#FD7E14", "#20c997", "#0d6efd", "#6610F2", "#6F42C1", "#D9534F", "#28A745", "#FFC107", "#17A2B8", "#DC3545", "#FD7E14"];

    // Select all buttons with class 'topic-buttons'
    var buttons = document.querySelectorAll('.topic-buttons');

    // Create an object to store the mapping of topic names to colors
    var topicColorMap = {};

    // Iterate over topics and assign colors from the palette
    buttons.forEach(function(button, index) {
        var topicName = button.textContent.trim(); // Get the text content of the button
        if (!topicColorMap[topicName]) {
            // If the topic name is not already in the map, assign a color from the palette
            var colorIndex = Object.keys(topicColorMap).length % colorPalette.length;
            topicColorMap[topicName] = colorPalette[colorIndex];
        }
        // Apply color to button background
        button.style.backgroundColor = topicColorMap[topicName];
    });
});

// This script initializes Materialize drop down components for sorting threads.
// This script initializes Materialize drop down components for sorting threads.
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dropdown components
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});

    // Add event listener for dropdown options
    document.querySelectorAll('#dropdown1 li').forEach(function(option) {
        option.addEventListener('click', function() {
            // Check if the clicked option is not a divider
            if (!option.classList.contains('divider')) {
                // Get the selected option text
                var selectedOptionText = option.textContent.trim();

                // Find the parent button element
                var button = option.closest('.above-threads').querySelector('.sort-by-btn');

                // Update the button text with the selected option text, keeping the icon HTML intact
                button.innerHTML = '<i class="material-icons right">arrow_drop_down_circle</i> ' + selectedOptionText;
            }
        });
    });
});

