// // add whatever parameters you deem necessary
// function createFrequencyCounter(str){
//     let frequencies = new Map();

//     for (let val of str){
//         let valCount = frequencies.get(val) || 0;
//         frequencies.set(val,valCount + 1);
//     }
//     return frequencies;
// }

// function isSubsequence(string,subString) {
//     const strMap1 = createFrequencyCounter(string);
//     const strMap2 = createFrequencyCounter(subString);
//     console.log(strMap1,strMap2)

// }

// the order of insertion is important 
// could use a map to check the frequency and the order of insertion to make sure that the second param has the available capacity 

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1, str2) {
    let str1Idx = 0;
    let str2Idx = 0;
    if (!str1) return true;
    while (str2Idx < str2.length) {
      if (str2[str2Idx] === str1[str1Idx]) {
        str1Idx += 1;
      }
      if (str1Idx === str1.length) return true;
      str2Idx += 1;
    }
    return false;
  }
  