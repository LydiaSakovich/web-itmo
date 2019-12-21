	function next() {
			document.write('<br>-----<br>');;
		}
		//функция рандомизации чисел из инета
		function randomInt(min, max) {
			let rand = min - 0.5 + Math.random() * (max - min + 1);
			return Math.round(rand);
		}
		//функция рандомизации цвета из инета
		function randColor() {
			var r = Math.floor(Math.random() * (256)),
				g = Math.floor(Math.random() * (256)),
				b = Math.floor(Math.random() * (256));
			return '#' + r.toString(16) + g.toString(16) + b.toString(16);
		}
		var x, y; //значения кол-ва строк и столбцов

		function newText() {
			text = event.currentTarget.previousSibling.value;
			event.currentTarget.parentNode.innerHTML = text;
		}
		//создание таблицы
		function upload() {
			x = document.getElementById("rows").value;
			y = document.getElementById("cols").value;
			var row = x;
			var column = y;
			var table = '<table border="1">';
			for (var i = 0; i < row; i++) {
				table += '<tr>';
				for (var j = 0; j < column; j++) {
					table +=
						'<td><textarea placeholder="Введи текст!"></textarea><button type="button" onclick="newText()">Save</button></td>'
				}
				table += '</tr>';
			}
			table += '</table>';
			document.getElementById('table').innerHTML = table;
			//
			document.getElementById('forma').style.display = 'none'; //скрываем форму
			document.getElementById('func').style.display = ''; //делаем видимым блок функций
		}
		//границы таблицы
		function func1() {
			width = document.getElementById("tableSize").value;
			if (width >= 1000) {
				alert('Введите не более 3-х символов!');
			} else {
				document.getElementById("table").firstChild.width = width;
				border = document.getElementById("borderType").value;
				document.getElementById("table").firstChild.style.border = border;
			}
		}
		//отображение значений на кнопке
		document.getElementById("tableSize").oninput = function () {
			document.getElementById("but1").textContent = 'Применить: ' + document.getElementById("tableSize").value +
				'px';
		}
		document.getElementById("borderType").oninput = function () {
			document.getElementById("but1").textContent = document.getElementById("but1").textContent + ', border: ' +
				document.getElementById("borderType").value;
		}
		//добавление заголовка
		function func2() {
			caption = document.getElementById("captionText").value;
			document.getElementById('table').firstChild.createCaption().innerHTML = caption;
		}
		//удаление строки
		function func3() {
			deleterow = document.getElementById("deleteRow").value;
			document.getElementById('table').firstChild.deleteRow(deleterow - 1);
		}
		//рандомная ячейка и действия с ней
		function func4() {
			ind1 = randomInt(0, document.getElementById('table').firstChild.rows.length - 1);
			ind2 = randomInt(0, document.getElementById('table').firstChild.rows[ind1].cells.length - 1);
			switch (randomInt(1, 4)) {
				case 1:
					document.getElementById('table').firstChild.rows[ind1].cells[ind2].style.backgroundColor = randColor();
					break;
				case 2:
					document.getElementById('table').firstChild.rows[ind1].cells[ind2].style.color = randColor();
					break;
				case 3:
					document.getElementById('table').firstChild.rows[ind1].cells[ind2].style.fontSize = randomInt(15, 25) +
						'pt';
					break;
				case 4:
					document.getElementById('table').firstChild.rows[ind1].cells[ind2].innerHTML =
						'<td><textarea placeholder="Введи текст!"></textarea><button type="button" onclick="newText()">Save</button></td>';
					break;
			}
		}
		//удаление таблицы
		function func5() {
			document.getElementById('table').firstChild.remove();
			document.getElementById('forma').style.display = '';
			document.getElementById('func').style.display = 'none';
		}