var flag = 0; // 1 PC & 0 User
var tam;
var nim = 0;


function gerar_tab() {
	
	nim = tam * tam;
	var table = document.getElementById('tableclass');

	for (var i = 0; i < tam; i++) {
		var row = table.insertRow();
		row.classList.add('tr');

		for (var j = 0; j < tam; j++) {
			var td = row.insertCell();
			td.classList.add('td');
			cell_onclick(td, i, j);
		}
	}
	
	pc_play();
}

function getCell(l, c)
{
	var boardElement = document.getElementById("tableclass");
	return boardElement.rows[l].cells[c];
}

function pc_play() {
	
	console.log(nim);
	var x, y;
	var cell;
	if(nim < 0)
		return;
	
	do
	{
		x = Math.floor((Math.random() * tam) );
		y = Math.floor((Math.random() * tam) );
		//console.log(x + " " + y + " " + tam);
	}
	while(getCell(x, y).className != "td");

	
	
	console.log("= " + x);
	for (var i = x; i >= 0; i--) {
		var cell_vizinha = getCell(i, y);
		nim--;
		if(cell_vizinha.className == "inactive")
			break;
		cell_vizinha.className = "inactive";
		
		
	}
	
	flag = 0;
}

function cell_onclick(cell, l, c) {

	cell.onclick = function() {
		if(flag == 0 && cell.className == "td")
		{
			for (var i = l; i >= 0; i--) {
				var cell_vizinha = getCell(i, c);
				nim--;
				if(cell_vizinha.className == "inactive")
					break;
				
				cell_vizinha.className = "inactive";
				
			}
			console.log("= " + l);
			//nim = nim - (l + 1);
			
			flag = 1;
			setTimeout(pc_play, 3000);
		}
	}

	cell.onmouseover = function() {
		if (cell.className !== "inactive")
			for (var i = l - 1; i >= 0; i--) {
				var cell_vizinha = getCell(i, c);
				if (cell_vizinha.className != "inactive")
					cell_vizinha.className = "active";
			}
	}

	cell.onmouseout = function() {
		if (cell.className !== "inactive")
			for (var i = l; i >= 0; i--) {
				var cell_vizinha = getCell(i, c);
				if (cell_vizinha.className != "inactive")
					cell_vizinha.className = "td";
			}
	}

}


function myFunction() {
	var x, text;

	x = document.getElementById("numb").value;

	document.getElementById('gerar_tab').style.display = 'block';
	tam = x;
	gerar_tab();
}

function first_play() {
	document.getElementById('demo').style.display = 'none';
	document.getElementById('demo_2').style.display = 'block';

}
function first_play_pc() {
	document.getElementById('demo').style.display = 'none';
	document.getElementById('demo_2').style.display = 'block';

	flag_pc = 1;

}

function dif_play() {
	document.getElementById('demo_2').style.display = 'none';
	document.getElementById('demo_3').style.display = 'block';

}
function registar() {
	document.getElementById('header_painel2').style.display = 'none';
	document.getElementById('painel_2').style.display = 'block';
}

function login() {
	document.getElementById('painel_2').style.display = 'block';
}
function login_wData() {
	document.getElementById('painel_2').style.display = 'none';
}
function config() {
	document.getElementById('demo').style.display = 'block';
}
function instrucoes() {
}

function table_click() {
	var boardElement = document.getElementById("tabuleiro");
	alert(boardElement.rows[l].cells[c]);

}
