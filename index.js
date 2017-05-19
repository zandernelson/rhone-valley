$(document).ready(function(){

	var imgArr = [
	"<img class='mapImage' src='./assets/image1.png'>",
	"<img class='image' src='./assets/hill-of-hermitage.jpg' >",
	// "<img class='image' src='./assets/chap-4.jpg' >",
	"<img class='image' src='./assets/581911.jpg' >",
	"<img class='image' src='./assets/image2.jpg'>",
	"<img class='image' src='./assets/image3.jpg'>"

	]

	// for(var i=0; i<imgArr.length; i++) {
	// 	console.log(imgArr[i])
	// 	i == imgArr.length - 1 ? i = 0 : null
	// 	set
	// }


	// function imageLoop(){
	// 	var count = 0
	// 	var interval = 2000
	// 	setInterval(function(){
	// 		$('.root').html(imgArr[count])
	// 		count++
	// 		count == imgArr.length ? count = 0 : null
	// 	}, interval)
	// }

	// function imageLoop() {
	// 	var count = 0
	// 	var interval = 2000
	// 	setInterval(function() {
	// 		$('.root').html(imgArr[count])
	// 		count++
	// 		count == imgArr.length ? count = 0 : null
	// 	}, interval)
	// }

	function timeoutLoop(imgIndex){
		console.log(imgIndex)
		$('.root').html(imgArr[imgIndex])
		if(imgIndex == 0){
			setTimeout(function(){
				imgIndex == imgArr.length - 1 ? imgIndex = 0 : imgIndex++
				timeoutLoop(imgIndex)
			}, 60000)
		}	else {
			setTimeout(function(){
				imgIndex == imgArr.length - 1 ? imgIndex = 0 : imgIndex++
				timeoutLoop(imgIndex)
			}, 20000)
		}
	}

timeoutLoop(0)


})
