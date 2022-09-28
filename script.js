function round() {
  let value1_round = document.getElementById('value1_round').value
  let round_result = Math.round(value1_round)
  document.getElementById('round_result').value = round_result
}

function pow(e) {
  let value1_pow = document.getElementById('value1_pow').value
  let value2_pow = document.getElementById('value2_pow').value
  let pow_result = Math.pow(value1_pow, value2_pow)
  document.getElementById('pow_result').value = pow_result
}

function circle() {
  let value_radius = document.getElementById('value_radius').value
  let circumference_result = 2 * Math.PI * value_radius
  let area_result = Math.PI * Math.pow(value_radius, 2)
  document.getElementById('circumference_result').value = circumference_result
  document.getElementById('area_result').value = area_result
}

function cube() {
  let a_cube = document.getElementById('a_cube').value
  let base_area_result = Math.pow(a_cube, 2)
  let total_area_result = base_area_result * 6
  let volume_result = Math.pow(a_cube, 3)
  document.getElementById('base_area_result').value = base_area_result
  document.getElementById('total_area_result').value = total_area_result
  document.getElementById('volume_result').value = volume_result
}

// Mostrar Displays
function OpenFracionado() {
  document.getElementById('OpenFracionado').style.display = 'block';
  document.getElementById('OpenPotentiation').style.display = 'none';
  document.getElementById('OpenCircle').style.display = 'none';
  document.getElementById('OpenCube').style.display = 'none';
  document.getElementById('btn-1').style.backgroundColor = '#4CAF50';
  document.getElementById('btn-2').style.backgroundColor = '#eff6ef';
  document.getElementById('btn-3').style.backgroundColor = '#eff6ef';
  document.getElementById('btn-4').style.backgroundColor = '#eff6ef';

}

function OpenPotentiation() {
  document.getElementById('OpenPotentiation').style.display = 'block';
  document.getElementById('OpenCircle').style.display = 'none';
  document.getElementById('OpenCube').style.display = 'none';
  document.getElementById('OpenFracionado').style.display = 'none';
  document.getElementById('btn-2').style.backgroundColor = '#4CAF50';
  document.getElementById('btn-1').style.backgroundColor = '#eff6ef';
  document.getElementById('btn-3').style.backgroundColor = '#eff6ef';
  document.getElementById('btn-4').style.backgroundColor = '#eff6ef';
}

function OpenCircle() {
  document.getElementById('OpenCircle').style.display = 'block';
  document.getElementById('OpenPotentiation').style.display = 'none';
  document.getElementById('OpenCube').style.display = 'none';
  document.getElementById('OpenFracionado').style.display = 'none';
  document.getElementById('btn-3').style.backgroundColor = '#4CAF50';
  document.getElementById('btn-1').style.backgroundColor = '#eff6ef';
  document.getElementById('btn-2').style.backgroundColor = '#eff6ef';
  document.getElementById('btn-4').style.backgroundColor = '#eff6ef';
}

function OpenCube() {
  document.getElementById('OpenCube').style.display = 'block';
  document.getElementById('OpenCircle').style.display = 'none';
  document.getElementById('OpenPotentiation').style.display = 'none';
  document.getElementById('OpenFracionado').style.display = 'none';
  document.getElementById('btn-4').style.backgroundColor = '#4CAF50';
  document.getElementById('btn-1').style.backgroundColor = '#eff6ef';
  document.getElementById('btn-2').style.backgroundColor = '#eff6ef';
  document.getElementById('btn-3').style.backgroundColor = '#eff6ef';
}

// Cancelar Carregamento da pagina 
let form = document.querySelector('form');

form.addEventListener("submit", execult);
function execult(e) {
  e.preventDefault();
}

