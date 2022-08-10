const fibonacci = (n) => {
    if (n === 1 || n === 2) return 1;

    fibonacci.cache = fibonacci.cache ?? [];

    if (!fibonacci.cache[n]) {
        fibonacci.cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    }

    return fibonacci.cache[n];
};
