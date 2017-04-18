window.addEventListener('load',function(event){
	event.preventDefault();

	var container = document.getElementById('contenido');

	for (var i = 1; i < 5; i++){
		var div = document.createElement('div');
		var span = document.createElement('span');
		var img = document.createElement('img');
		var url = "assets/img/" + i + ".jpg";

		img.setAttribute('src', url);
		div.appendChild(img);
		span.innerText = "x";
		div.appendChild(span);

		div.setAttribute('id', 'imagen-' + i );
		span.setAttribute('data-imagen' , i);
		div.setAttribute('class','img-box');
		container.appendChild(div);

		span.addEventListener('click',function(event){
			var id = 'imagen-' + this.getAttribute('data-imagen');
			var img_box = document.getElementById(id);
			img_box.setAttribute('class', 'img-box deleted');
		});
	}

	var restaurar = document.getElementsByClassName('restore');



});
