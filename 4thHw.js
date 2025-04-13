// 4)შექმენი ფუნქცია, რომელიც მიიღებს ობიექტს და გამოიყენებს for in ლუპს თითოეული თვისების გამოტანაში.
// გამოსაქვეყნებელი ობიექტი იქნება ნამუშევარი კლასზე: { name: "ლუკა", subject: "mathematics", score: 85 }.

const klasi = { name: "ლუკა", subject: "mathematics", score: 85 }

function gamomtani(o){
	for(key in o){
    	console.log(o[key])
    }
}

gamomtani(klasi)
