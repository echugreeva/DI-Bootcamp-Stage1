let sentence = "Not all Marvel movies are bad.";
let wordNot = sentence.indexOf("Not");
let wordBad = sentence.indexOf("bad");

if (wordNot < wordBad) {
    let sentence1 = sentence.replace("Not", "");
    
    let sentence2 = sentence1.replace("bad", "good");
    console.log(sentence2);

} else {
    console.log(sentence);
} 
