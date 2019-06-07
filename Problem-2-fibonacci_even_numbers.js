function fibo(n){
    let fib = [0, 1];
	let total = 0;
	for(let i = 0; i <= n; i++){
		if(fib[i] == 0){
            fib[i + 2] = fib[i] + fib[i + 1];
		} else {
            fib[i + 2] = fib[i + 1] + fib[i];
            if(fib[i + 2] % 2 == 0) {
                console.log('Even number: ' + fib[i + 2]); 
                total += fib[i + 2];
            }
        }
    }
    console.log('Total: ' + total);
    console.log('Fibonacci sequence: ' + fib);
    return total;
}

fibo(20);

