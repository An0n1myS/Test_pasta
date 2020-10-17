input.onblur = function() {
  if (!input.value.includes("[A-Z][A-Za-z]")) {
    input.classList.add('invalid');
    error.innerHTML = 'completa correttamente il campo: nome'
  }
};

input.onfocus = function() {
  if (this.classList.contains('invalid')) {

    this.classList.remove('invalid');
    error.innerHTML = " ";
  }
};

input1.onblur = function() {
  if (!input1.value.includes('[A-Z][A-Za-z]')) {
    input1.classList.add('invalid');
    error1.innerHTML = 'completa correttamente il campo: cognome'
  }
};

input1.onfocus = function() {
  if (this.classList.contains('invalid')) {

    this.classList.remove('invalid');
    error1.innerHTML = " ";
  }
};


input2.onblur = function() {
  if (!input2.value.includes('@')) {
    input2.classList.add('invalid');
    error2.innerHTML = 'completa correttamente il campo: email'
  }
};

input2.onfocus = function() {
  if (this.classList.contains('invalid')) {

    this.classList.remove('invalid');
    error2.innerHTML = " ";
  }
};

function changeState(button){
  if (button == 1) {
    document.getElementById('btn2').classList.remove('active');
    document.getElementById('btn1').classList.add('active');
  }

  else if (button == 2){
    document.getElementById('btn1').classList.remove('active');
    document.getElementById('btn2').classList.add('active');
  }
}

