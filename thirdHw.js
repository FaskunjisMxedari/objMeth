// 3) შექმენი ორი ობიექტი: address (street, city, country) და user (name, email).
// მოახდინე ობიექტების გაერთინება ისე, რომ user ობიექტში იყოს address ობიექტი.
// გამოიყენე for in ლუპი იმისთვის, რომ გამოიტანო user ობიექტი და მისი ყველა თვისება, მათ შორის address.

// თუ დავალება არასწორია მხოლოდ იმიტომ რომ პირობა ვერ გავიაზრე სწორად.



const address = {
    street: "random",
    city: "zugdidi",
    country: "georgia"
  }
  
  const user = {
      name: "aleksi",
        email: "someone@something.com"
    
  }
  
  user.address = address
  /*
  console.log(user)
  */
  for(key in user){
      console.log(user[key])
  }
  