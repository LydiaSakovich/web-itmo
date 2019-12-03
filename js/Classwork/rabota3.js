document.write("Random text")
let x = "<h3>title</h3>";
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
document.write("Anchors = ", count, "</br>");
for (i = 0; i < links.length; i++) 
{
	if (links[i].getAttribute('href')[0] == "#") 
	{
		document.write(links[i].innerHTML, "</br>");
		break;
	} 
}
forms = document.getElementsByTagName("form");
document.write("Forms = ", forms.length, "</br>");
document.write(forms[0].getAttribute('name'), "</br>");
images = document.getElementsByTagName("img");
document.write("Images = ", images.length, "</br>");
document.write(images[0].getAttribute('id'), "</br>");
document.write("Links = ", links.length, "</br>");
document.write(links[0].getAttribute('id'), "</br>");
document.write(document.location.host, "</br>");
document.write(document.location.href, "</br>");
document.write("Title = ", document.title, "</br>");
document.write(document.location.href, "</br>");
let button = document.getElementById("Button");
function ButtonDisable() 
{
	button.disabled = true;
}
document.write("Button name = ", button.getAttribute('name'), "</br>");
document.write("Button type = ", button.getAttribute('type'), "</br>");
document.write("Button text = ", button.getAttribute('value'), "</br>");
document.write("Form with button id = ", button.parentNode.getAttribute('id'), "</br>");
let form = document.getElementById("FormWithButton");
for (i = 0; i < form.elements.length; i++) 
{
	document.write("Element ", i, " value = ", form.elements[i].getAttribute('value'), "</br>");
}
document.write("Form action = ", document.getElementById("FormWithButton").getAttribute('action'), "</br>");
document.write("Form enctype = ", document.getElementById("FormWithButton").getAttribute('enctype'), "</br>");
document.write("Form elements = ", form.elements.length, "</br>");
document.write("Form method = ", form.getAttribute('method'), "</br>");
document.write("Form name = ", form.getAttribute('name'), "</br>");
function FormReset () 
{
	document.getElementById("FormWithButton").reset();
}
for (i = 0; i < images.length; i++) 
{
	images[i].setAttribute("align", "right");
}
for (i = 0; i < images.length; i++) 
{
	images[i].setAttribute("alt", "This is image");
	document.write(images[i].getAttribute("alt"), "</br>");
}
for (i = 0; i < images.length; i++) 
{
	images[i].style.border = "2px dashed blue";
}
for (i = 0; i < images.length; i++) 
{
	images[i].setAttribute("width", "240px");
	images[i].setAttribute("height", "200px");
}
for (i = 0; i < images.length; i++) 
{
	document.write(images[i].getAttribute("name"), "</br>");
}
images[0].setAttribute("src", "http://i65.fastpic.ru/big/2014/0807/82/2dc28d0501d7038a5acbb6f645a11782.jpg")
function textEvent() 
{
	if (event.which == 1)
      document.write("Left button");
    else if (event.which == 3)
      document.write("Right button");
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
table.style.border = "3px solid red";
table.appendChild(document.createElement("caption"));
table.caption.innerHTML = "Table";
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
table.children[2].children[2].innerHTML = "Cell";
tr.children[0].setAttribute("colspan", "3");