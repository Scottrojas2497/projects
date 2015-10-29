var carousel=document.getElementById('carousel');
var nextBtn= document.getElementsByClassName('nextBtn')[0];
var previousBtn= document.getElementsByClassName('previousBtn')[0];
var countItems= carousel.children.length;
var index=0;



previousBtn.addEventListener('click',goPrevious);

function goPrevious(){
	console.log(index);
	console.log('goPrevious');
	index--;
	
	if (index === -1) {
		index=countItems-1;
		//carousel.style.left='0';
	}
	carousel.style.left=-index*803+'px';//index=0;
}


nextBtn.addEventListener('click',goNext);

function goNext(){
	console.log(index);
	console.log('goNext');
	index++;
	if (index === countItems) {
		index=0;
	}
	carousel.style.left= -index*803+'px';//index=0;
}

	