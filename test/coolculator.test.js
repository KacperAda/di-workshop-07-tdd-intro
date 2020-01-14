var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

function range(a, b, c){
  for (var i = a; i<=b; i++){
    if (i == c){
      return c
    }
  }
  if (i==b){
  return "fail"
}
}

describe('Coolculator', function() {
  mm = new Coolculator()

  it('should add', function() {
    result = mm.add(2, 3)
    expect(result).to.equal(5)
  })

   it('should multiply', function() {
     result = mm.multiply(2, 3)
     expect(result).to.equal(6)
   })

   it('should subtract', function() {
     result = mm.subtract(3, 2)
     expect(result).to.equal(1)
   })
   it('should divide', function() {
     result = mm.divide(10, 2)
     expect(result).to.equal(5)
   })

   it('Highest number', function(){
     result = mm.highest(10, 5)
     expect(result).to.equal(10)
   }) 

   it('Lowest number', function(){
    result = mm.lowest(10, 5)
    expect(result).to.equal(5)
  })
  
  it('double number', function(){
    result = mm.double(4)
    expect(result).to.equal(8)
  })
  it('squares the number', function() {
    result = mm.square(5)
    expect(result).to.equal(25)
  })
  it('first number to the power of second', function() {
    result = mm.raise(2, 4)
    expect(result).to.equal(16)
  })
  it('returns true if negatvie number', function() {
    result = mm.isNegative(-4)
    expect(result).to.equal(true)
  })
  it('returns true if positive number', function() {
    result = mm.isPositive(-6)
    expect(result).to.equal(false)
  })
  it('if is cool true', function() {
    result = mm.isCool(14321)
    expect(result).to.equal(true)
  })
  it('takes array and adds them', function() {
    result = mm.sum([5,3,7,4])
    expect(result).to.equal(19)
  })
  it('takes array and multiplies them', function() {
    result = mm.multiplyArray([5,3,7,4])
    expect(result).to.equal(420)
  })
  it('takes array and gives mean', function() {
    result = mm.mean([5,3,7,4])
    expect(result).to.equal(4.75)
  })
  it('Takes number and calculates factorial', function() {
    result = mm.factorial(5)
    expect (result).to.equal(120)
  })
  it('gives random number between 0 and input', function() {
    result = mm.random(10)
    expect (result).to.equal(range(0, 10, result))
  })


})
