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
    var colorPalette = ["#007BFF", "#6610F2", "#6F42C1", "#D9534F", "#28A745", "#FFC107", "#17A2B8", "#DC3545", "#FD7E14", "#198754", "#20c997", "#0d6efd", "#6610F2", "#6F42C1", "#D9534F", "#28A745", "#FFC107", "#17A2B8", "#DC3545", "#FD7E14"];

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
