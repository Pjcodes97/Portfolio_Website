// Gets Connect with me button and the contact form
let contactButton = document.getElementById('openForm');

let contactForm = document.getElementById('contactform');

let colorButton = document.getElementById('color-button');
let colorSelect = document.getElementById('theme');
//Hides 'Connect with me' button and makes contact form visible
function visibleForm() {
    contactForm.style.visibility = 'visible';
    contactButton.style.visibility = 'collapse';
}

contactButton.onclick = visibleForm;

let color = 0;

/* Changes CSS to the light color theme style sheet */
function colorChange() {
    if (color === 0) {
        theme.setAttribute('href', 'resources/altcolor.css');
        color += 1;
    } else if (color === 1) {
        theme.setAttribute('href', 'resources/style.css');
        color -= 1;
    }
}

colorButton.onclick = colorChange;

/*Creating Drop down menu */
let dropMenu = document.getElementById('dropdown');
let dropButton = document.getElementById('dropbutton');

let screenCount = 0
function dropDown() {
    if (screenCount === 0) {
        dropMenu.style.display = 'block';
        screenCount += 1;
    } else if (screenCount === 1) {
        dropMenu.style.display = 'none';
        screenCount -= 1;
    }
}

dropButton.onclick = dropDown;

