//2a

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log("O");
  } else {
    console.log("X");
  }
}

//2b or not 2b
let nolla = "";
for (let i = 0; i < 20; i++) {
  nolla += "O";

  let yo = Math.round(Math.random() * 5);

  for (let j = 0; j < yo; j++) {
    nolla += " ";
  }
}

console.log(nolla);

//2c

 let stad = ["kiruna", "uppsala", "malmö", "gothenburg", "stockholm"];
/*let storstad = stad.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
for (let i = 0; i < storstad.length; i++) {
    console.log(storstad[i]);
} */                                             

    for (let i = 0; i < stad.length; i++) {
        let stadstad = stad[i]
        for (let j = 0; j < stadstad.length; j++) {
          console.log(stadstad[i]);
        
    }

 

}
