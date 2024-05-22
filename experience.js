// Query the titles and Logos

let job_1 = document.getElementById('experience_square_one');

let job_2 = document.getElementById('experience_square_two');

let job_3 = document.getElementById('experience_square_three');

// Query the experience rolls

let roll_1 = document.getElementById('roll_one');

let roll_2 = document.getElementById('roll_two');

let roll_3 = document.getElementById('roll_three');

// Query the Boxes

let box_1 = document.getElementById('experience_square_one');

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// MOBILE 
// Press the Title Function (pointerdown)
job_1.addEventListener('pointerdown', () => {
    console.log('Job One Clicked');
});

job_2.addEventListener('pointerdown', () => {
    console.log('Job Two Clicked');
});

job_3.addEventListener('pointerdown', () => {
    console.log('Job Three Clicked');
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
    job_1.addEventListener('mouseover', () => {
        roll_1.classList.add('hover');
        // brighten the top border color
        box_1.classList.add('hover');
    });
    // Hover out
    job_1.addEventListener('mouseout', () => {
        roll_1.classList.remove('hover');
        box_1.classList.remove('hover');
    });

    // JOB 2
    // Hover over the Title Function
    job_2.addEventListener('mouseover', () => {
        roll_2.classList.add('hover');
    });
    // Hover out
    job_2.addEventListener('mouseout', () => {
        roll_2.classList.remove('hover');
    });

    // JOB 3
    // Hover over the Title Function
    job_3.addEventListener('mouseover', () => {
        roll_3.classList.add('hover');
    });
    // Hover out
    job_3.addEventListener('mouseout', () => {
        roll_3.classList.remove('hover');
    });
}


