var userName = prompt("what is your name ?")

alert("welcome to the best novels of 2020 website " + userName  )

var novelname= prompt(" what is the novle name?")

// while (novelname != "the vanishing" && novelname!= "children's bible") {

//   novelname = prompt(" pelase! try gain ?")

// }
var x = prompt("How many times do you want the images for your novle ? ")

for(var x = 1 ; x < 5 && x >0;x++){

if(novelname== "the vanishing"){
  document.write("<p>" +"</p>"+"<img src='https://images-na.ssl-images-amazon.com/images/I/51yL5wdoHfL._SX322_BO1,204,203,200_.jpg'>")
}
 else if(novelname== "children's bible")
{document.write("<p>"+ "enjoy your reading"+"</p>"+"  <img src='https://images-na.ssl-images-amazon.com/images/I/514z7WEeMHL._SY412_BO1,204,203,200_.jpg'>")

}

}