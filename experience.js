// Query the Whole Box

let job_1 = document.getElementById('experience_square_one');

let job_2 = document.getElementById('experience_square_two');

let job_3 = document.getElementById('experience_square_three');

// Query the experience rolls (the information)

let roll_1 = document.getElementById('roll_one');

let roll_2 = document.getElementById('roll_two');

let roll_3 = document.getElementById('roll_three');

// Query the Boxes (To Light up the top on Desktop)

let box_1 = document.getElementById('experience_square_one');

let box_2 = document.getElementById('experience_square_two');

let box_3 = document.getElementById('experience_square_three');

// Query the Arrow Buttons (for Mobile)
let arrow_1 = document.getElementById('experience_one');
let arrow_2 = document.getElementById('experience_two');
let arrow_3 = document.getElementById('experience_three');

// Query the Arrow graphic for rotate
let arrow_1_graphic = document.getElementById('experience_more_info_one');
let arrow_2_graphic = document.getElementById('experience_more_info_two');
let arrow_3_graphic = document.getElementById('experience_more_info_three');
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// MOBILE 
// Press the Title Function (pointerdown)
arrow_1.addEventListener('pointerdown', () => {
    console.log('Job One Clicked');
    // Make the circle bigger
    box_1.classList.toggle('tapped');
    arrow_1_graphic.classList.toggle('tapped');
});

arrow_2.addEventListener('pointerdown', () => {
    console.log('Job Two Clicked');
    // Make the circle bigger
    box_2.classList.toggle('tapped');
    arrow_2_graphic.classList.toggle('tapped');
});

box_3.addEventListener('pointerdown', () => {
    console.log('Job Three Clicked');
    // Make the circle bigger
    box_3.classList.toggle('tapped');
    arrow_3_graphic.classList.toggle('tapped');
});


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// DESKTOP

// For any screen larger than the average tablet
let widthMatch = window.matchMedia("(min-width: 1180px)");

if(widthMatch.matches) {
    // JOB 1
    // Hover over the Title Function
    box_1.addEventListener('mouseover', () => {
        // The Words
        roll_1.classList.add('hover');
        // The Box
        box_1.classList.add('hover');
    });
    // Hover out
    box_1.addEventListener('mouseout', () => {
        roll_1.classList.remove('hover');
        box_1.classList.remove('hover');
    });

    

    // JOB 2
    // Hover over the Title Function
    box_2.addEventListener('mouseover', () => {
        roll_2.classList.add('hover');
        box_2.classList.add('hover');
    });
    // Hover out
    box_2.addEventListener('mouseout', () => {
        roll_2.classList.remove('hover');
        box_2.classList.remove('hover');
    });

    // JOB 3
    // Hover over the Title Function
    box_3.addEventListener('mouseover', () => {
        roll_3.classList.add('hover');
        box_3.classList.add('hover');
    });
    // Hover out
    box_3.addEventListener('mouseout', () => {
        roll_3.classList.remove('hover');
        box_3.classList.remove('hover');
    });
}


