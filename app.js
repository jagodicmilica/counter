var counter = 0;
var counter_span = document.getElementById("counter");
var minus_div = document.getElementById("minus");
var plus_div = document.getElementById("plus");
var reset_div = document.getElementById("reset");


function counting(action){
    switch (action){
        case "m":
            counter--;
            break;
        case "p":
            counter++;
            break;
        case "r":
            counter=0;
            break;
    }
    counter_span.innerHTML = counter;
}
function main(){
    minus_div.addEventListener('click', function(){counting("m")})
    plus_div.addEventListener('click', function(){counting("p")})
    reset_div.addEventListener('click', function(){counting("r")})

}
main();