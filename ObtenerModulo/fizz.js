for (let i = 1; i <= 100; i++) {
    if (esDivisible(i, 3)) {
        document.write("fizz ")
        divisible = true;
    }
    if (esDivisible(i, 5)) {
        document.write("buzz ")
        divisible = true
    } if (!esDivisible(i, 3) && !esDivisible(i, 5)) {
        document.write(i)
    }
    document.write("<br>")
}

function esDivisible(num, divisor) {
    if (num % divisor == 0)
        return true
    else
        return false
}