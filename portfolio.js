// Query the Whole Squares (to light up the top border)
let port_sq_one = document.getElementById('portfolio_square_one');
let port_sq_two = document.getElementById('portfolio_square_two');
let port_sq_three = document.getElementById('portfolio_square_three');

// Query the Logos (for pressing the button)
let port_logo_one = document.getElementById('workflow_app');
let port_logo_two = document.getElementById('create_collab');
let port_logo_three = document.getElementById('luminex_solutions');

// Query the Elements in the Square (for positioning)
// let port_elements_one = document.getElementById('portfolio_one');

// Query the Content (what pops up when dropped down)
let port_content_one = document.getElementById('workflow_app_content');
let port_content_two = document.getElementById('create_collab_content');

// Query the Close button (to close the square)
let port_close_one = document.getElementById('port_close_one');
let port_close_two = document.getElementById('port_close_two');

// MOBILE

// SQUARE ONE

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
});

// SQUARE TWO
port_logo_two.addEventListener('pointerdown', () => {
    console.log("Box Two Pressed");
});

// SQUARE THREE
port_logo_three.addEventListener('pointerdown', () => {
    console.log("Box Three Pressed");
});