function openModal() {
  const body = document.querySelector('body');
  const element = document.querySelector('div');

  element.classList.remove('invisible');
  
  element.classList.add('visible');

  body.onkeydown = function(e){
    if (e.key === "Escape" ) {
      element.classList.remove('visible');

      element.classList.add('invisible');
    }
    return;
  }
}