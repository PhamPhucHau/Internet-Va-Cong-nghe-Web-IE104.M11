// JavaScript Document


var firstbgcarousel=new bgCarousel({
	wrapperid: 'mybgcarousel', //ID of blank DIV on page to house carousel
	imagearray: [
		['images/chan_ga_nuong_mat_ong.jpg', '<a href="MonNuong.html">Chân gà nướng</a>'], //["image_path", "optional description"]
		['images/lau_thai_chua_cay.jpg', '<a href="MonLau.html">Lẩu thái</a>'],
		['images/cu_cai_nhoi_thit_hap.png', '<a href="MonHap.html">Lẩu thái</a>'],
		['images/suon_nuong_mat_ong.jpg', '<a href="MonNuong.html">Chân gà nướng</a>'] //<--no trailing comma after very last image element!
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
		['images/nuoc_ep_dau.jpg', '<a href="ThucUong.html">Nước Ép Dâu</a>'], //["image_path", "optional description"]
		['images/cup_cake.jpg', '<a href="Banh.html">Nước Ép Dâu</a>'],
		['images/nuoc_cam.jpg', '<a href="ThucUong.html">Nước Cam</a>'],
		['images/pancake.jpg', '<a href="Banh.html">Bánh PanCake</a>'] //<--no trailing comma after very last image element!
	],
	displaymode: {type:'auto', pause:3000, cycles:2, stoponclick:false, pauseonmouseover:true},
	navbuttons: ['images/left1.gif', 'images/right1.gif', 'up.gif', 'down.gif'], // path to nav images
	activeslideclass: 'selectedslide', // CSS class that gets added to currently shown DIV slide
	orientation: 'h', //Valid values: "h" or "v"
	persist: true, //remember last viewed slide and recall within same session?
	slideduration: 500 //transition duration (milliseconds)
})
