setTimeout(function(){

var table = document.createElement('table');
table.classList.add('tableclass');
for(var i=0; i<5;i++)
	{
		var row=table.insertRow();
		row.classList.add('tr');
		for(var j=0; j<5; j++)
			{
				var td=row.insertCell();
				td.classList.add('td');
			}
	}

document.getElementById('tabuleiro').appendChild(table);


//var vaar = document.getElementsByClassName('background')[0].style.background="red";
},1000);