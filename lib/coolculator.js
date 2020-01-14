class Coolculator {
  add(a, b) {
    return a + b
  }
  multiply(a, b){
    return a*b
  }
  subtract(a , b){
    return a-b
}
  divide(a,b){
    return a/b 
  }
  highest(a, b){
    if (a > b) {
      return a
    }else {
      return b
    }
  }
  lowest(a, b){
    if (a < b) {
      return a
    }else {
      return b
    }
  }
  double(a){
    return a*2
  }
  

  square(a){
    return a*a
  }

  raise(a, b){
    var c = a
    for (var i = 1; i<b; i++) {
      c = c * a
    }
    return c
  }

  isNegative(a){
    if (a<0){
      return true
    }
    else{
      return false
    }
  }


  isPositive(a){
    if (a>0){
      return true
       }
    else {
      return false
   }
  }


  isCool(a){
    var b = a.toString()
    var c = (b.length - 1)

    if (b[0]==b[c]){
      return  true
    }

    else{
      return false
    }
  }
  sum(a){
    var b = a.length
    var c = 0
    for (var i = 0; i < b; i++){
      c = c + a[i] 
    }
    return c
  }

  multiplyArray(a){
    var b = a.length
    var c = 1
    for (var i = 0; i < b; i++){
      c = c * a[i] 
    }
    return c
  }
  mean(a){
    var b = a.length
    var c = 0.0
    for (var i = 0; i < b; i++){
      c = c + a[i] 
    }
    var mean = c/b
    return mean 
  }
  factorial(a){
    var b = a 
    var c = a
    for (var i=1; i<b; i++){
      c = c * (a-1)
      a--
    }
    return c

  }


  random(a){
     
    var b =Math.floor((Math.random() * a) + 0)
    console.log(b)
    return b
  }
}

module.exports = Coolculator
