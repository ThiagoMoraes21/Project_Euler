// return the largest prime number
// the prime factors of 13195 are 5, 7, 13 and 29

function largestPrimeFactor(number) {
    let prime = 2, max = 1;
    while(prime <= number) {
        if(number % prime == 0) {
            max = prime;
            number = number / prime;
        } else {
            prime++;
        }
    }
    return max;
}

console.log(largestPrimeFactor(13195)); // should return 29