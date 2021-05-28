var listaFoco = document.getElementById('listaFoco');
var oi = document.querySelectorAll('*:not(.foco)');
var foco = document.querySelectorAll('.foco');


for(let i = 0; i < foco.length; i++) {	
	foco[i].addEventListener('focus', function() {
		listaFoco.style.display = "block";
	});	
}
for(let i = 0; i < oi.length; i++) {	
	oi[i].addEventListener('focus', function() {
		listaFoco.style.display = "none";
	});	
}