let str = "Здесь что-то написано";
document.write(str, "</br>");
document.write("Кол-во слов в предложении: ", str.split(" ").length, "</br>");
document.write("Кол-во букв в предложении: ", str.length - str.split(" ").length +1, "</br>");

document.write("URL: ", document.URL,"</br>");
document.write("Имя протокола: ", document.location.protocol,"</br>");
document.write("Имя файла: ", document.location.pathname.split('.')[0],"</br>");
document.write("Расширение: ", document.location.pathname.split('.')[1],"</br>");

let strGET = document.location.search.replace( '?', '');
document.write("Подстрока параметров: ", strGET,"</br>");
//2
let abc = "Anchor +1";
document.write("Новый анкор 1: ", abc.anchor('ban'), '<br>');
document.write("Новый анкор 2: ", abc.anchor('ban2'), '<br>');

document.write('<a href="https://yadonor.ru/donorstvo/become/">Как стать донором</a><br>')
document.write('<a href="https://lingust.ru/chinese/chinese-lessons/lesson1">Учим китайский</a><br>')
document.getElementsByTagName("a")[0].id = "link1";
document.getElementsByTagName("a")[1].id = "link2";

document.write('<img src="https://vignette.wikia.nocookie.net/elderscrolls/images/c/c2/%D0%A8%D0%BE%D1%82%D0%B5%D1%80%D1%80%D0%B0.jpg/revision/latest?cb=20191104230229&path-prefix=ru" style="width: 20%">')
document.write('<img src="https://vignette.wikia.nocookie.net/elderscrolls/images/5/55/%D0%90%D0%BD%D0%B0%D1%81%D1%81%D0%B8.jpg/revision/latest?cb=20190404151913&path-prefix=ru" style="width: 30%; height: 250px"><br>')

document.write('Кол-во анкоров: ', document.anchors.length,'<br>');
document.write('Кол-во ссылок: ', document.links.length,'<br>');
document.write('Вывод первого анкора: ', document.anchors[0].innerHTML, '<br>')
document.write('Кол-во картинок: ', document.images.length,'<br>');
document.write('Ширина первой картинки: ', document.images[0].width,'<br>');
document.write('Ширина самой широкой картинки: ', Math.max.apply(Math, Array.from(document.images).map(function(o) { return o.width; })), '<br>');
const reducer = (accumulator, currentValue) => accumulator + currentValue;
document.write('Cумма всех высот картинок: ', Array.from(document.images).map(function(o) { return o.height; }).reduce(reducer),'<br>');
document.write('id первой ссылки: ', document.links[0].id,'<br>');
document.write('Название документа: ', document.title,'<br>');

forms = document.getElementsByTagName("form");

document.write("Четные формы = ");
for (i = 0; i < forms.length; i++) 
{
	if (((i + 1) % 2) == 0) 
	{
		document.write(forms[i].getAttribute('name'), ", ");
	}
}

function onClickButton(j) 
{
	for (i = 0; i < forms[j].childNodes.length; i++) 
	{
		if ((forms[j].childNodes[i].tagName == "BUTTON") && (forms[j].childNodes[i].innerHTML == "Показать имя формы")) 
		{
			alert(forms[j].childNodes[i].innerHTML);
			break;
		}
	}
	return false;
}

function formID (j) 
{
	alert (forms[j].getAttribute('id')); 
	return false;
}

function reset (j) 
{
	forms[j].reset();
}

function quantityInputs(j) 
{
	let qInputs = 0;
	for (i = 0; i < forms[j].childNodes.length; i++) 
	{
		if (forms[j].childNodes[i].tagName == "INPUT") 
		{
			qInputs++;
		}
	}
	alert (qInputs);
	return false; 
}

let links = document.getElementsByTagName("a");

function tableCreate() 
{
	let tbl = document.createElement("table");
  	tbl.border = 1;
	let lastLinks = [];
	for (i = 0; i < links.length; i++) 
	{
		if (links[i].getAttribute('class') == "LastTask") 
		{
			lastLinks.push(links[i]);
		}
	}
	let set = new Set();
	for (i = 0; i < lastLinks.length; i++) 
	{
		set.add(lastLinks[i].innerHTML);
	}
	for (let item of set) 
	{
		let tr = tbl.insertRow(item.number);
		for (j = 0; j < 3; j++) 
		{
			let td = tr.insertCell(j);
			switch(j) 
			{
				case 0:
				td.innerHTML = String(item);
				break;
				case 1:
				td.innerHTML = quantity(1, item, lastLinks);
				break;
				case 2:
				td.innerHTML = quantity(2, item, lastLinks);
				break;
			}
		}
	}
	document.body.appendChild(tbl);
}
function quantity(number, item, lastLinks)
 {
	let arr = [];
	let count = 0;
	for (i = 0; i < lastLinks.length; i++) 
	{
		if (lastLinks[i].innerHTML == item) 
		{
			count++;
			arr.push(lastLinks[i].getAttribute('href'));
		}
	}
	if (number == 1) 
	{
		return count;
	}
	else 
	{
		return arr;
	}
	
}
