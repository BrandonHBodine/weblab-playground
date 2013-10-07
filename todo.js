$(document).ready(function() {
	$('#new-todo').keypress(function(e) {
    if(e.which == 13) {
			var text = $('#new-todo').val();
			$('.todo-list').append('<li>' + text + '<button class="destroy"></button>'+'</li>');
			$(this).val('');
		}
	})
	
	$('ul li').on( "click", function() {
  	console.log("papa jhons");
	});
});