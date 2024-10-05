const events = [
    {
        title: "Webathon: UI/UX Challenge",
        description: "Join the Webathon: UI/UX Challenge to showcase your creativity and skills by designing innovative, user-centered web solutions in a fast-paced, competitive environment!",
        image: "webathon-poster.jpg", // Image for the event
        date: "2024-10-09", // Changed key to lowercase
        imageAlt: "Webathon: UI/UX Challenge", // Alt text for the image
        imageWidth: "100%", // Image width
        imageHeight: "600px", // Image height
        color: "#03a5fc", // Color for the card
        link: "/webathon" // Link to the specific event page
    },
    // Example 1
    // {
    //     title: "Introduction to Node.js",
    //     description: "Discover the power of Node.js for backend development.",
    //     image: "nodejs-workshop.jpg", // Image for the event
    //     date: "2024-10-15", // Changed key to lowercase
    //     imageAlt: "Introduction to Node.js", // Alt text for the image
    //     imageWidth: "100%", // Image width
    //     imageHeight: "200px", // Image height
    //     color: "#3498db", // Color for the card
    //     link: "event2.html" // Link to the specific event page
    // },
    // Example 2
    // {
    //     title: "Data Visualization with D3.js",
    //     description: "A hands-on workshop on creating beautiful data visualizations.",
    //     image: "d3js-workshop.jpg", // Image for the event
    //     date: "2024-10-20", // Changed key to lowercase
    //     imageAlt: "Data Visualization with D3.js", // Alt text for the image
    //     imageWidth: "100%", // Image width
    //     imageHeight: "200px", // Image height
    //     color: "#2ecc71", // Color for the card
    //     link: "event3.html" // Link to the specific event page
    // }
];

// Function to dynamically add events to the event section
function loadEvents() {
    const eventContainer = document.getElementById('event-container');

    // Clear previous content (if any)
    eventContainer.innerHTML = '';

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.style.backgroundColor = event.color;
        eventCard.style.minHeight = '400px'; // Ensuring the minimum height

        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.imageAlt}" style="width:${event.imageWidth}; height:${event.imageHeight}; object-fit:cover; border-radius: 10px; margin-bottom: 15px;">
            <div class="event-date">${new Date(event.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</div> <!-- Date element -->
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <a href="${event.link}" class="button">Read More</a>
        `;
        eventContainer.appendChild(eventCard);
    });
}

// Load events on page load
window.onload = loadEvents;  


// --------------------------------------
// Steps to Update Event Data:
// --------------------------------------
// 1. Open the script.js file in your code editor.
// 2. Locate the `events` array, which contains objects representing each event.
// 3. To add a new event, create a new object in the array with the following structure:
//    {
//        title: "Your Event Title",
//        description: "A brief description of the event.",
//        image: "your-image-file.jpg", // Path to the image
//        imageAlt: "Alt text for the image", // Alt text for the image
//        imageWidth: "Width in px or %", // Image width
//        imageHeight: "Height in px or %", // Image height
//        color: "#HEXCODE", // Choose a color for the card background
//        link: "your-event-page.html" // Link to the specific event page
//    }
// 4. To modify an existing event, change the `title`, `description`, `image`, `imageAlt`, `imageWidth`, `imageHeight`, `color`, or `link` of the corresponding object.
// 5. To remove an event, simply delete the object from the array.
// 6. Save the changes to the script.js file and refresh your web browser to see the updates.
// --------------------------------------
