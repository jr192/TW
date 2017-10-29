var flag = 0; // 1 PC & 0 User
var tam;
var nim = 0;

function gerar_tab() {
	document.getElementById('tabuleiro').style.display = 'block';
	document.getElementById('quit').style.display = 'block';

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
	if (flag != 0)
		setTimeout(pc_play, 100);

}

function gerar_tab2() {
	var table = document.getElementById('tabelaclassificacao');

	for (var i = 0; i < 11 ;i++) {
		var row = table.insertRow();
		row.classList.add('tr_1');

		for (var j = 0; j < 2 ;j++) {
			var td = row.insertCell();
			td.classList.add('td_1');

		}
	}
	var n = "Nome";
	var t = "Tempo";
	document.getElementById("tabelaclassificacao").rows[0].cells[0].innerHTML = n;
	document.getElementById("tabelaclassificacao").rows[0].cells[1].innerHTML = t;


	for ( i = 1; i <= 10 ;i++) {
		var player_class = i  + 'º		--------------		';
		var player_time = "-- / -- / --";
		console.log(player_class);
			document.getElementById("tabelaclassificacao").rows[i].cells[0].innerHTML = player_class;
			document.getElementById("tabelaclassificacao").rows[i].cells[1].innerHTML = player_time;

	}

}


function getCell(l, c) {
	var boardElement = document.getElementById("tableclass");
	return boardElement.rows[l].cells[c];
}

function pc_play() {
	document.getElementById('demo_3').style.display = 'none';

	var x, y;
	var cell;
	// alert(nim);

	if (nim <= 0)
		return;

	do {
		x = Math.floor((Math.random() * tam));
		y = Math.floor((Math.random() * tam));
		// console.log(x + " " + y + " " + tam);
	} while (getCell(x, y).className != "td");

	for (var i = x; i >= 0; i--) {
		var cell_vizinha = getCell(i, y);
		if (cell_vizinha.className == "inactive")
			break;
		cell_vizinha.className = "temporario";

	}

	setTimeout(function() {
		for (var i = x; i >= 0; i--) {
			var cell_vizinha = getCell(i, y);
			if (cell_vizinha.className == "inactive")
				break;
			cell_vizinha.className = "inactive";
			nim--;

		}
		winner();

		flag = 0;
	}, 1000);
}

function winner() {
	if (nim <= 0) {
		if (flag == 0) {
			alert("Parabéns, ganhaste!");

		} else {
			alert("Perdeste, tente de novo!");

		}

		document.getElementById('tabuleiro').style.display = 'none';
		document.getElementById('gerar_tab').style.display = 'none';
		// document.getElementById('myFunction').style.display = 'none';

		document.getElementById('try_again').style.display = 'block';

		return;
	}
}

function cell_onclick(cell, l, c) {

	cell.onclick = function() {
		if (flag == 0 && cell.className == "td") {
			for (var i = l; i >= 0; i--) {
				var cell_vizinha = getCell(i, c);
				if (cell_vizinha.className == "inactive")
					break;

				cell_vizinha.className = "inactive";
				nim--;

			}
			// nim = nim - (l + 1);

			winner();
			flag = 1;
			setTimeout(pc_play, 3);
		}
	}

	cell.onmouseover = function() {
		if (cell.className !== "inactive" && cell.className !== "temporario")
			for (var i = l - 1; i >= 0; i--) {
				var cell_vizinha = getCell(i, c);
				if (cell_vizinha.className == "inactive"
						|| cell_vizinha.className == "temporario")
					break;
				cell_vizinha.className = "active";
			}
	}

	cell.onmouseout = function() {
		if (cell.className !== "inactive" && cell.className !== "temporario")
			for (var i = l; i >= 0; i--) {
				var cell_vizinha = getCell(i, c);
				if (cell_vizinha.className == "inactive"
						|| cell_vizinha.className == "temporario")
					break;
				cell_vizinha.className = "td";
			}
	}

}

function clearBoard() {

	var i;
	for (i = 0; i < tam; i++) {
		if (document.getElementById("tabelaclassificacao").rows.length != 0)
			document.getElementById("tabelaclassificacao").deleteRow(0);
	}
}
function clearBoard_rank() {

	var i;
	for (i = 0; i < 10; i++) {
		if (document.getElementById("tabelaclassificacao").rows.length != 0)
			document.getElementById("tabelaclassificacao").deleteRow(0);

	}
}

function myFunction() {
	var x, text;
	
	x = document.getElementById("numb").value;

	document.getElementById('gerar_tab').style.display = 'block';
	tam = x;
	clearBoard();
	gerar_tab();
}

function first_play() {
	document.getElementById('demo').style.display = 'none';
	document.getElementById('demo_2').style.display = 'block';

	flag = 0// user

}
function first_play_pc() {
	document.getElementById('demo').style.display = 'none';
	document.getElementById('demo_2').style.display = 'block';

	flag = 1; // pc

}

function dif_play() {
	document.getElementById('demo_2').style.display = 'none';
	document.getElementById('demo_3').style.display = 'block';

}
function registar() {
	document.getElementById('header_painel2').style.display = 'none';
	document.getElementById('painel_login').style.display = 'block';
}

function login() {
	document.getElementById('painel_rank').style.display = 'none';
	document.getElementById('painel_instrucoes').style.display = 'none';
	document.getElementById('gerar_tab').style.display = 'none';
	document.getElementById('painel_jogo').style.display = 'none';
	document.getElementById('tabuleiro').style.display = 'none';
	document.getElementById('painel_init').style.display = 'none';
	document.getElementById('painel_login').style.display = 'block';
}
function login_wData() {
	document.getElementById('painel_login').style.display = 'none';
	document.getElementById('painel_init').style.display = 'block';
}
function config() {
	clearBoard();
	document.getElementById('painel_login').style.display = 'none';
	document.getElementById('painel_rank').style.display = 'none';
	document.getElementById('painel_init').style.display = 'none';
	document.getElementById('painel_instrucoes').style.display = 'none';
	document.getElementById('gerar_tab').style.display = 'block';
	document.getElementById('painel_jogo').style.display = 'block';
	document.getElementById('tabuleiro').style.display = 'block';

}
function modo_jogo() {
	document.getElementById('gerar_tab').style.display = 'none';
	document.getElementById('modo_jogo').style.display = 'none';
	document.getElementById('demo').style.display = 'block';
}
function instrucoes() {
	document.getElementById('gerar_tab').style.display = 'none';
	document.getElementById('painel_jogo').style.display = 'none';
	document.getElementById('painel_login').style.display = 'none';
	document.getElementById('painel_init').style.display = 'none';
	document.getElementById('painel_rank').style.display = 'none';
	document.getElementById('painel_instrucoes').style.display = 'block';

}
function rank() {
	document.getElementById('gerar_tab').style.display = 'none';
	document.getElementById('painel_jogo').style.display = 'none';
	document.getElementById('painel_login').style.display = 'none';
	document.getElementById('painel_init').style.display = 'none';
	document.getElementById('painel_instrucoes').style.display = 'none';
	document.getElementById('gerar_tab').style.display = 'none';
	clearBoard_rank();
	document.getElementById('painel_rank').style.display = 'block';
	gerar_tab2();
	document.getElementById('tabelaclassificacao').style.display = 'block';

}

function home() {
	clearBoard();
	document.getElementById('tabuleiro').style.display = 'none';
	document.getElementById('quitgame').style.display = 'none';
	document.getElementById('gerar_tab').style.display = 'none';
	document.getElementById('painel_jogo').style.display = 'none';
	document.getElementById('painel_instrucoes').style.display = 'none';
	document.getElementById('painel_login').style.display = 'none';
	document.getElementById('painel_rank').style.display = 'none';
	document.getElementById('painel_init').style.display = 'block';
	//document.getElementById('demo').style.display = 'block';
	
}
function table_click() {
	var boardElement = document.getElementById("tabuleiro");
	alert(boardElement.rows[l].cells[c]);
}

function try_again() {
	clearBoard();

	document.getElementById('try_again').style.display = 'none';
	document.getElementById('demo').style.display = 'block';
}

function quitbutton(){
	document.getElementById('quit').style.display = 'none';
	document.getElementById('painel_jogo').style.display = 'none';
	document.getElementById('gerar_tab').style.display = 'none';
	document.getElementById('tabuleiro').style.display = 'none';
	document.getElementById('quitgame').style.display = 'block';
}
function yes(){
clearBoard();
	document.getElementById('tabuleiro').style.display = 'none';
	document.getElementById('quitgame').style.display = 'none';
	document.getElementById('painel_jogo').style.display = 'none';
	document.getElementById('painel_init').style.display = 'block';
	document.getElementById('demo').style.display = 'block';

	}
function quitfunction(){
	document.getElementById('quitgame').style.display = 'none';
	document.getElementById('quit').style.display = 'block';
	document.getElementById('painel_jogo').style.display = 'block';
	document.getElementById('tabuleiro').style.display = 'block';
	document.getElementById('gerar_tab').style.display = 'block';

}