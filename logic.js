function table(n){
  console.log("Table of",n,"is : ")
  for(let i=1 ; i<=10 ; i++){
    console.log(n*i)
  }
}

function evenodd(n){
  if(n%2 == 0){
    console.log("Number is Even")
  }
  else{
    console.log("Number is Odd")
  }
}

module.exports = {table , evenodd}