let diameter = 0
const pi = 3.14
let circumference = 0
area = 0

document.getElementById('calculate').addEventListener('click', formula)

function formula () {
  diameter = document.getElementById('input1').value

  diameter = parseInt(diameter)

  area = pi * (diameter / 2) * (diameter / 2)

  alert(area)
}

document.getElementById('calculate1').addEventListener('click', formula1)

function formula1 () {
  diameter = document.getElementById('input1').value

  diameter = parseInt(diameter)

  circumference = 2 * pi * (diameter / 2)

  alert(circumference)
}