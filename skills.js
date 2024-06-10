// Query the outer Circle
let html_skill_circle = document.getElementById('html_skill');
let python_skill_circle = document.getElementById('python_skill');
let css_skill_circle = document.getElementById('css_skill');
let sass_skill_circle = document.getElementById('sass_skill');
let react_skill_circle = document.getElementById('react_skill');
let native_skill_circle = document.getElementById('native_skill');
let figma_skill_circle = document.getElementById('figma_skill');

// Query the inner Circle
let html_inner_circle = document.getElementById('inner_circle_html');
let css_inner_circle = document.getElementById('inner_circle_css');

// Query the Line
let line_html = document.getElementById('line_html');
let line_python = document.getElementById('line_python');
let line_css = document.getElementById('line_css');
let line_sass = document.getElementById('line_sass');
let line_react = document.getElementById('line_react');
let line_native = document.getElementById('line_native');
let line_figma = document.getElementById('line_figma');

// Query the Logo
let python_skill = document.getElementById('python');
let html_skill = document.getElementById('html');
let css_skill = document.getElementById('css');
let sass_skill = document.getElementById('sass');
let react_skill = document.getElementById('react');
let native_skill = document.getElementById('native');
let figma_skill = document.getElementById('figma');

// Query the Description
let python_description = document.getElementById('python_description');
let html_description = document.getElementById('html_description');
let css_description = document.getElementById('css_description');
let sass_description = document.getElementById('sass_description');
let react_description = document.getElementById('react_description');
let native_description = document.getElementById('native_description');
let figma_description = document.getElementById('figma_description');

// Mobile

// Here is where we apply click event listener

// HTML CIRCLE
html_skill_circle.addEventListener('click', () => {
    html_skill_circle.classList.add('tapped');
    line_html.classList.add('tapped');
    html_skill.classList.add('tapped');
    html_description.classList.add('tapped');
    html_inner_circle.classList.add('tapped');
    // add a function that resets the circle
    function reset_html() {
        html_skill_circle.classList.remove('tapped');
        line_html.classList.remove('tapped');
        html_skill.classList.remove('tapped');
        html_description.classList.remove('tapped');
        // html_inner_circle.classList.remove('tapped');
    }
    // set the timer to reset it
    setTimeout(reset_html, 3500);
});

// CSS CIRCLE
css_skill_circle.addEventListener('click', () => {
    css_skill_circle.classList.add('tapped');
    line_css.classList.add('tapped');
    css_skill.classList.add('tapped');
    css_description.classList.add('tapped');
    // css_inner_circle.classList.add('tapped');
    function reset_css() {
        css_skill_circle.classList.remove('tapped');
        line_css.classList.remove('tapped');
        css_skill.classList.remove('tapped');
        css_description.classList.remove('tapped');
        css_inner_circle.classList.remove('tapped');
    }
    setTimeout(reset_css, 3500);
});

// SASS CIRCLE
sass_skill_circle.addEventListener('pointerdown', () => {
    sass_skill_circle.classList.add('tapped');
    line_sass.classList.add('tapped');
    sass_skill.classList.add('tapped');
    sass_description.classList.add('tapped');
    // sass_inner_circle.classList.add('tapped');
    function reset_sass() {
        sass_skill_circle.classList.remove('tapped');
        line_sass.classList.remove('tapped');
        sass_skill.classList.remove('tapped');
        sass_description.classList.remove('tapped');
        sass_inner_circle.classList.remove('tapped');
    }
    setTimeout(reset_sass, 3500);
});


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
    // REACT
    react_skill_circle.addEventListener('mouseover', () => {
        react_skill_circle.classList.add('hover');
        line_react.classList.add('hover');
        react_skill.classList.add('hover');
        react_description.classList.add('hover');
    });
    react_skill_circle.addEventListener('mouseout', () => {
        react_skill_circle.classList.remove('hover');
        line_react.classList.remove('hover');
        react_skill.classList.remove('hover');
        react_description.classList.remove('hover');
    });
    // NATIVE
    native_skill_circle.addEventListener('mouseover', () => {
        native_skill_circle.classList.add('hover');
        line_native.classList.add('hover');
        native_skill.classList.add('hover');
        native_description.classList.add('hover');
    });
    native_skill_circle.addEventListener('mouseout', () => {
        native_skill_circle.classList.remove('hover');
        line_native.classList.remove('hover');
        native_skill.classList.remove('hover');
        native_description.classList.remove('hover');
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