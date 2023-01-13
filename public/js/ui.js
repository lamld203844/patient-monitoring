import { AuthErrorCodes } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

const loginErrorMessage = document.querySelector('#loginErrorMessage');
const signupErrorMessage = document.querySelector('#signupErrorMessage');

export const hideLoginError = () => loginErrorMessage.hidden = true;

export const showLoginError = (error) => {
    loginErrorMessage.hidden = false;
    if(error.code == AuthErrorCodes.INVALID_PASSWORD){
        loginErrorMessage.innerHTML = '<p>Wrong email/ password. Try again.</p>';
    } else {
        loginErrorMessage.innerHTML = '<p>Email is not existed. <a class="redirectToSignUp" href="#">Sign up</a></p>';
    }
}

export const hideSignupError = () => signupErrorMessage.style.display = 'none';

export const showSignupError = (error) => {
    signupErrorMessage.style.display = 'block';
    if (error === 1){
        signupErrorMessage.innerHTML = '<p>The password confirmation does not match</p>'
    } else {
        signupErrorMessage.innerHTML = '<p>Invalid credential for signing up</p>'
    }
}

// Get JSON data
//     for each key
//         if exist
//             modify
//         else    
//             create a new one and append
export const updateList = (list) => {

// for each key
//     if existed
//         modify
//     else    
//         create a new one and append

    // get all key of list
    const keys = Object.keys(list)
    // for each key
    keys.forEach(key => {
        const id = document.querySelector(`#${key}`);
        // if element existed -> modify
        if (id) {
            id.innerHTML = `${list[key]}`
        } else {
            // create a card
            const card = document.createElement('div');
            card.className = 'card';
            card.setAttribute('style', 'width: 20rem;')

            // add content to card
            const content = `
            <div class='card-body'>
            <h5>${key}</h5>
            <p id ="${key}" class='card-text'>${list[key]}</p>
            </div>`
            card.innerHTML = content;

            // append card to given div
            const div = document.querySelector('#raw-data');
            div.append(card);                
        }
    }); 
}
