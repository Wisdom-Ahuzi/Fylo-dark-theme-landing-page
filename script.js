const getStarted = document.querySelector('.get-started');

const see = document.querySelector('.see');

const input = document.querySelector('#imp');

const mail = document.querySelector('.access');

const forer = document.querySelector('.for');

const starter = document.querySelector('.start');

getStarted.addEventListener('click', (e)=>{

    getStarted.classList.toggle('started');
})

see.addEventListener('click', (e)=>{

    see.classList.toggle('seer');
})

const erEr = document.createElement('span');

erEr.classList.add('errr');

erEr.textContent = 'Please enter a valid email address';

forer.addEventListener('click', (e)=>{

    starter.classList.toggle('started');

    if (input.value.includes('@mail.com') === false) {
        mail.append(erEr);
        input.value = 'Johnappleseed#mail.com'
    } else {
        erEr.remove();
    }
});