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
    var i;
    for (i = size, i <= size, i++){
        console.log('*' * size);
    }
}

function printabox (width, height){
    console.log('*' * width);
    for (var i = height, i <= height - 2, i++){
        console.log('*' + ' ' * (width -2) + '*');
    }
    console.log('*' * width);
}

function printabanner (words){
    console.log("*" * (words.length + 4));
    console.log("* " + words + " *");
    console.log("*" * (words.length + 4));
}

function leetspeak(words){
    words = words.toUpperCase()
    words = words.replace('A', 4)
    words = words.replace('E', 3)
    words = words.replace('T', 7)
    words = words.replace('G', 6)
    words = words.replace('L', 1)
    words = words.replace('S', 5)
    words = words.replace('O', 0)
    console.log(words);
}

function longvowels(word){
    word = word.replace('ee', 'eeeee')
    word = word.replace('oo', 'ooooo')
    console.log(word)
}

function positiveNumbers(arr){
    function isPositive(n) {
        return n > 0;
    }
    newarr = arr.filter(isPositive);
    console.log(newarr);
}

function cipher(text) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var result = '';
  for (var i = 0; i < text.length; i++) {
    var chr = text[i];
    if (chr = ' '){
        result += ' ';
    }
    else {
        var idx = alphabet.indexOf(chr.toUpperCase());
        var newIdx = idx + 13;
        if (newIdx >= alphabet.length) {
            newIdx -= 26;
        }
        result += alphabet[newIdx];
    }
  }
  return result;
}

function decipher(text) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var result = '';
  for (var i = 0; i < text.length; i++) {
    var chr = text[i];
    var idx = alphabet.indexOf(chr.toUpperCase());
    var newIdx = idx - 13;
    if (newIdx <= 0) {
      newIdx += 26;
    }
    result += alphabet[newIdx];
  }
  return result;
}