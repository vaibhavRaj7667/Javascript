
const amount = document.getElementById('amount')
const tip = document.getElementById('tip')
const btn = document.getElementById('btn')
const result = document.getElementById('result')


btn.addEventListener('click', function() {
    const amountValue = parseFloat(amount.value);
    const tipValue = parseFloat(tip.value);

    if (!isNaN(amountValue) && !isNaN(tipValue)) {  
        const answer = ((amountValue * tipValue) / 100)+amountValue;
        result.textContent = `$${answer}`;  
    } else {
        result.textContent = 'Please enter valid numbers!';  
    }
});
