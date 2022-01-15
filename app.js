var n = prompt("Enter the number");
n = parseInt(n);
var string = "";
for(var i=0;i<n+1;i++){
    for(var j =0;j<i;j++){
        string+="*";

    }
    string+="<br>";
}
const print = document.write(string);
console.log(print);
