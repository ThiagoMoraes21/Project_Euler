function largestPolindromeProduct(n){
    let largest = 0;
    let digits = '';

    // check how many digits cases to use
    for(let i = 0; i < n; i++) {
        digits += '9';
    }

    // converts the string into a number
    digits = parseInt(digits);

    // loop through all the products
    for(let i = 1; i <= digits; i++) {
        for(let j = 1; j <= digits; j++) {
            let product = i * j;

            if(digits > 99) {
                for(let k = 1; k <= digits; k++) {
                    product = i * j * k;
                    if(product == parseInt(product.toString().split('').reverse().join(''))) {
                        // get the largest polindrome
                        product > largest ? largest = product : largest;
                    }
                }
            } else {
                // check if the number is a polindrome
                if(product == parseInt(product.toString().split('').reverse().join(''))) {
                    // get the largest polindrome
                    product > largest ? largest = product : largest;
                }
            }
        }
    }

    console.log(largest);
    return largest;
}

largestPolindromeProduct(2); // should return 9009
 // largestPolindromeProduct(3); // should return 906609