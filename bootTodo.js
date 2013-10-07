$(document).ready(function() {
	var updater = function() {
		var count = $('li.not-done').length;
		if(count > 0) {
			$('#todo-count').prepend(count);
		} else {
			$('#todo-count').remove('h2');
		}
	};
	
	$('#new-todo').keypress(function(e) {
    if(e.which == 13) {
			var text = $('#new-todo').val();
			$('.todo-list').append('<li class= "not-done">' + '<button class="checker"></button>' + text + '<button class="destroy"></button>'+'</li>');
			$(this).val('');
			updater();
		}
	});
	
	$('.todo-list').on( 'click', 'button.checker', function() {
    $(this).parent().toggleClass('done')
										.toggleClass('not-done');
		updater();
  });
	
	$('.todo-list').on( 'click', 'button.destroy', function() {
    $(this).parent().remove();
		updater();
  });
	
	$('#header').on( 'click', 'input.select-all', function() {
		if($('li.not-done').length > 0){
    	$('li').addClass('done')
						 .removeClass('not-done');
			updater();
		} else {
			$('li').addClass('not-done')
						 .removeClass('done');
			updater();
		};
  });
	
	$('#footer').on( 'click', 'input.clear-done', function() {
    $('.done').remove();
		updater();
	});
	
	});