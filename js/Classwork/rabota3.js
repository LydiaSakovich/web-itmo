document.write("Текстик")
let x = "<h3>Заголовок</h3>";
document.write(x);
let count = 0;
links = document.getElementsByTagName("a");
for (i = 0; i < links.length; i++) 
{
	if (links[i].getAttribute('href')[0] == "#") 
	{
		count++;
	} 
}
document.write("Якорей = ", count, "</br>");
for (i = 0; i < links.length; i++) 
{
	if (links[i].getAttribute('href')[0] == "#") 
	{
		document.write(links[i].innerHTML, "</br>");
		break;
	} 
}

forms = document.getElementsByTagName("form");
document.write("Форм = ", forms.length, "</br>");
document.write(forms[0].getAttribute('name'), "</br>");

images = document.getElementsByTagName("img");
document.write("Изображений = ", images.length, "</br>");
document.write(images[0].getAttribute('id'), "</br>");

document.write("Ссылок = ", links.length, "</br>");
document.write(links[0].getAttribute('id'), "</br>");

document.write(document.location.host, "</br>");
document.write(document.location.href, "</br>");

document.write("Заголовок ", document.title, "</br>");

document.write(document.location.href, "</br>");

let button = document.getElementById("Button");
function ButtonDisable() 
{
	button.disabled = true;
}
document.write("Имя кнопки = ", button.getAttribute('name'), "</br>");
document.write("Тип кнопки = ", button.getAttribute('type'), "</br>");
document.write("Текст кнопки = ", button.getAttribute('value'), "</br>");
document.write("id формы с кнопкой = ", button.parentNode.getAttribute('id'), "</br>");

let form = document.getElementById("Форма с кнопкой");
for (i = 0; i < form.elements.length; i++) 
{
	document.write("Элемент ", i, " value = ", form.elements[i].getAttribute('value'), "</br>");
}
document.write("Action формы = ", document.getElementById("Форма с кнопкой").getAttribute('action'), "</br>");
document.write("Enctype формы = ", document.getElementById("Форма с кнопкой").getAttribute('enctype'), "</br>");
document.write("Элементов формы = ", form.elements.length, "</br>");
document.write("Метод отправки с формы = ", form.getAttribute('method'), "</br>");
document.write("Имя формы = ", form.getAttribute('name'), "</br>");

function FormReset () 
{
	document.getElementById("Форма с кнопкой").reset();
}
for (i = 0; i < images.length; i++) 
{
	images[i].setAttribute("align", "right");
}
for (i = 0; i < images.length; i++) 
{
	images[i].setAttribute("alt", "Это изображение");
	document.write(images[i].getAttribute("alt"), "</br>");
}
for (i = 0; i < images.length; i++) 
{
	images[i].style.border = "2px solid blue";
}
for (i = 0; i < images.length; i++) 
{
	images[i].setAttribute("width", "200px");
	images[i].setAttribute("height", "200px");
}
for (i = 0; i < images.length; i++) 
{
	document.write(images[i].getAttribute("name"), "</br>");
}

images[0].setAttribute("src", "https://vignette.wikia.nocookie.net/elderscrolls/images/3/38/%D0%A1%D0%BB%D0%B0%D0%B4%D0%BA%D0%BE%D0%B3%D0%BE%D0%BB%D0%BE%D1%81%D0%B0%D1%8F_%D0%A5%D0%B0%D0%B1%D0%B0%D1%81%D0%B8.jpg/revision/latest?cb=20190625114540&path-prefix=ru")
function textEvent() 
{
	if (event.which == 1)
      document.write("Левая кнопка мыши");
    else if (event.which == 3)
      document.write("Правая кнопка мыши");
  	document.write("</br>Координаты курсора относительно страницы:</br>X = ", event.pageX, "</br>Y = ", event.pageY);
  	document.write("</br>Координаты курсора относительно окна:</br>X = ", event.clientX, "</br>Y = ", event.clientY);
  	document.write("</br>", event.target.tagName);
  	document.write("</br>", event.type);
}
document.addEventListener("click", textEvent);
document.addEventListener("contextmenu", textEvent);

table = document.getElementById("table");
table.border = 3;
table.setAttribute("cellpadding", "4");
table.setAttribute("cellspacing", "4");
table.style.border = "2px dotted blue";
table.appendChild(document.createElement("caption"));
table.caption.innerHTML = "Таблица";
table.deleteRow(1);
let tr = document.createElement("tr");
table.appendChild(tr);
for (i = 0; i < 3; i++) 
{
	tr.insertCell(0);
}
for (i = 0; i < tr.children.length; i++) 
{
	tr.children[i].setAttribute("align", "center");
	tr.children[i].setAttribute("vertical-align", "center");
}
table.children[2].children[1].setAttribute("align", "right");
table.children[2].children[2].setAttribute("vertical-align", "left");
table.children[2].children[2].innerHTML = "Ячейка";
tr.children[0].setAttribute("colspan", "3");