// Query the outer Circle
let html_skill_circle = document.getElementById('html_skill');
let python_skill_circle = document.getElementById('python_skill');
let css_skill_circle = document.getElementById('css_skill');
let sass_skill_circle = document.getElementById('sass_skill');

// Query the Line
let line_html = document.getElementById('line_html');
let line_python = document.getElementById('line_python');
let line_css = document.getElementById('line_css');
let line_sass = document.getElementById('line_sass');

// Query the Logo
let python_skill = document.getElementById('python');
let html_skill = document.getElementById('html');
let css_skill = document.getElementById('css');
let sass_skill = document.getElementById('sass');

// Query the Description
let python_description = document.getElementById('python_description');
let html_description = document.getElementById('html_description');
let css_description = document.getElementById('css_description');
let sass_description = document.getElementById('sass_description');

// Mobile

// Desktops

// For any screen larger than the average tablet
let widthSkills = window.matchMedia("(min-width: 1180px)");

if(widthSkills.matches) {

    // ALL OF THE CIRCLES
    // HTML
    html_skill_circle.addEventListener('mouseover', () => {
        html_skill_circle.classList.add('hover');
        line_html.classList.add('hover');
        html_skill.classList.add('hover');
        html_description.classList.add('hover');
    })
    html_skill_circle.addEventListener('mouseout', () => {
        html_skill_circle.classList.remove('hover');
        line_html.classList.remove('hover');
        html_skill.classList.remove('hover');
        html_description.classList.remove('hover');
    });
    // CSS 
    css_skill_circle.addEventListener('mouseover', () => {
        css_skill_circle.classList.add('hover');
        line_css.classList.add('hover');
        css_skill.classList.add('hover');
        css_description.classList.add('hover');
    });
    css_skill_circle.addEventListener('mouseout', () => {
        css_skill_circle.classList.remove('hover');
        line_css.classList.remove('hover');
        css_skill.classList.remove('hover');
        css_description.classList.remove('hover');
    });
    // SASS
    sass_skill_circle.addEventListener('mouseover', () => {
        sass_skill_circle.classList.add('hover');
        line_sass.classList.add('hover');
        sass_skill.classList.add('hover');
        sass_description.classList.add('hover');
    });
    sass_skill_circle.addEventListener('mouseout', () => {
        sass_skill_circle.classList.remove('hover');
        line_sass.classList.remove('hover');
        sass_skill.classList.remove('hover');
        sass_description.classList.remove('hover');
    });
    // PYTHON
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