// Query the Circle
let circle_one = document.getElementById('skill_circle_one');
let python_skill_circle = document.getElementById('python_skill');

// Query the Line
// let line_one = document.getElementById('line_one');
let line_python = document.getElementById('line_python');

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
    python_skill_circle.addEventListener('mouseover', () => {
        python_skill_circle.classList.add('hover');
        line_python.classList.add('hover');
        python_skill.classList.add('hover');
        python_description.classList.add('hover');
    });
    python_skill_circle.addEventListener('mouseout', () => {
        python_skill_circle.classList.remove('hover');
        line_python.classList.remove('hover');
        python_skill.classList.remove('hover');
        python_description.classList.remove('hover');
    });
}