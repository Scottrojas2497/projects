/*
	addEventHandless()=
	{
		this.btnNext[0].ref=this;
		this.btnNext.on('click', function)
			{
				this
				
				index++;
				if (index === countItems) 
				{
					index=0;
				}
				carousel.css({
					'left' : -index*803+'px'
				});
			};
	}
*/
//var GalleryCarousel=function(){
	//this.carousel = $('carousel');
	var nextBtn = $('.nextBtn');
	var previousBtn = $('.previousBtn');
	//this.countItems = carousel.children().length;
	var index=0;
//}

//$(previousBtn).click(goPrevious);
//$(nextBtn).click(goNext);

var Slider = function(reference){
	this.carousel = reference;
	this.countItems = this.carousel.children().length;
}

Slider.prototype={
	
	constructor : Slider,

	
	goNext :function(carousel,countItems){
		//console.log(index);
		//console.log('goNext');
		index++;
		if (index === countItems) 
		{
			index=0;
		}
		carousel.css({
			'left' : -index*803+'px'
		});
	},

	goPrevious: function(carousel, countItems){
		//console.log(index);
		//console.log('goPrevious');
		index--;
		if (index === -1) 
		{
			index=countItems-1;
		}
		carousel.css({
			'left' : -index*803+'px'
		});
	}
}
var slider = new Slider( $('#carousel'));

nextBtn.click(function(){
	slider.goNext(slider.carousel, slider.countItems);
});
previousBtn.click(function(){
	slider.goPrevious(slider.carousel, slider.countItems);
});


