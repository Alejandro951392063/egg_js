function palindrome(text) {
    const reversedText = text.split('').reverse().join('');
    return text === reversedText;
}

console.log(palindrome("hello")) 
console.log(palindrome("hannah")) 

console.log(palindrome("anilina")) 
console.log(palindrome("severlasalreves")) 