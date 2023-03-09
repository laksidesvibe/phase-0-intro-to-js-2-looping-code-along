const names = ["Guadalupe","Ollie","Aki"];
const occasion = "suprise";

function writeCards(names,occasion) {
  let greeting =[]
  for (let i = 0; i < names.length; i++) {
    greeting.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    
  }

  return greeting
}

function countDown (){
    let counting = 10;
    while (counting > -1) {
      console.log(counting--);
    }
    
}

