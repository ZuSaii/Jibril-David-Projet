const signInButtonOne = document.querySelector('#signInButtonOne')
const signUpButtonTwo = document.querySelector('#signUpButtonTwo')
const signUpButtonOne = document.querySelector('#signUpButtonOne')
const signInButtonTwo = document.querySelector('#signInButtonTwo')


const signIn = document.querySelector('#signIn')
const signUp = document.querySelector('#signUp')



console.log(signInButtonOne)
console.log(signUpButtonTwo)

signUpButtonOne.addEventListener('click', function(e) {
    e.preventDefault()
})

signInButtonTwo.addEventListener('click', function(e) {
    e.preventDefault()
})

signInButtonOne.addEventListener('click', function(e) {
    e.preventDefault()
    signUp.classList.add('hidden')
    signIn.classList.remove('hidden')
})

signUpButtonTwo.addEventListener('click', function(e) {
    e.preventDefault()
    signUp.classList.remove('hidden')
    signIn.classList.add('hidden')
})



// signInButtonOne.addEventListener('click', function (event) {
//     event.preventDefault();
//     signUp.style.display = "none";
//     signIn.style.display = "block";
// });

// signUpButtonTwo.addEventListener('click', function (event) {
//     event.preventDefault();
//     signIn.style.display = "none";
//     signUp.style.display = "block";
// });


