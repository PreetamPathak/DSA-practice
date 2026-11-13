
function square() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
function triangle() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

 
function invertedTriangle(){
  for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7-i+1; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
function numberTriangle() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String(j));
    }
    process.stdout.write("\n");
  }
}
function repeatedNumberTriangle() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String(i));
    }
    process.stdout.write("\n");
  }
}
function InvertedNumberTriangle() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j<=5-i+1 ; j++) {
      process.stdout.write(String(j));
    }
    process.stdout.write("\n");
  }
}
function alphabetTriangle() {
  for (let i = 1; i <= 5; i++) {
    for (let ch = 65; ch<= 65 + i -1 ; ch++) {
       process.stdout.write(String.fromCharCode(ch));
    }
    process.stdout.write("\n");
  }
}
function repeatedAlphabet() {
  for (let i = 1; i <= 5; i++) {
    for (let ch = 65; ch<= 65 + i -1 ; ch++) {
       process.stdout.write(String.fromCharCode(64+i));
    }
    process.stdout.write("\n");
  }
}
function continuousNumberTriangle() {
      num = 1
  for (let i = 1; i <= 5; i++) {
    for (let j =1; j<= i ; j++) {
     process.stdout.write(String(num));
     num++
    }
    process.stdout.write("\n");
  }
}
function binaryTriangle() {
    
  for (let i = 1; i <= 5; i++) {
    for (let j =1; j<= i ; j++) {
        if ((i+j)%2==0) {
          process.stdout.write("1");
        } else if((i+j)%2!==0){
          process.stdout.write("0");
        }
    }
    process.stdout.write("\n");
  }
}

binaryTriangle() 

