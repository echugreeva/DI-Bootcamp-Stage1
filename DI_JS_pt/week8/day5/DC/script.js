
function  formatDate(date) {
    console.log(date);
    let zero='0';
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    
    if (month.length<2) {
        month = zero.concat(month)
    }
    let day = date.getDay().toString();
    if (day.length<2) {
        day = zero.concat(day);
    }
    let hours = date.getHours().toString();
    if (hours.length<2) {
        hours = zero.concat(hours);
    }
    let min = date.getMinutes().toString();
    if (min.length<2) {
        min = zero.concat(min);
    }
    let sec = date.getSeconds().toString();
    if (sec.length<2) {
        sec = zero.concat(sec);
    }

    console.log(`${year}${month}${day}${hours}${min}${sec}`);
    
    
}

formatDate(new Date (2020, 6, 4, 8, 0, 0));
formatDate(new Date(2019, 11, 31, 23, 59, 59));
formatDate(new Date(2020, 6, 4));


