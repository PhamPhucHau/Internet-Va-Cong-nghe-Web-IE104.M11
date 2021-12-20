// JavaScript Document
var object={
	hoten:document.getElementById("hoten"),
	sdt:document.getElementById("sdt"),
	thongbaosdt:document.getElementById("thongbaosdt"),
	thongbaohoten:document.getElementById("thongbaohoten"),
	diachi:document.getElementById("diachi"),
	thongbaodiachi:document.getElementById("diachi"),
	gui:document.getElementById("gui"),
	form:document.getElementById("thongtinthanhtoan")}

object.hoten.onblur=function(){
	if(hoten.value=="" || hoten.value==null)
	{
		thongbaohoten.innerText="Họ và tên không được phép để trống";
		object.gui.disabled=true;
		
		}
		else
		{
			var reunicode = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
			if(!reunicode.test(object.hoten.value)){
			object.thongbaohoten.innerText="Tên không hợp lệ";
			object.gui.disabled=true;
			}
		
		}
		}
	
	
object.hoten.onfocus=function(){
	object.thongbaohoten.innerText="";
	object.gui.disabled=false;}
	
object.sdt.onblur=function(){
	if(sdt.value=="" || sdt.value==null)
	{
		thongbaosdt.innerText="Số điện thoại không được phép để trống";
		object.gui.disabled=true;
		
		}
		else
		{
			var reunicode =/(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
			if(!reunicode.test(object.sdt.value)){
			object.thongbaosdt.innerText="Số điện thoại không hợp lệ";
			object.gui.disabled=true;
			}
		
		}
	}
object.sdt.onfocus=function(){
	object.thongbaosdt.innerText="";
	object.gui.disabled=false;}
//Dia chi

object.diachi.onblur=function(){
	if(diachi.value=="" || diachi.value==null)
	{
		thongbaodiachi.innerText="Địa chỉ không được phép để trống";
		object.gui.disabled=true;
		
		}
		
	}
object.diachi.onfocus=function(){
	object.thongbaodiachi.innerText="";
	object.gui.disabled=false;}
object.gui.onclick=function(){
	var result="Họ và tên: " + object.hoten.value+"\n Số điện thoai: "+ object.sdt.value+"\n Địa chỉ: "+object.diachi.value;
	alert(result); 
	}
	var diachi={
	tinh:document.getElementById('chontinh'),
	huyen:document.getElementById("chonhuyen")
}
var options =
[
  {
    "text"  : "Thành phố Hồ Chí Minh",
    "value" : 0,
	"selected" : true
  },
  {
    "text"     : "Tỉnh Long An",
    "value"    : "1",
    
  },
  {
    "text"  : "Tỉnh Bà Rịa - Vũng Tàu",
    "value" : "2"
  }
];


for(var i = 0, l = options.length; i < l; i++){
  var option = options[i];
  diachi.tinh.options.add( new Option(option.text, option.value, option.selected) );
}

var dshuyen=
[
[
{
    "text"  : "Quận 1",
    "value" : "1",
	"selected" : true
  },
  {
    "text"     : "Quận 2",
    "value"    : "2",
    
  },
  {
    "text"  : "Quận 3",
    "value" : "3"
  }
],
[
{
    "text"  : "Huyện Tân Thanh",
    "value" : "1",
	"selected" : true
  },
  {
    "text"     : "Huyện Tân Trụ",
    "value"    : "2",
    
  },
  {
    "text"  : "Huyện Mộc Hóa",
    "value" : "3"
  }
],
[
{
    "text"  : "Huyện Châu Đức",
    "value" : "1",
	"selected" : true
  },
  {
    "text"     : "Thành Phố Bà Rịa",
    "value"    : "2",
    
  },
  {
    "text"  : "Thành Phố Vũng Tàu",
    "value" : "3"
  }
]
]
chonhuyen()
diachi.tinh.onchange=function(){
	while (diachi.huyen.options.length) {
    diachi.huyen.remove(0);
  }
	chonhuyen();};
function chonhuyen(){
for(var i = 0, l = dshuyen[diachi.tinh.value].length; i < l; i++){
   var option = dshuyen[diachi.tinh.value][i];
  diachi.huyen.options.add( new Option(option.text, option.value, option.selected) );
}
}