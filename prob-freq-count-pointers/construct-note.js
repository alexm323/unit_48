// add whatever parameters you deem necessary
function createFrequencyCounter(str){
    let frequencies = new Map();

    for (let val of str){
        let valCount = frequencies.get(val) || 0;
        frequencies.set(val,valCount + 1);
    }
    return frequencies;
}

function constructNote(message,letters) {
    if(message.length > letters.length) return false;
    const messageFreq = createFrequencyCounter(message);
    const lettersFreq = createFrequencyCounter(letters);
    console.log(messageFreq, lettersFreq)
    for(let messageLetter of messageFreq.keys()){
        // console.log(messageFreq.get(messageLetter))
        // console.log(lettersFreq.get(messageLetter))
        if(messageFreq.get(messageLetter) > lettersFreq.get(messageLetter)) return false;
    }
    return true
}
// inputs : a message, some letters
// outputs: true or false 

//return true if the message can be made from the letters input 
// return false if the message it can't 

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

// what I am envisioning is using the frequency counter method to get an object that has the number of times that each letter appears so we can verify that each of these values
// is equal to or less than the value for that letter key 
// module.exports = {constructNote,createFrequencyCounter}