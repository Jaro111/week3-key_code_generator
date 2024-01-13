// > A welcome message should be displayed (in any form)
// > The generator should wait for a key to be pressed
// > Once the key has been pressed, the generator should report the:
//  .code, .key & .charCode values
// > Appropriate styling should be applied
// Stretch Goals
// These criteria are optional:
// > When viewing on a phone an input box is shown and used so a 
// user can get the key code information on mobile and desktop 
// machines

// Variables
const redirect = document.getElementById('indexBody');
const mainBody = document.getElementById('mainBody');
const codeKey = document.getElementById('code');
const key =document.getElementById('key');
const charCod = document.getElementById('charCode');

// Condition function disables action for some keys like for example F5 which refreshes the page
conditonFunc = () => {
    if (event.which === 116 || event.keyCode === 9 || event.charCode === 0) {
        event.preventDefault();
    }
}
// 'Keyup' event listener
document.addEventListener('keyup', (event) => {
    console.log(event)
    charCod.textContent = event.which
    codeKey.textContent = event.code
    key.textContent = event.key   
    conditonFunc()
})

// 'Keydown' event listener
document.addEventListener('keydown', (event) => {
    console.log(event)
    codeKey.textContent = event.code
    key.textContent = event.key
    charCod.textContent = event.which
    conditonFunc()
})

// Function to redirect to main app window if any key is pressed
redirect.addEventListener('keypress', (event) => {
    window.location.replace('./main.html')

})


