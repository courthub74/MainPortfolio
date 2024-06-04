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

// 1st Square
exp_1.addEventListener('pointerdown', () => {
    console.log(roll_1);
    box_1.classList.toggle('tapped');
    roll_1.classList.toggle('tapped');
});

exp_name_1.addEventListener('pointerdown', () => {
    console.log(roll_1);
    box_1.classList.toggle('tapped');
    roll_1.classList.toggle('tapped');
});
