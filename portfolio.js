// Query the Whole Squares
let port_sq_one = document.getElementById('portfolio_square_one');

// Query the Logos
let port_logo_one = document.getElementById('workflow_app');

// Query the Content
let port_content_one = document.getElementById('workflow_app_content');

// Query the Close button


// MOBILE
port_logo_one.addEventListener('pointerdown', () => {
    console.log("Box One Pressed");
    port_sq_one.classList.toggle('tapped');
    port_logo_one.classList.toggle('tapped');
    port_content_one.classList.toggle('tapped');
});