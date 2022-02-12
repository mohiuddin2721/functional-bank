// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);
// console.log(first)
// console.log(second)

function getInputValue(inputId) {
    const InputField = document.getElementById(inputId);
    const InputAmountText = InputField.value;
    const AmountValue = parseFloat(InputAmountText);
    InputField.value = '';
    return AmountValue;
}
function updateTotalField(totalFieldId, Amount) {
    const TotalElement = document.getElementById(totalFieldId);
    const TotalText = TotalElement.innerText;
    const previousTotal = parseFloat(TotalText);
    TotalElement.innerText = previousTotal + Amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
}

function updateBalance(Amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotalText);
    const balanceTotalAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmount + Amount;
    }
    else {
        balanceTotal.innerText = balanceTotalAmount - Amount;
    }
}



document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const depositInputText = depositInput.value;
    // const depositInputAmount = parseFloat(depositInputText);

    
    
    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositTotalText = depositTotal.innerText;
    // const previousDepositTotalAmount = parseFloat(previousDepositTotalText);

    // depositTotal.innerText = previousDepositTotalAmount + depositInputAmount;

    

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotalText);
    // balanceTotal.innerText = balanceTotalAmount + depositInputAmount;

    const depositInputAmount = getInputValue('deposit-input');
    if(depositInputAmount > 0) {
        updateTotalField('deposit-total', depositInputAmount);
        updateBalance(depositInputAmount, true);
    }
    

    // depositInput.value = '';
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    // const withdrawInputAmount = parseFloat(withdrawInputText);

    

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const withdrawTotalAmount = parseFloat(withdrawTotalText);

    // withdrawTotal.innerText = withdrawTotalAmount + withdrawInputAmount;

    

    // const balanceAfterWithdraw = document.getElementById('balance-total');
    // const balanceAfterWithdrawText = balanceAfterWithdraw.innerText;
    // const balanceAfterWithdrawAmount = parseFloat(balanceAfterWithdrawText);

    // balanceAfterWithdraw.innerText = balanceAfterWithdrawAmount - withdrawInputAmount;


    const withdrawInputAmount = getInputValue('withdraw-input');
    const CurrentBalance = getCurrentBalance();
    if (withdrawInputAmount > 0 && withdrawInputAmount < CurrentBalance) {
        updateTotalField('withdraw-total', withdrawInputAmount);
        updateBalance(withdrawInputAmount, false);
    }
    

    // withdrawInput.value = '';
});
