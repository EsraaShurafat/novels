
var userName = prompt("what is your name ?")

alert("welcome to the best novels of 2020 website " + userName  )

function favNovle(){
  var novelname= prompt(" what is the novle name?(the vanishing or children's bible)")

 while (novelname != "the vanishing" && novelname!= "children's bible") {

  novelname = prompt(" pelase! try gain ?")
 }
 
}
favNovle();



function rateUs(){
 var starnum = prompt("How many stars do you want for your novle ? ")

for(var x = 1 ; x <= starnum && x >0;x++){

  document.write("<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/274/star_2b50.png'>")

}
}

rateUs();

