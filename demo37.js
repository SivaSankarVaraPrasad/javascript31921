let n = parseInt(window.prompt("Enter Input",0))
let temp = n
let sum = 0 
let digit = 0 
while( n != 0){
    digit = n%10
    sum = sum + Math.pow(digit,3)// pow has two parameters digit value power value
    n = parseInt(n/10)
}
if (sum == temp){
    document.writeln(`given number  ${temp} amstrong number`) 
}
else{
    document.writeln(`given number  not ${temp} amstrong number`) 
}