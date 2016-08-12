$(document).ready(function() {
console.log('reading.js is loaded');

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\///
// ------- Global Variable Declaration -------- \\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\\

function Resource (title, content, vocab) {
  this.title   = title;
  this.content = content;
  this.vocab  = vocab;
}

var resources = [];

var para = document.getElementById('readingPassage');
var vocabs = document.getElementsByClassName('vocab');



//\\//\\//\\//\\//\\//\\//\\//
// ------- Methods -------- \\
//\\//\\//\\//\\//\\//\\//\\//

//you want to JOIN every even array with the (one-element-long) odd array

var combining = function(splitArray) {
  for (var i = 0; i < splitArray.length; i+=2) {
    var stringWithClass = splitArray[i].join(splitArray[i+1]);  
    }
    return stringWithClass;
};

// this isn't working right now!
var suffix = function(word) {
  var suffixCounter = 0;
  var n = word.length + 1; 

    if ((word[n] !== " ") || (word[n] !== ",") || (word[n] !== ";") || (word[n] !== ".") || (word[n] !== "?") || (word[n] !== "!")) {
      n++;
      suffixCounter++;
    }
    //console.log(suffixCounter);
    return suffixCounter;
  };
// not woooorking 

var splitting = function(vocab, content) {
  var strArr = [];
  
  for (var i = 0; i < vocab.length; i++){
    if (content.indexOf(vocab[i]) !== -1) {
      strArr.push(content.split(vocab[i])); //adds everything but vocabs
      strArr.push(['<span class="vocab">' + vocab[i] + '</span>']); //adds vocabs [with style]
      //console.log(strArr);
      content = combining(strArr);
    }

  }
  return strArr;
};




// click vocab word
$('.vocab').click(function() {
  $('.vocabList').html('<p>hello</p>');
})







//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
// ------- Resource Declration -------- \\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
// Note: could move to top later, but it's 
// taking up a lot of real estate.

var pancakes = new Resource ("World's Largest Pancake Breakfast: A Local Legacy", 
  "<p>When you think of pancakes you might think of the kind served in America, hot with melted butter and maple syrup. But in reality, people around the world love pancakes. As a result, there are lots of different kinds. In America, pancakes are made with buttermilk and served for breakfast. In Russia, pancakes are called blinis, and are made from buckwheat flour and often served with caviar and sour cream. The Chinese use wheat flour and hot water to make pancakes in dozens of ways. In France, pancakes come in the form of a lacy crepe. In India, there's the Gujarati pancake. Crispy and wafer-thin, it comes stuffed with spicy potatoes and yogurt. Did you know there were so many ways to make and serve pancakes?</p><p>In 1986, an event that bills itself as the World's Largest Pancake Breakfast was revived for the 350th anniversary of Springfield, Massachusetts. The breakfast has been held every year since then. Hundreds of volunteers help with the event. In 1999, more than 71,233 servings of pancakes were served to more than 40,000 people. If you stacked up all those pancakes, they'd be more than 2 miles high!</p> ", 
  ["crispy", "flour", "maple", "melt", "pancake", "revive", "spicy", "stack", "stuffed", "syrup",])
//addResource(pancakes);

var pancakesString =  "<p>When you think of pancakes you might think of the kind served in America, hot with melted butter and maple syrup. But in reality, people around the world love pancakes. As a result, there are lots of different kinds. In America, pancakes are made with buttermilk and served for breakfast. In Russia, pancakes are called blinis, and are made from buckwheat flour and often served with caviar and sour cream. The Chinese use wheat flour and hot water to make pancakes in dozens of ways. In France, pancakes come in the form of a lacy crepe. In India, there's the Gujarati pancake. Crispy and wafer-thin, it comes stuffed with spicy potatoes and yogurt. Did you know there were so many ways to make and serve pancakes?</p><p>In 1986, an event that bills itself as the World's Largest Pancake Breakfast was revived for the 350th anniversary of Springfield, Massachusetts. The breakfast has been held every year since then. Hundreds of volunteers help with the event. In 1999, more than 71,233 servings of pancakes were served to more than 40,000 people. If you stacked up all those pancakes, they'd be more than 2 miles high!</p> ";
var pancakesVocab  = ["crispy", "flour", "maple", "melt", "pancake", "revive", "spicy", "stack", "stuffed", "syrup"];
var pancakesTranslations = ["クリスピー", "粉", "楓", "溶かす", "パンケーキ", "生き返る", "辛い", "山盛り", "???", "シロップ"]

// var sakura = new Resource ("The Cherry Trees of Washington, D.C.", "<p>When you think about the things that attract millions of visitors to Washington, D.C., each year, you probably think about the monuments, the White House, the Capitol, the Library of Congress. But have you ever thought about the living things that are also a major tourist attraction?</p><p>Many Americans and international tourists make a special visit to Washington, D.C., in the spring to see the blooming pink and white Japanese cherry trees that circle the Tidal Basin and the Jefferson Memorial. The trees were originally planted as a gift from the people of Tokyo, Japan, in 1912. In 1910, a previous donation of 2,000 cherry trees had to be destroyed after they were infested with insects. Each spring, the National Cherry Blossom Festival, a two-week-long celebration, attracts tens of thousands of visitors from around the world to see the magnificent trees in full bloom.</p><p>Have you ever seen these magnificent blossoms?</p>", ["attract", "donation", "bloom", "blossom", "infested", "insect", "magnificent", "monument", "previous", "tourist"]);
// addResource(sakura);

// var strawberry = new Resource ("California Strawberry Festival: A Local Legacy", "<p>Have you ever tried a strawberry pizza? If you went to Oxnard, the \"Strawberry Capital of California,\" in May, you could!</p><p>Oxnard is in Southern California and this part of the state takes its strawberries very seriously. At the two-day California Strawberry Festival you can sample strawberries prepared in all sorts of ways. In addition to traditional treats such as strawberry shortcake, strawberry jam, strawberry tarts and strawberries dipped in chocolate, there is strawberry pizza! This dessert pizza is topped with strawberries, sour cream, cream cheese and whipped cream on a sweet bread baked like a pizza. Strawberry kabobs dipped in powdered sugar are another delicacy. And drinks such as a strawberry smoothie can wash it all down.</p><p>Strawberries are big business in Oxnard. The annual strawberry revenues are $100 million from Oxnard's bountiful 6,600 berry acres. Twenty-four companies harvest and cool nearly 16 million trays of berries, which are shipped throughout North America as well as to Germany and Japan. The festival, which attracts more than 85,000 visitors, features three stages with musical entertainment, 335 arts and crafts exhibits, strolling musicians, clowns, artists, face-painting, contests, and a \"Strawberryland\" for children with puppets, magicians, musicians, and a petting zoo.</p>", ["cream", "dessert", "dip", "harvest", "jam", "magician", "puppet", "revenue", "sample", "treat"])
// addResource(strawberry);
var showParagraph = combining(splitting(pancakesVocab, pancakesString));
//console.log(showParagraph);
$('#readingPassage').append(showParagraph);


});
