$(document).ready(function() {
	
	$('#new-todo').keypress(function(e) {
    if(e.which == 13) {
			var text = $('#new-todo').val();
			$('.todo-list').append('<li>' +'<button class="checker"></button>' + text + '<button class="destroy"></button>'+'</li>');
			$(this).val('');
		}
	});
	
	$('.todo-list').on( 'click', 'button.checker', function() {
    $(this).parent().toggleClass('done');
  });
	
	$('.todo-list').on( 'click', 'button.destroy', function() {
    $(this).parent().remove();
  });
	
	$('#header').on( 'click', 'input.select-all', function() {
    $('li').toggleClass('done');
  });
	
	
	});