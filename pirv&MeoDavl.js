const student ={
	fName :"aleksi",
  	lName : "Izoria",
  	age : 19 ,
  	city : "zugdidi" , 
  	occupation : "proffesional jobless" ,
  	hobbies : "music",
  	gpa: 3.2 
}


for (let key in student){
	if(key === "fName" || key === "lName" || key === "age" || key === "gpa"){
    	console.log("პირველი დავალება: ჩემი " + key + " არის " + student[key])
    }
}


 function updateAge(a){
 	for(let key in student){
    	if(key === "age"){
        	student[key] = a
        }
      console.log("მეორე დავალება: ჩემი " + key + " არის " + student[key])
    }
 }

updateAge(24);