$(document).ready(function()
{
	
	 resizeWrapper();
	 stager();
	
	 $(window).bind("load resize scroll", function() {
		resizeWrapper()
		stager();
	})
	
	
	
	
});




//function resizeWrapper() {
//	var a = $(".side-bar").height(), b = $(".wrapper-content").height(); c = $(".widget-column").height();
//	a > b ? $(".wrapper-content").css("min-height", a + "px") : b > a && $(".side-bar").css("min-height", b + "px");
//	
//	if ($(window).width() > 991)
//	{
//		c > a ? $(".side-bar").css("min-height", c + "px") : a > c && $(".widget-column").css("min-height", a-20 + "px");
//	}
//	
//	
//	
//}


function stager()
{
	$('.stager').each(function()
	{	
		
		var stager = $(this);	
		var stager_handle_content_width = stager.children().children().next().width();
		var stager_handle_count = stager.children().children().find('.stager-handle').length;
		var stager_handle_width = stager.children().children().find('.stager-handle').width();
		var stager_complete = stager.children().children().find('.completed-portion');
		var stager_piece = stager_handle_content_width / (stager_handle_count-1);		
		var stager_position = 0;
		
		
		
		stager.children().find('.stager-handle').each(function()
		{
			var stager_handle = $(this);			
			var stager_handle_half_width = stager_handle_width / 2;
			var stager_handle_position = stager_position - stager_handle_half_width; 
			stager_handle.css('left' , stager_handle_position);
			if(stager_handle.hasClass('current'))
			{
				stager_complete.css('width' , stager_position);
			}
						
			stager_position += stager_piece;

		});

		
	});
	
	
}






