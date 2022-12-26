// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.


class Video {
  constructor (title, uploader, time){
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  
  watch() {
    console.log(`uploader ${this.uploader} watched all time of ${this.time} seconds of title ${this.title}!”`)
   }
 }

 let v = new Video ('cute cats', 'Willy Wonka', 180);
 v.watch();

 let v2 = new Video ('future of galaxy', 'lord', 200);
 v2.watch();

 
 let videos = [
   {title:'future of galaxy',
    uploader:'lord',
    time:200
   },
   {title:'the most epic movie',
    uploader:'the best director',
    time:20000
   },
   {title:'last week tonight',
    uploader:'john oliver',
    time:5000
   },
   {title:'all you need to know about dogs',
    uploader:'Nancy',
    time:7500
   }
  ];

  videos.forEach((e,i)=> {
    let vs= ['v1','v2','v3', 'v4'];
     vs[i]= new Video (e.title, e.uploader, e.time);
    console.log (vs[i]);
  })
