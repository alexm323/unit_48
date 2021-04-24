function createAccount(pin, amount=0) {
    let accountPin = pin;
    let accountBalance = amount;
    accountDetails = {
        checkBalance: function(accessPin){
            if(accessPin === accountPin) {
                return `$${accountBalance}`;
            }else{
                return `Invalid PIN.`
            }

        },
        deposit: function(accessPin,depositAmount){
            if(accessPin === accountPin) {
                accountBalance = accountBalance + depositAmount;
                return `Succesfully deposited $${depositAmount}. Current balance: $${accountBalance}.`;
            }else{
                return `Invalid PIN.`
            }

        },
        withdraw: function(accessPin,withdrawalAmount){
            if(accessPin === accountPin) {
                if(withdrawalAmount < accountBalance){
                    accountBalance = accountBalance - withdrawalAmount;
                    return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${accountBalance}.`;
                }else{
                    return "Withdrawal amount exceeds account balance. Transaction cancelled."
                }
                
            }else{
                return `Invalid PIN.`
            }

        },
        changePin: function(accessPin,newPin){
            if(accessPin === accountPin) {
                accountPin = newPin;
                console.log("access pin:",accessPin)
                return "PIN successfully changed!";
            }else{
                return `Invalid PIN.`
            }

        }
    }


    return accountDetails;
}

module.exports = { createAccount };
