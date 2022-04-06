const body = document.querySelector('body');
const duckBtn = document.querySelector('.duck-btn');
const duckRight = document.querySelector('.duck-right');
const contactName = document.querySelector('.contact-name');
const textarea = document.querySelector('.contact-textarea');
const textValidation = document.querySelector('.textarea-validation');
const formSubmitBtn = document.querySelector('.contact-submit-btn');

duckBtn.onclick = function () {
    duckBtn.textContent = 'Click me again!'
    if (duckRight.querySelector('p')) {
        let oldQuack = duckRight.querySelector('p');
        oldQuack.remove();
    }
    let plusOrMinusRotation = Math.random() < 0.5 ? -1 : 1;
    let quack = document.createElement('p');
    quack.textContent = 'Quack!';
    quack.setAttribute('style', 'position: relative; font-size: 50px; color: #727a6d; top: ' + Math.round(Math.random()*86) + '%; left: ' + Math.round(Math.random()*64) + '%; z-index: 1; transform: rotate('+ plusOrMinusRotation * Math.random() * 45 +'deg)');
    duckRight.appendChild(quack);
}

textarea.addEventListener('keyup' , function () {
    let characters = textarea.value.length;
    if (characters === 0) {
      textValidation.textContent = '';
    } else {
      textValidation.textContent = `You have ${500-characters} characters remaining`;
      textValidation.setAttribute('style', 'margin-bottom: 1em');
    }
});

formSubmitBtn.addEventListener('click', function () {
    const submitErrorWrapper1 = document.querySelector('.submit-error-wrapper1');
    const submitErrorWrapper2 = document.querySelector('.submit-error-wrapper2');
    if (submitErrorWrapper1.querySelector('img') && submitErrorWrapper1.querySelector('p')) {
        let excessWarning = submitErrorWrapper1.querySelector('img');
        let excessText = submitErrorWrapper1.querySelector('p');
        excessWarning.remove();
        excessText.remove();
        contactName.style.border = 'solid 2px transparent'
    }
    if (submitErrorWrapper2.querySelector('img') && submitErrorWrapper2.querySelector('p')) {
        let excessWarning = submitErrorWrapper2.querySelector('img');
        let excessText = submitErrorWrapper2.querySelector('p');
        excessWarning.remove();
        excessText.remove();
        textarea.style.border = 'solid 2px transparent'
    }

    if (contactName.value === '') {
        const warningIcon = document.createElement('img');
        const submitError = document.createElement('p');
        warningIcon.src = './exclamation-mark.png';
        warningIcon.setAttribute('style', `height: 30px; width: auto;`);
        submitError.textContent = 'You need to enter a name to send';
        submitError.setAttribute('style', 'color: #FFF347; padding: 10px 0;');
        submitErrorWrapper1.appendChild(warningIcon);
        submitErrorWrapper1.appendChild(submitError);
        contactName.style.border = '2px solid #FFF347';
      }

    if (textarea.value === '') {
      const warningIcon = document.createElement('img');
      const submitError = document.createElement('p');
      warningIcon.src = './exclamation-mark.png';
      warningIcon.setAttribute('style', `height: 30px; width: auto;`);
      submitError.textContent = 'You need to enter a message to send';
      submitError.setAttribute('style', 'color: #FFF347; padding: 10px 0;');
      submitErrorWrapper2.appendChild(warningIcon);
      submitErrorWrapper2.appendChild(submitError);
      textarea.style.border = '2px solid #FFF347';
    }
});