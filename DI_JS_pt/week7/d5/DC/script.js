let ifAnagram = (str1, str2) => {
  str1 = str1.toLowerCase().trim();
  str2 = str2.toLowerCase().trim();
  strAr= str1.split("");
  for (let i=0; i < strAr.length; i++) {
      if (str2.indexOf(strAr[i])=== -1) {
        return console.log("not anagram");
      }
      else {
        str2 = str2.replace(strAr[i],'');
        return console.log("anagram");
      }
  }
}


ifAnagram("Astronomer", "Moon starer");
ifAnagram("Hello worlds", "I'm a martian");
