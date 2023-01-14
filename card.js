/* a credit card number validation using RegExp
 the test here is for a mastercard 
 explaining the pattern
 mastercards are knownn to start from the range of 51-55 and its 16 digits
 for some cases they also cover the range of 2221-2720, also 16 digits
 the first character caret 5 indicates that the number must start with a five 
 the range of 1-5 in square brackets indicates that the next number followed after 5 could be from 1-5
 the range of 0-9 indicates that the rest of the numbers could be anything from 0-9 and it must be 14 digits
 given that the mastercard contains 16 digits: the first two digits as explained from the caret 5 and the first range of number from 1-5
then the rest that contains 14 digits ranging from 0-9.
*/

const masterCard = /^5[1-5][0-9]{14}$/;
console.log(masterCard.test(5399834475195111))