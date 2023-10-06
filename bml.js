let heightInput = document.getElementById('hg');
let weightInput = document.getElementById('wg');
let calBtn = document.getElementById('cal');
let resBtn = document.getElementById('res');
let showMess = document.getElementById('val');
let msgs = document.getElementById('msg');
let invalid = document.getElementById('inVal')


function calculateBmi () {
    let h,w,b;
    h = Number(heightInput.value);
    w = Number(weightInput.value);
    b = w / (h * 0.0254 * h * 0.0254);
    showMess.innerText = b.toFixed(2);
    let msg = bmiMessage (b)
    msgs.innerText = msg
}

function bmiMessage (bmiValue) {
    if (bmiValue < 16) {
        msgs.style.color = 'red';
        msgs.style.fontSize = '25px'
        return 'You are Severe Thin';
    }else if (bmiValue >= 16 && bmiValue <= 17) {
        msgs.style.color = 'yellow';
        msgs.style.fontSize = '25px'
        return 'You are Moderate Thin';
    }else if (bmiValue > 17 && bmiValue <= 18.5) {
        msgs.style.color = 'green';
        msgs.style.fontSize = '25px'
        return 'You are Mid Thin'
    }else if (bmiValue > 18.5 && bmiValue <= 25) {
        msgs.style.color = 'green';
        msgs.style.fontSize = '25px'
        return 'You are Normal'
    } else if (bmiValue > 25) {
        msgs.style.color = 'red';
        msgs.style.fontSize = '25px'
        return 'You are Overweight'
    }
}

function reset () {
    heightInput.value = '';
    weightInput.value = '';
    showMess.innerText = '_____';
    msgs.innerText = '';
}

function isValidedInput () {
    if (Number(heightInput.value) && Number(weightInput.value)) {
        calculateBmi()
    }else {
       alert('Please Enter a Valid Input')
        reset()
    }
}

calBtn.addEventListener ('click', isValidedInput);
resBtn.addEventListener('click',reset)