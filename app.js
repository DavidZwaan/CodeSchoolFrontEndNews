//----------------------------
// Base
//----------------------------

$(document).ready(function(){
  $('.js-like').on('click', function(e){
	e.preventDefault();
	
	$(this).text('Liked!').closest('.news-item').addClass('is-liked');
  });
  
  $('.js-add-link').on('click', function(e){
	e.preventDefault();
	
	$('.js-form').toggleClass('is-visible');
  });
  
  $('.js-show-modal').on('click', function(e){
	e.preventDefault();
	
	$('.js-modal-overlay').addClass('is-visible');
	$('.js-modal').addClass('is-visible');
  });
  
  $('.js-modal-overlay').on('click', function(){
	$('.js-modal-overlay').removeClass('is-visible');
	$('.js-modal').removeClass('is-visible');  
  });
});