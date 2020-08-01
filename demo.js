function sum () {
	a = parseInt(document.getElementById('input1').value)
  b =  parseInt(document.getElementById('input2').value)
  c = a + b;
  console.log('sum is ' + c)
  evenOrOdd(c)
  document.getElementById('sum').innerHTML = c
}

document.getElementById('sumBtn').addEventListener("click", sum)

evenOrOdd(5)

function evenOrOdd (number) {
 
  if (number) {
  	if(number%2 == 0){
  		console.log(number  +" is even number.")
  	}else{
 		 console.log(number   + " is odd number ")
  	}
  }
}

