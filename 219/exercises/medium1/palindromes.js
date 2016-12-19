// Palindromic Substrings

// Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as it does backwards. Arrange the return values in the same sequence as the substrings appear in the string. Include duplicate palindromes multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purposes of this exercise, you should consider all characters and pay attention to case; that is, "AbcbA" is a palindrome, but neither "Abcba" nor "Abc-bA" are. In addition, assume that single characters are not palindromes.

// Examples:

// palindromes('abcd');  // []
// palindromes('madam'); // ['madam', 'ada']
// palindromes('hello-madam-did-madam-goodbye');
// // result
// [ 'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
//   'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
//   '-madam-', 'madam', 'ada', 'oo' ]

// palindromes('knitting cassettes');
// // result
// [ 'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt' ]










































// Hide Solution & Discussion
// Solution

// function palindromes(string) {
//   return substrings(string).filter(function(word) {
//     return isPalindrome(word);
//   });
// }

// function isPalindrome(word) {
//   return word.length > 1 && word === word.split('').reverse().join('');
// }
// Discussion

// Again, this problem is easier with the help of the substrings function written earlier. With the substrings function the solution just filters out the resulting words that aren't palindromes with the help of the isPalindrome function.

// This series of exercises is a good example of breaking down a problem into manageable chunks. Go over these 3 with that perspective.