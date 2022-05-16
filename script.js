// Gets Connect with me button and the contact form
let contactButton = document.getElementById('openForm');

let contactForm = document.getElementById('contactform');

let colorButton = document.getElementById('color-button');
//Hides 'Connect with me' button and makes contact form visible
function visibleForm() {
    contactForm.style.visibility = 'visible';
    contactButton.style.visibility = 'collapse';
}

contactButton.onclick = visibleForm;

let color = 0;

function colorChange() {
    if (color === 0) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        color += 1;
    } else if (color === 1) {
        document.body.style.backgroundColor = '#201E1D';
        document.body.style.color = 'white';
        color -= 1;
    }
}


colorButton.onclick = colorChange;



