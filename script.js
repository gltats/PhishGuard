// JavaScript to generate and style the rows within .moving-text
const movingText = document.querySelector('.moving-text');
const numRows = 29; // Number of rows

for (let i = 0; i < numRows; i++) {
    const row = document.createElement('p');
    // Use &nbsp; to represent a tab, and add multiple to create visible tabs
    row.innerHTML = 'You have been hacked!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have been hacked!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have been hacked!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have been hacked!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have been hacked!';
    row.style.animation = `moveSideways ${10 + i * 0.5}s linear infinite alternate`; // Adjust the animation duration
    movingText.appendChild(row);
}

// Load visitor count from localStorage or initialize it to 0
let visitorCount = localStorage.getItem('visitorCount');
if (visitorCount === null) {
    visitorCount = 0;
}
visitorCount = parseInt(visitorCount, 10);

// Increment the visitor count for each page load
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);

// Update the counter element
const counterElement = document.getElementById('counter');
counterElement.innerText = `Unique Visitors: ${visitorCount}`;