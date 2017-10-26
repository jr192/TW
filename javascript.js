function gerar_tab (){
var table = document.createElement('table');

table.classList.add('tableclass');


for(var i=0; i<tam;i++)
	{
		var row=table.insertRow();
		row.classList.add('tr');
		for(var j=0; j<tam; j++)
			{
				var td=row.insertCell();
				td.classList.add('td');
			}
	}

document.getElementById('tabuleiro').appendChild(table);


//var vaar = document.getElementsByClassName('background')[0].style.background="red";
}

var tam;

function myFunction() {
    var x, text;
    
    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
    tam = x;
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";

    }
    document.getElementById("demo").innerHTML = text;
	document.getElementById('gerar_tab').style.display='block';

}

function first_play(){
	document.getElementById('demo').style.display='none';
	document.getElementById('demo_2').style.display='block';
}

function dif_play(){
	document.getElementById('demo_2').style.display='none';
	document.getElementById('demo_3').style.display='block';

}
function registar(){
	document.getElementById('header_painel2').style.display='none';
	document.getElementById('painel_2').style.display='block';
}

function login(){
	document.getElementById('painel_2').style.display='block';
}
function login_wData(){
	document.getElementById('painel_2').style.display='none';
}
function config(){
	document.getElementById('demo').style.display='block';

}


