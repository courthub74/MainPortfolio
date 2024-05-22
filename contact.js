// We are going to make the 'Message Me' element flash 
    // when Contact button clicked

// Query the message text area
let message_me = document.querySelector('input');

// Query the submit button
let submit_button = document.getElementById('email_button');

// Query the contact button
let contact_button = document.getElementById('contact');

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