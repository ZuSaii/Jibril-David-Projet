const signInButtonOne = document.querySelector('#signInButtonOne')
const signUpButtonTwo = document.querySelector('#signUpButtonTwo')


const signUpSubmitButton = document.querySelector('#signUpButtonOne');
const signInSubmitButton = document.querySelector('#signInButtonTwo');


const signIn = document.querySelector('#signIn')
const signUp = document.querySelector('#signUp')



console.log(signInButtonOne)
console.log(signUpButtonTwo)



signInButtonOne.addEventListener('click', function (e) {
    e.preventDefault()
    signUp.classList.add('hidden')
    signIn.classList.remove('hidden')
})

signUpButtonTwo.addEventListener('click', function (e) {
    e.preventDefault()
    signUp.classList.remove('hidden')
    signIn.classList.add('hidden')
})



signUpSubmitButton.addEventListener('click', function (e) {

    const firstname = document.querySelector('#firstname').value.trim()
    const lastname = document.querySelector('#lastname').value.trim()
    const email = document.querySelector('#email').value.trim()
    const password = document.querySelector('#password').value.trim()
    const confirmpassword = document.querySelector('#confirmpassword').value.trim()

    if (password !== confirmpassword) {
        alert("Les mots de passes ne correspondent pas!")
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || []

    if (users.some(user => user.email === email)) {
        alert("Cette email est deja utilisé")
        return;
    }

    users.push({ firstname, lastname, email, password })
    localStorage.setItem('users', JSON.stringify(users))

    alert("Vous avez bien était enregistrer, vous pouvez maintenant vous connectez")
    signUpFormContainer.classList.add('hidden')
    signInFormContainer.classList.remove('hidden')
});

signInSubmitButton.addEventListener('click', function (e) {

    const email = document.querySelector('#emailsignin').value.trim()
    const password = document.querySelector('#passwordsignin').value.trim()

    const users = JSON.parse(localStorage.getItem('users')) || []

    const user = users.find(user => user.email === email && user.password === password)

    if (user) {
        alert(`Bienvenue, ${user.firstname}!`)
        console.log('Connection au dashboard')
        window.location.href = 'index.html'
    } else {
        alert("Email ou mot de passe invalide!")
    }
})

