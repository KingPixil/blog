var elem = document.getElementById("post").textContent;

/* calculate read time */
var readTime = function( elem ) {
  var wpm = 175,                      // words per minute the average person reads
      count = elem.split(' ').length; // get word count from specified element
  return Math.ceil( count/wpm );      // return number of minutes
};
  
document.getElementById("readTime").innerHTML = readTime(elem);
twemoji.size = "16x16"
twemoji.parse(document.body);
