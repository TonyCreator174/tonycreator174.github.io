$('h2 span').click(function(){
	$('input').fadeToggle();
});

$('ul').on('click', 'li', function(){
	$(this).toggleClass('done');
});

$('input').keypress(function(e){
	if(e.which===13){
		var textItem = $(this).val();
		$('ul').append('<li>' + textItem + '<span><i class="fas fa-backspace"></i></span></li>');
		$(this).val('');

	};
});

$('ul').on('click','span', function(e){
	e.stopPropagation();
	$(this).parent().fadeOut(function(){
		$(this).remove();	
	});	
});

