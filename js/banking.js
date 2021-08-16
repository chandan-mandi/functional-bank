/* function doubleIt(num){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7); */

function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositAmountText = depositInput.value;
    const depositAmout = parseFloat(depositAmountText);
    // clear input field
    depositInput.value = '';
    return depositAmout;
    
}




document.getElementById('deposit-button').addEventListener('click',function(){
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmout = parseFloat(depositAmountText); */
    const depositAmout = getInputValue('deposit-input');
    // get current deposit
    const depositPrevious = document.getElementById('deposit-total');
    const depositPreviousText = parseFloat(depositPrevious.innerText);
    const depositTotal = depositPreviousText + depositAmout;
    depositPrevious.innerText = depositTotal;


    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previouseBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previouseBalanceTotal + depositAmout;


    /* // clear input field
    depositInput.value = ''; */
})

// withdraw button handleer
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);
    // get current withdraw
    const withdrawPrevious = document.getElementById('withdraw-total');
    withdrawPreviousText = parseFloat(withdrawPrevious.innerText);
    withdrawPrevious.innerText = withdrawPreviousText + withdrawAmount;

    // UPDATE BALANCE 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previouseBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previouseBalanceTotal - withdrawAmount;

    // clear input field
    withdrawInput.value = '';

})