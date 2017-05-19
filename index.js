$(document).ready(function(){

	var imgArr = [
	"<img class='mapImage' src='./assets/appellation-map.png'>",
	"<img class='image' src='./assets/hill-of-hermitage.jpg' >",
	"<img class='image' src='./assets/chap-4.jpg' >",
	"<img class='image' src='./assets/581911.jpg' >"

	]

	// for(var i=0; i<imgArr.length; i++) {
	// 	console.log(imgArr[i])
	// 	i == imgArr.length - 1 ? i = 0 : null
	// 	set
	// }


	function imageLoop(){
		var count = 0
		var interval = 20000
		setInterval(function(){
			$('.root').html(imgArr[count])
			count++
			count == imgArr.length ? count = 0 : null
		}, interval)
	}


imageLoop()

})
