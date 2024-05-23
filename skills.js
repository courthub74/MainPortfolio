// Query the Circle
let circle_one = document.getElementById('skill_circle_one');

// Query the Line
let line_one = document.getElementById('line_one');

// Query the Logo
let python_skill = document.getElementById('python');

// Query the Description
let python_description = document.getElementById('python_description');

// Mobile

// Desktops

// For any screen larger than the average tablet
let widthSkills = window.matchMedia("(min-width: 1180px)");

if(widthSkills.matches) {
    // add Event listener to the circle
    circle_one.addEventListener('mouseover', () => {
        circle_one.classList.add('hover');
        line_one.classList.add('hover');
        python_skill.classList.add('hover');
        python_description.classList.add('hover');
    });
    circle_one.addEventListener('mouseout', () => {
        circle_one.classList.remove('hover');
        line_one.classList.remove('hover');
        python_skill.classList.remove('hover');
        python_description.classList.remove('hover');
    });
}