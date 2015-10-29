	var previousBtn= document.getElementsByClassName('previousBtn')[0];
	previousBtn.addEventListener('click',goPrevious);

	function goPrevious(){
		console.log('goPrevious');
	}

	var nextBtn= document.getElementsByClassName('nextBtn')[0];
	nextBtn.addEventListener('click',goNext);

	function goNext(){
		console.log('goNext');
	}
	