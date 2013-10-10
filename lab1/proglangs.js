
var select = document.getElementById('selectlang');
select.onchange = function(){
	document.getElementById("selected").innerHTML = "Du har valgt <b>" + select.value + "</b>";
	}
