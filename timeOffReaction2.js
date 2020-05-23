var changeFigures = document.querySelector('div')
var text  = document.querySelector('h1');
var reactionTime = document.getElementById('reactionTime')
var time = Date.now();



var change = function() {
	switch(this.classList.value){
		case "d1": this.classList = "d2",
				 	timeRes1 = (Date.now()-time)/1000, 
				 	reactionTime.innerHTML= timeRes1 + "сек.",
				 	time2 = Date.now();

			break;
		case 'd2':this.classList = 'd3',
					timeRes2 = (Date.now()-time2)/1000, 
				 	reactionTime.innerHTML= timeRes2 + 'сек.',
				 	time3 = Date.now();
		 	break;
		case 'd3':this.classList = 'd4'
					timeRes3 = (Date.now()-time3)/1000, 
				 	reactionTime.innerHTML = timeRes3 + "сек.",
				 	time4 = Date.now();
		 	break;
		case 'd4':this.classList = 'd5',
					timeRes4 = (Date.now()-time4)/1000, 
				 	reactionTime.innerHTML = timeRes4 + "сек.",
				 	time5 = Date.now();
		 	break;
		case 'd5': this.classList = 'd6',
					timeRes5 = (Date.now()-time5)/1000, 
				 	reactionTime.innerHTML = timeRes5 + "сек.",
				 	time6 = Date.now();	
		 	break;
		 case 'd6': this.classList = 'd7',
					timeRes6 = (Date.now()-time6)/1000, 
				 	reactionTime.innerHTML = timeRes6 + "сек.",
				 	time7 = Date.now();
			break;	
		case 'd7': this.classList = 'd8',
					timeRes7 = (Date.now()-time7)/1000, 
				 	reactionTime.innerHTML = timeRes7 + "сек.",
				 	time8 = Date.now();
			break;	
		case 'd8': this.classList = 'd9',
					timeRes8 = (Date.now()-time8)/1000, 
				 	reactionTime.innerHTML = timeRes8 + "сек.",
				 	time9 = Date.now();
			break;	
		case 'd9': this.classList = 'd10',
					timeRes9 = (Date.now()-time9)/1000, 
				 	reactionTime.innerHTML = timeRes9 + "сек.",
				 	time10 = Date.now();
			break;
		case 'd10': this.classList = 'd1net',
					timeRes10 = (Date.now()-time10)/1000, 
				 	reactionTimet.innerHTML = timeRes10 + "сек.";
			break;				 			 			 	
		 default: text.innerHTML ='Ваш результат ' +  '' + (timeRes1 + timeRes2 + timeRes3 + timeRes4
		  + timeRes5+timeRes6+timeRes7+timeRes8+timeRes9+timeRes10) + 
			" сек. чтобы начать заново перезагрузите страницу";

	};
};

changeFigures.addEventListener('click', change);







	