import { AuthErrorCodes } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

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
//         if existed (being update)
//             modify
//         else    
//             create a new one and append
export const updateList = (list) => {

// for each key
//     if existed (being update)
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

export const drawBarChart = (list) => {
    console.log('Draw bar chart')
    console.log(list);

    const svg =  d3.select("#svg")

    const svgHeight = svg.node().clientHeight;
    const svgWidth = svg.node().clientWidth;

    const dataset = Object.values(list)

    svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', (d,i) => i*(svgWidth/ dataset.length))
    .attr('y', d => svgHeight - d*4)
    .attr('width', 20)
    .attr('height', d => d*100)

    svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(d => d)
    .attr('x', (d,i) => i*(svgWidth/ dataset.length))
    .attr('y', d => (svgHeight- d*4));
}