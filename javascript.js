var flag = 0; // 1 PC & 0 User
var tam;
var nim = 0;


function gerar_tab() {
	document.getElementById('tabuleiro').style.display = 'block';

	nim = tam * tam;
	var table = document.getElementById('tableclass');
	console.log("= " + tam);
	for (var i = 0; i < tam; i++) {
		var row = table.insertRow();
		row.classList.add('tr');

		for (var j = 0; j < tam; j++) {
			var td = row.insertCell();
			td.classList.add('td');
			cell_onclick(td, i, j);
		}
	}
	if(flag!=0)
		setTimeout(pc_play, 3000);

	
}

function getCell(l, c)
{
	var boardElement = document.getElementById("tableclass");
	return boardElement.rows[l].cells[c];
}

function pc_play() {
	document.getElementById('demo_3').style.display = 'none';

	var x, y;
	var cell;
	//alert(nim);
	
	if(nim <= 0)
		return;
	
	do
	{
		x = Math.floor((Math.random() * tam) );
		y = Math.floor((Math.random() * tam) );
		//console.log(x + " " + y + " " + tam);
	}
	while(getCell(x, y).className != "td");
	
	
	for (var i = x; i >= 0; i--) {
		var cell_vizinha = getCell(i, y);
		if(cell_vizinha.className == "inactive")
			break;
		cell_vizinha.className = "temporario";
		
	
	}

	setTimeout(function(){for (var i = x; i >= 0; i--) {
		var cell_vizinha = getCell(i, y);
		if(cell_vizinha.className == "inactive")
			break;
		cell_vizinha.className = "inactive";
		nim--;
		
	}
	winner();
	
	flag = 0;},5000);
}


function winner()
{
	if(nim <= 0){
		if(flag==0){
			alert("Parabéns, ganhaste fdp!");
			
		}
		else{
			alert("Perdeste, seu fdp!");
			
		}
		
		document.getElementById('tabuleiro').style.display = 'none';
		document.getElementById('gerar_tab').style.display = 'none';
		//document.getElementById('myFunction').style.display = 'none';
		


		
		return;
	}
}

function cell_onclick(cell, l, c) {

	cell.onclick = function() {
		if(flag == 0 && cell.className == "td")
		{
			for (var i = l; i >= 0; i--) {
				var cell_vizinha = getCell(i, c);
				if(cell_vizinha.className == "inactive")
					break;
				
				cell_vizinha.className = "inactive";
				nim--;

			}
			//nim = nim - (l + 1);
			
			winner();
			flag = 1;	
			setTimeout(pc_play, 3);
		}
	}

	cell.onmouseover = function() {
		if (cell.className !== "inactive" && cell.className !== "temporario")
			for (var i = l-1 ; i >= 0; i--) {
				var cell_vizinha = getCell(i, c);
				if (cell_vizinha.className == "inactive" || cell_vizinha.className == "temporario")
					break;
					cell_vizinha.className = "active";
			}
	}

	cell.onmouseout = function() {
		if (cell.className !== "inactive" && cell.className !== "temporario")
			for (var i = l; i >= 0; i--) {
				var cell_vizinha = getCell(i, c);
				if (cell_vizinha.className == "inactive" || cell_vizinha.className == "temporario")
					break;
				cell_vizinha.className = "td";
			}
	}

}

function clearBoard()
{
    
    var i;    
    for(i = 0; i < tam; i++)
    {
        document.getElementById("tableclass").deleteRow(0);
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
	
	 flag=0//user

}
function first_play_pc() {
	document.getElementById('demo').style.display = 'none';
	document.getElementById('demo_2').style.display = 'block';

	flag= 1; //pc

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
	clearBoard();

	document.getElementById('demo').style.display = 'block';
}
function quem_joga(){
	document.getElementById('quem_joga').style.display = 'none';
	document.getElementById('demo').style.display = 'block';
}
function instrucoes() {

}

function table_click() {
	var boardElement = document.getElementById("tabuleiro");
	alert(boardElement.rows[l].cells[c]);
}

