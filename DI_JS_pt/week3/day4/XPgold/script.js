// ex 1
let lang = prompt(`What is your language?`);

lang = lang.toLowerCase();

switch (lang) {
    case "french" :
        console.log(`Bonjour!`)
        break;
    case "english":
        console.log(`Hello!`)
        break;
    case "hebrew":
        console.log(`Shalom!`)
        break;  

    default:
        console.log(`01110011 01101111 01110010 01110010 01111001`)


}

// ex 2

let grade = Number(prompt(`What is your grade?`));

switch (true) {
    case (grade > 90) :
        console.log(`A`)
        break;
    case (grade > 80 && grade <= 90):
        console.log(`B`)
        break;
    case (grade >= 70 && grade <= 80):
        console.log(`C`)
        break;  

    default:
        console.log(`D`)


}

// ex 3

let verb = prompt(`Type in a verb:`);

switch (true) {
    case (verb.length >= 3 && verb.substr(-3)!= "ing") :
        console.log(`${verb}ing`)
        break;
    case (verb.length >= 3 && verb.substr(-3) == "ing") :
        console.log(`${verb}ly`)
        break;
    default:
        console.log(verb)

}

