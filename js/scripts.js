var btnsRipple = function (e) {
var target = e.target; /* Retorna o evento setado */
if (target.tagName.toLowerCase() !== 'button') return false; /* Retorno falso caso não seja o button */
var rect = target.getBoundingClientRect(); /* Retorna o tamanho do elemento e a posição do elemento */
var ripple = target.querySelector('.ripple'); /* Evento a ser executado na seleção - Class ".ripple" */
if (!ripple) { /* Retorna verdadeiro como o operando é falso. */
  ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
  target.appendChild(ripple); /* Devolve a referência na nova posição do ripple */
}
ripple.classList.remove('show'); /* Removendo o ripple show */
var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
// Retorna o height of an element in pixels, including padding, border and scrollbar
ripple.style.top = top + 'px';
ripple.style.left = left + 'px';
ripple.classList.add('show'); /* Add o ripple show depois de ter capturado as posições */
return false;
}
document.addEventListener('click', btnsRipple, false);
