//----------------------------
// Base
//----------------------------

$(document).ready(function(){
  $('.js-like').on('click', function(e){
	e.preventDefault();
	
	$(this).text('Liked!').closest('.news-item').addClass('is-liked');
  });
});