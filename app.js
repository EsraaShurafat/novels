var userName = prompt("what is the your name ?")

alert("welcome to the best novels of 2020 website " + userName  )

var novelname = prompt("what is the novel name ?")

while (novelname != "the vanishing" && novelname!= "children's bible") {

  novelname = prompt(" pelase! try gain ?")

}


if(novelname == "the vanishing"){
  document.write("<p>"+ "enjoy your reading"+"</p>"+"<a href='https://www.amazon.co.uk/Vanishing-Half-bestselling-author-Mothers/dp/0349701466'>The Vanishing Half</a>")
}
 else if(novelname == "children's bible")
{document.write("<p>"+ "enjoy your reading"+"</p>"+"<a href='https://www.amazon.com/Childrens-Bible-Lydia-Millet/dp/1690592435'>A Children's Bible </a")

}
else{
  alert("the novel doesnt here and thank for your visit.")
}