console.log('script.js loaded');

const messages = [
    "guij bain?",
    "vneheer vv??",
    "ahiad bodooch?",
    "Pookie please...",
    "ene minii gats han hvsel !",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;
let emailjsReady = false;

window.handleNoClick = function() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
};

window.addEventListener('load', function() {
    if (typeof emailjs !== 'undefined') {
        console.log('EmailJS loaded - initializing');
        emailjs.init('Xy7_51LttOfhK3m07');
        emailjsReady = true;
    } else {
        console.error('EmailJS SDK not found');
    }
});

window.handleYesClick = function() {
    console.log('Yes clicked - emailjsReady:', emailjsReady);
    
    if (!emailjsReady || typeof emailjs === 'undefined') {
        alert('Email service loading... try again');
        return;
    }
    
    emailjs.send('service_6249nls', 'template_jhzhh3p', {
        to_email: 'erdneyondo3@gmail.com',
        to_name: 'CHINII HAIR ENERLT',
        message: 'She said YES!'
    }).then(() => {
        window.location.href = "yesyes.html";
    }).catch(err => {
        console.error('Error:', err);
        alert('Error: ' + err.text);
    });
};
