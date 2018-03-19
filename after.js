//default value assignment in es6

function foo(x = 100) {
  console.log(x)
}

foo()
foo(50)
foo(0)
foo('hello')

function yes() {
  console.log('yes is called')
}

//lazy expression is called once
function stuff(x = yes()) {

}
stuff()
