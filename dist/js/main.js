$(function () {

	$('.header__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg">',
		asNavFor: '.slider-dots'
	});

	$('.slider-dots').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.header__slider'
	});

});
