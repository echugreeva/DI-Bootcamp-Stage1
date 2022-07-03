// Ex 1

let yOfB1 = Number(prompt(`type in a year`));
let yOfB2 = Number(prompt(`type in a year`));

let today = new Date();

let thisYear = today.getFullYear();
console.log(thisYear);

//  determing the older person
if(yOfB1>yOfB2) {
    console.log(`${yOfB1} is the year of birth on the younger person and ${yOfB2} is the year of birth of the older `)
    //find age
    ageYoung = thisYear - yOfB1;
    ageOld = thisYear - yOfB2;

    // year when young is half of age of old

    let answerYear = (ageYoung+yOfB1)-(ageOld/2+yOfB2)-thisYear;

    (yOfB1)+(thisYear-yOfB2)*2;

    

    console.log(`${answerYear} is the year`);

} else {
    console.log(`${yOfB2} is the age on the younger person and ${yOfB1} is the year of birth of the older`)
    ageYoung = thisYear - yOfB2;
    ageOld = thisYear - yOfB1;

    // year when young is half of age of old

    let answerYear = ageYoung + yOfB2 - ageOld/2 - yOfB1;
    console.log(`${answerYear} is the year`);
}



//