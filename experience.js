// Query the Whole Boxes
let box_1 = document.getElementById('experience_square_one');
let box_2 = document.getElementById('experience_square_two');
let box_3 = document.getElementById('experience_square_three');

// Query the Logos
let exp_1 = document.getElementById('courdevelops');
let exp_2 = document.getElementById('slea');
let exp_3 = document.getElementById('r1rcm');

// Query the Company name
let exp_name_1 = document.getElementById('experience_1');
let exp_name_2 = document.getElementById('experience_2');
let exp_name_3 = document.getElementById('experience_3');

// Query the experience rolls (words)
let roll_1 = document.getElementById('roll_one');
let roll_2 = document.getElementById('roll_two');
let roll_3 = document.getElementById('roll_three');

// Mobile

// 1st Square Logo
exp_1.addEventListener('pointerdown', () => {
    // console.log(roll_1);
    box_1.classList.add('tapped');
    roll_1.classList.add('tapped');
    // Function to time a reset
    function reset_exp_1() {
        box_1.classList.remove('tapped');
        roll_1.classList.remove('tapped');
    }
    setTimeout(reset_exp_1, 3000);
});

// 1st Square Title
exp_name_1.addEventListener('pointerdown', () => {
    // console.log(roll_1);
    box_1.classList.add('tapped');
    roll_1.classList.add('tapped');
    // Function to time a reset
    function reset_exp_1() {
        box_1.classList.remove('tapped');
        roll_1.classList.remove('tapped');
    }
    setTimeout(reset_exp_1, 3000);
});

// 2nd Square Logo
exp_2.addEventListener('pointerdown', () => {
    box_2.classList.add('tapped');
    roll_2.classList.add('tapped');
    // Function to time a reset
    function reset_exp_2() {
        box_2.classList.remove('tapped');
        roll_2.classList.remove('tapped');
    }
    setTimeout(reset_exp_2, 3000);
});

// 2nd Square Title
exp_name_2.addEventListener('pointerdown', () => {
    // console.log(roll_1);
    box_2.classList.add('tapped');
    roll_2.classList.add('tapped');
    // Function to time a reset
    function reset_exp_2() {
        box_2.classList.remove('tapped');
        roll_2.classList.remove('tapped');
    }
    setTimeout(reset_exp_2, 3000);
});


// 3rd Square Logo
exp_3.addEventListener('pointerdown', () => {
    box_3.classList.add('tapped');
    roll_3.classList.add('tapped');
    // Function to time a reset
    function reset_exp_3() {
        box_3.classList.remove('tapped');
        roll_3.classList.remove('tapped');
    }
    setTimeout(reset_exp_3, 3000);
});

// 2nd Square Title
exp_name_3.addEventListener('pointerdown', () => {
    box_3.classList.add('tapped');
    roll_3.classList.add('tapped');
    // Function to time a reset
    function reset_exp_3() {
        box_3.classList.remove('tapped');
        roll_3.classList.remove('tapped');
    }
    setTimeout(reset_exp_3, 3000);
});

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
// DESKTOP FUNCTIONALITY

