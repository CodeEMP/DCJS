function madlib (name, subject) {
    return name + "'s favorite subject is " + subject;
}

function tipamount (bill, service) {
    var tip;
    if (service == "good") {
        tip = bill * .2;
    }
    else if (service == "fair") {
        tip = bill *.15;
    }
    else {
        tip = bill * .1;
    }
    return tip;
}

function totalamount (bill, service){
    var total = bill + tipamount(bill, service);
    return total;
}

function printnumberfor (start, end){
    for (var i = start, i <= end, i++){
        console.log(i);
    }
}

function printnumberswhile (start, end){
    var i = start;
    while (i <= end){
        console.log(i);
        i += 1;
    }
}

function printasquare (size){
    for (var i = size, i <= size, i++){
        console.log('*' * size);
    }
}