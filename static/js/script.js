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
    // Color palette
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

                // Update the button text with the selected option text and readding the icon
                button.innerHTML = '<i class="material-icons right">arrow_drop_down_circle</i> ' + selectedOptionText;
            }
        });
    });
});

// Initialze Modal Materialize
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
});


// Search functionality for threads
// Accsess the lists from threads and add them to one array:
// Search functionality for threads
/*
document.addEventListener('DOMContentLoaded', function() {
    var threadItems = document.querySelectorAll('.thread-item');
    var threadList = [];

    threadItems.forEach(function(item) {
        var threadData = {
            author: item.dataset.author,
            topic: item.dataset.topic,
            slug: item.dataset.slug,
            title: item.querySelector('.heading').innerText.trim(), // Extract title using innerText
            text: item.querySelector('.main-text').innerText.trim() // Extract text using innerText
        };
        // Strip HTML tags from the text content (optional)
        // var strippedText = threadData.text.replace(/<[^>]+>/g, '');
        // threadData.text = strippedText;

        threadList.push(threadData);
    });

    // The threadList containing all the thread data
    console.log(threadList);

    // Populate searchedThreads with threadList initially
    searchedThreads = threadList.slice(); // Copy threadList

    // Now you have all thread data in searchedThreads
    console.log(searchedThreads);
});
*/

/*
const searchBar = document.getElementById("autocomplete-input");
const threadListContainer = document.getElementById("threads-container");
let originalThreadsHTML = threadListContainer.innerHTML; // Store the original HTML of threads

searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value.trim().toLowerCase(); // Convert search string to lowercase

    if (searchString === '') { // If search bar is empty
        threadListContainer.innerHTML = originalThreadsHTML; // Restore original threads HTML
    } else {
        // Filter searchedThreads based on search string
        const filteredThreads = searchedThreads.filter(thread => {
            return thread.title.toLowerCase().includes(searchString) || thread.text.toLowerCase().includes(searchString);
        });

        // Display filtered threads
        displayThreads(filteredThreads);
    }
});
*/

/*
const displayThreads = (threads) => {
    const htmlString = threads.map((thread) => {
        return `
        <div class="card-panel">
            <div>
                <div class="chip">
                    <img src="{% static 'images/anon-pp.png' %}" alt="Thread Author">
                    by ${thread.author}
                </div>
                <a class="waves-effect waves-light btn-small topic-buttons right">${thread.topic}</a>
            </div>
            <ul class="collection">
                <li class="collection-item">
                    <h5 id="search-title" class="heading">${thread.title}</h5>
                    <p id="search-text" class="main-text">${thread.text}</p>
                </li>
            </ul>
        </div>
    </div>
        `;
    }).join(''); // Join the array of HTML strings into a single string

    // Set the inner HTML of the container element to the generated HTML string
    threadListContainer.innerHTML = htmlString;
};
*/
