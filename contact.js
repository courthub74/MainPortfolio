// We are going to make the 'Message Me' element flash 
    // when Contact button clicked

// Query the message text area
let message_me = document.querySelector('input');

// Query the submit button
let submit_button = document.getElementById('email_button');

// Query the contact buttons
let contact_button = document.getElementById('contact');
let contact_about = document.getElementById('contact_about');
let contact_portfolio = document.getElementById('contact_portfolio');

// Query the contact placeholder
let place_holder = document.querySelector('placeholder');

// NOW change the color, eventually add a timer so it flashes
    // when Contact is clicked
contact_button.addEventListener('click', () => {
    submit_button.classList.add('contact');
    message_me.classList.add('contact');
    
    // Add a function that times the color out
    function color_back() {
        submit_button.classList.remove('contact');
        message_me.classList.remove('contact');
    }
    setTimeout(color_back, 2000);
});

// ABOUT PAGE
contact_about.addEventListener('click', () => {
    submit_button.classList.add('contact');
    message_me.classList.add('contact');
    
    // Add a function that times the color out
    function color_back() {
        submit_button.classList.remove('contact');
        message_me.classList.remove('contact');
    }
    setTimeout(color_back, 2000);
});

// PORTFOLIO PAGE
contact_portfolio.addEventListener('click', () => {
    submit_button.classList.add('contact');
    message_me.classList.add('contact');
    
    // Add a function that times the color out
    function color_back() {
        submit_button.classList.remove('contact');
        message_me.classList.remove('contact');
    }
    setTimeout(color_back, 2000);
});