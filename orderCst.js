// 5)შექმენი ობიექტი order (orderId, product, quantity, price).
// შექმენი ფუნქცია, რომელიც გამოთვლის ჯამურ ფასს შეკვეთაში (quantity * price).
// გამოიყენე for in ლუპი რომ გამოიტანო შეკვეთა და დაბეჭდო ჯამური ფასი.

let order ={}

function createOrder(Id, prd, qnt, prc){
	return {orderId : Id, 
            product : prd, 
            quantity : qnt, 
            price : prc
           }
  
}

order = createOrder("1", "xinkali", 123, 1.50)

function costCalc(o){
  let qnt
  let prc 
  let ordDer = ""
	for(key in o){
          	if(key == "quantity"){
        	 qnt = o[key]
        }
      	if(key== "price"){
        	 prc = o[key]
        }
      
    }
  let cost = prc*qnt
  	for(key in o){
      if(key == "orderId" || key == "product" || key == "quantity" || key == "price")
    	ordDer += " your " + key + " is: " + o[key]
    }
	console.log(ordDer, "your order cost " + cost) 
  
}

costCalc(order)