// Query the Whole Squares
let port_sq_one = document.getElementById('portfolio_square_one');

// Query the Logos
let port_logo_one = document.getElementById('workflow_app');

// Query the Content
let port_content_one = document.getElementById('workflow_app_content');

// Query the Close button
let port_close_one = document.getElementById('port_close_one');

// MOBILE

// Square One

// Logo to click it on
port_logo_one.addEventListener('pointerdown', () => {
    console.log("Box One Pressed");
    port_sq_one.classList.add('tapped');
    port_logo_one.classList.add('tapped');
    port_content_one.classList.add('tapped');
});

// Close button to click off
port_close_one.addEventListener('pointerdown', () => {
    port_sq_one.classList.remove('tapped');
    port_logo_one.classList.remove('tapped');
    port_content_one.classList.remove('tapped');
})