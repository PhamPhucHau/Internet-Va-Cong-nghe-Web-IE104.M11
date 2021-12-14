// JavaScript Document


var firstbgcarousel=new bgCarousel({
	wrapperid: 'mybgcarousel', //ID of blank DIV on page to house carousel
	imagearray: [
		['images/g1.jpg', '<h2>Hamberger</h2>'], //["image_path", "optional description"]
		['images/g2.jpg', '<h2>Pizza</h2>'],
		['images/p1.jpg', '<h2>Nước ép</h2>'],
		['images/thachcachua.jpg', '<h2>Rau cau.</h2>'] //<--no trailing comma after very last image element!
	],
	displaymode: {type:'auto', pause:3000, cycles:2, stoponclick:false, pauseonmouseover:true},
	navbuttons: ['images/left1.gif', 'images/right1.gif', 'up.gif', 'down.gif'], // path to nav images
	activeslideclass: 'selectedslide', // CSS class that gets added to currently shown DIV slide
	orientation: 'h', //Valid values: "h" or "v"
	persist: true, //remember last viewed slide and recall within same session?
	slideduration: 500 //transition duration (milliseconds)
})
var firstbgcarousel=new bgCarousel({
	wrapperid: 'mybgcarousel1', //ID of blank DIV on page to house carousel
	imagearray: [
		['images/g1.jpg', '<h2>Autumn Day</h2>The sun peaks through the trees, a knife that cuts through the chill, crisp air.'], //["image_path", "optional description"]
		['images/g2.jpg', '<h2>Wind Chime</h2>The bellweather of the sky, the chime speaks of impending turmoil.'],
		['images/p1.jpg', 'The scent of spring invigorates her as she inhales whilst the warm breeze brings a wave of tranquility.'],
		['images/thachcachua.jpg', 'Alone and Lonliness- Peace and Inner Struggle'] //<--no trailing comma after very last image element!
	],
	displaymode: {type:'auto', pause:3000, cycles:2, stoponclick:false, pauseonmouseover:true},
	navbuttons: ['images/left1.gif', 'images/right1.gif', 'up.gif', 'down.gif'], // path to nav images
	activeslideclass: 'selectedslide', // CSS class that gets added to currently shown DIV slide
	orientation: 'h', //Valid values: "h" or "v"
	persist: true, //remember last viewed slide and recall within same session?
	slideduration: 500 //transition duration (milliseconds)
})
