var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
}

console.log(phonebookDict['Alice']);
phonebookDict.Kareem = '938-489-1234';
delete phonebookDict.Alice;
phonebookDict.Bob = '968-345-2345';

var personName = 'Elizabeth';

console.log(phonebookDict[personName]);

for (var attr in phonebookDict) {
    var val = phonebookDict[attr];
    console.log(attr+": "+ val);
}

var word = 'binggybongyboogybongy';

function histogram(word) {
    var letter_histogram = {};
    for (var i in word) {
        var letter = i;
        if (letter in letter_histogram) {
            letter_histogram[letter] ++;
        }
        else {
            letter_histogram[letter] = 1;
        }
    } 
    return letter_histogram;
}