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

function invertedTriangle() {
  for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7 - i + 1; j++) {
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
    for (let j = 1; j <= 5 - i + 1; j++) {
      process.stdout.write(String(j));
    }
    process.stdout.write("\n");
  }
}
function alphabetTriangle() {
  for (let i = 1; i <= 5; i++) {
    for (let ch = 65; ch <= 65 + i - 1; ch++) {
      process.stdout.write(String.fromCharCode(ch));
    }
    process.stdout.write("\n");
  }
}
function repeatedAlphabet() {
  for (let i = 1; i <= 5; i++) {
    for (let ch = 65; ch <= 65 + i - 1; ch++) {
      process.stdout.write(String.fromCharCode(64 + i));
    }
    process.stdout.write("\n");
  }
}
function continuousNumberTriangle() {
  num = 1;
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String(num));
      num++;
    }
    process.stdout.write("\n");
  }
}
function binaryTriangle() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 == 0) {
        process.stdout.write("1");
      } else if ((i + j) % 2 !== 0) {
        process.stdout.write("0");
      }
    }
    process.stdout.write("\n");
  }
}
function rightAlignedTriangle() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
      process.stdout.write(" ");
    }
    for (let k = 1; k <= i; k++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
function invertedPyramid() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(" ");
    }
    for (let k = 1; k <= 10 - 2 * i + 1; k++) {
      process.stdout.write("*");
    }
    for (let l = 1; l <= i; l++) {
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}

function hollowSquare() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      if (i == 1 || j == 1 || j == 5 || i == 5) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
}
function hollowRightTriangle() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      if (i == 1 || j == 1 || i== 2 || j == i || i == 5) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
}

function diamondPattern() {
  let n = 5;
   for (let i = 0; i <= 2*n-1; i++) {
     if ( i<= n){
      for (let j = 0; j < n-i ; j++) {
         process.stdout.write(" ");
      }
      for (let k = 0; k < 2*i - 1 ; k++) {
         process.stdout.write("*");
      }
      for (let j = 0; j < n-i ; j++) {
         process.stdout.write(" ");
      }
     }else{
      for (let j = 0; j < i-n ; j++) {
         process.stdout.write(" ");
      }
      for (let j = 0; j < 2*n -i + 2*n - (i +1); j++) {
         process.stdout.write("*");
      }
      for (let j = 0; j < i-n ; j++) {
         process.stdout.write(" ");
      }
     }
     process.stdout.write("\n");
   }
}



 function numberPyramid(){
  let n = 5
   for (let i = 1; i <= n ; i++) {
     for (let j = 1; j <= n-i; j++) {
       process.stdout.write(" ");
     }
     for (let k = 1; k <= i; k++) {
      process.stdout.write(String(k));
      
     }
     for (let l = i-1; l>= 1; l--) {
       process.stdout.write(String(l));
      
     }
    process.stdout.write("\n");

   }
 }
 
  function butterfly(){
    let n = 5
    for (let i = 1; i <= 2*n-1; i++) {
     if(i<=4){
      for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
      }
      for (let j = 1; j <= 2*n-2*i; j++) {
        process.stdout.write(" ");
      }
      for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
      }
     } else if(i==5 ){
      for(let k = 1; k<=2*n; k++){
        process.stdout.write("*");
      }
     }else{
      for (let l = 1; l <= 2*n-i ; l++) {
        process.stdout.write("*");
        
      }
      for (let l = 1; l <= i- (2*n-i) ; l++) {
        process.stdout.write(" ");
        
      }
      for (let l = 1; l <=2*n-i ; l++) {
        process.stdout.write("*");
        
      }
     }
     process.stdout.write("\n");
    }
    
  }
  function hollowDiamond(){
    let n = 5
    for (let i = 1; i <= 2*n-1; i++) {
     if(i<=4){
      for (let j = 1; j <= n-i; j++) {
        process.stdout.write(" ");
      }
      for (let j = 1; j <= 2*i-1; j++) {
        if(i==1||j==1 ||j==2*i-1){
          process.stdout.write("*");
        }else{
        process.stdout.write(" ")
      } 
      }
      for (let j = 1; j <= n-i; j++) {
        process.stdout.write(" ");
      }
     } else if(i==5 ){
      for(let k = 1; k<=2*n-1; k++){
        if(k==1 ||k==2*n-1){
          process.stdout.write("*");
        }else{
          process.stdout.write(" ");
        }
        
      }
     }else{
      for (let l = 1; l <=i-n ; l++) {
        process.stdout.write(" ");
        
      }
      for (let l = 1; l <=(2*n-i)+(2*n -(i+1)) ; l++) {
        if(i==i-n||l==1|| l==(2*n-i)+(2*n -(i+1))){
          process.stdout.write("*");
        }else{
            process.stdout.write(" ");
        }
        
        
      }
      for (let l = 1; l <=i-n ; l++) {
        process.stdout.write(" ");
        
      }
     }
     process.stdout.write("\n");
    }

  }
  
hollowDiamond()
