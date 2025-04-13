/*
7)
შექმენით ფუნქცია, რომელიც აკონტროლებს პროდუქტების სიას და მათ ფასებს
პროგრამა უნდა შეამოწმოს, თუ რომელი პროდუქტის ფასი უნდა განახლდეს, 
და შემდეგ გამოიტანოს განახლებული პროდუქტის ინფორმაცია.

პროდუქტების სია: შექმენით ობიექტების მასივი, სადაც თითოეული პ
როდუქტი იქნება ობიექტი, რომელიც შეიცავს შემდეგ თვისებებს:

name - პროდუქტის სახელი.

category - პროდუქტის კატეგორია (მაგ: "electronics", "clothing", "groceries").

price - პროდუქტის ფასი.

isAvailable - ცვლადი, რომელიც განსაზღვრავს, არის თუ არა პროდუქტი 
ხელმისაწვდომი (true/false).

ფუნქცია: შექმენით ფუნქცია updatePrice, რომელიც მიიღებს პროდუქტის 
ობიექტს და ახალ ფასს. 
თუ პროდუქტი ხელმისაწვდომია (isAvailable: true), ფუნქცია უნდა
განახლდეს და ახალი ფასი დააბრუნოს. 
თუ პროდუქტი არ არის ხელმისაწვდომი, დაბრუნდება შეტყობინება 
"პროდუქტი არ არის ხელმისაწვდომი".

გადაუყევით პროდუქტების სიას და პროდუქტის ფასი რომელიც 1000+ 
ია გააკეთეთ 10% ფასდაკლება და გადაეცის updatePrice ფუნქციას.
გამოიტანეთ სია განახლებული ფასებით.
*/

/*
ამის პირობის გაგება გამიჭირდა ცოტა, ასე რომ გამეწელა გაკეთება და
სანამ ვიდეოს არ ვუყურე ვერ გავაკეთე
*/

const goodsArr = [
    {
            productName: "vashli",
          categoty: "groceries",
          price: 1 ,
          isAvailable: true
    },
    {
            productName: "laptop",
          categoty: "electronics",
          price: 1300 ,
          isAvailable: false
    },
    {
            productName: "electric guitar",
          categoty: "musical instruments",
          price: 7889 ,
          isAvailable: true
    },
    {
            productName: "republic",
          categoty: "plato",
          price: 25 ,
          isAvailable: true
    }
  ]
  function updPrice (prod, newPr){
      if(prod.isAvailable){
          prod.price = newPr
      } else {
          console.log(prod.productName + " not available")
      }
  
  }
  function checkList(arr){
      for(let i of arr){
          if(i.price >= 1000){
              updPrice(i, i.price * 0.9)
          }
      }
      console.log(goodsArr)
  }
  
  checkList(goodsArr)