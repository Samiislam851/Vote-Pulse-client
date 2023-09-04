//vowel and conso
// let a = 'this is a string'
// let vowel = 0;
// let consonant = 0;
// for (let i = 0; i < a.length; i++) {
//     if (a[i] === 'a' || a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u') {
//         vowel++;
//     }
//     else if (a[i] == ' ') {  }
//     else consonant++;
// }
// console.log(vowel, consonant);

// palindrome 
let b = '22222222222222222222'

let c = [...b]
let d = [...c].reverse()
for (let i = 0; i < d.length; i++) {
    if (d[i] === c[i]) {
        if (i == d.length/2) console.log('is palindrome');
    }
    else {
        console.log('not palindrome');
        break;
    }
}
