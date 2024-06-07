// Query the Whole Squares (to light up the top border)

// Query the Logos (for pressing the button)
let port_logo_one = document.getElementById('workflow_app');
let port_logo_two = document.getElementById('create_collab');
let port_logo_three = document.getElementById('luminex_solutions');

// Query the Elements in the Square (for positioning)
let port_elements_one = document.getElementById('portfolio_one');

// Query the Content (what pops up when dropped down)

// Query the Close button (to close the square)


// MOBILE

// SQUARE ONE

port_logo_one.addEventListener('pointerdown', () => {
    console.log("Box One Pressed");
});

// SQUARE TWO
port_logo_two.addEventListener('pointerdown', () => {
    console.log("Box Two Pressed");
});

// SQUARE THREE
port_logo_three.addEventListener('pointerdown', () => {
    console.log("Box Three Pressed");
});