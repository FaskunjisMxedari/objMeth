/*
6)
შექმენით ფუნქცია, რომელიც მუშაობს სტუდენტების მონაცემებით.
ფუნქციამ უნდა გააკონტროლოს სტუდენტების ინფორმაცია, შეამოწმოს მათი შეფასებები და გამოიტანოს ქულები.
სტუდენტების მონაცემები:

name - სტუდენტის სახელი.

age - სტუდენტის ასაკი.

scores - მასივი, რომელიც შეიცავს სტუდენტის შეფასებებს (მინიმუმ 3 საგანში).

შექმენით ფუნქცია calculateAverage, რომელიც მიიღებს სტუდენტის scores მასივს და გაათვლის მათ შორის საშუალო შეფასებას.
მიღებულ შემთხვევაში, თუ სტუდენტის საშუალო შეფასება არის 90 და მეტი - ბეჭდავს "დაიმსახურა ჩვეული შეფასება" (A).

თუ არის 70 და მეტი - ბეჭდავს "დაიმსახურა კარგი შეფასება" (B).

თუ 50 და მეტი - ბეჭდავს "დაიმსახურა საშუალო შეფასება" (C).

სხვა შემთხვევაში "დაიმსახურა დაბალი შეფასება" (D).
*/
let sum = 0
let counter = 0

let nnname = prompt("რა გქვიათ?")
let aaaage = prompt("რამდენი წლის ბრძანდებით?")
let scoreNum = Number(prompt("რამდენი ქულისგან გინდათ გამოთვალოთ საშუალო?"))
let sscores = []

for (let i=0; i<scoreNum; i++){
  let scr = Number(prompt("რა არის თქვენი ქულა?"))
  sscores.push(scr)
}


function dataSaver(a, b, c){
  let data = {
    fName : a,
    age : b,
    scores : c
  }
  return data
}

let calculateAverage = a => {for(let key in a){
	
	if(key == "scores"){
  	while(counter<a[key].length){
  	 sum += a[key][counter]
  	  counter ++
  	  
  	}
  	}
  }
  let avg = sum/counter
  if(avg<=50 && avg>=0){
     console.log("დაიმსახურა დაბალი შეფასება (D)" + avg)
  }else if(50<avg && avg<=70){
    console.log('დაიმსახურა საშუალო შეფასება (C)' + avg)
  }else if(70<avg && avg<=90){
    console.log("(დაიმსახურა კარგი შეფასება (B)" + avg)
  }else if(90<avg && avg<=100){
    console.log("დაიმსახურა ჩვეული შეფასება (A)" + avg) 
  }else{
    console.log("ქულების გამოთვლაში შეცდომაა" + avg)
  }
  
}

calculateAverage(dataSaver(nnname,aaaage,sscores))


