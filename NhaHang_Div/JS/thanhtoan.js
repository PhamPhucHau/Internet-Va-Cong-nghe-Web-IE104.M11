// JavaScript Document
var object={
	hoten:document.getElementById("hoten"),
	sdt:document.getElementById("sdt"),
	thongbaosdt:document.getElementById("thongbaosdt"),
	thongbaohoten:document.getElementById("thongbaohoten"),
	diachi:document.getElementById("diachi"),
	thongbaodiachi:document.getElementById("diachi")}

object.hoten.onblur=function(){
	if(hoten.value=="" || hoten.value==null)
	{
		thongbaohoten.innerText="Họ và tên không được phép để trống"
		
		}
		else
		{
			var reunicode = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
			if(!reunicode.test(object.hoten.value)){
			object.thongbaohoten.innerText="Tên không hợp lệ";
			}
		
		}
		}
	
	
object.hoten.onfocus=function(){
	object.thongbaohoten.innerText="";}
	
object.sdt.onblur=function(){
	if(sdt.value=="" || sdt.value==null)
	{
		thongbaosdt.innerText="Số điện thoại không được phép để trống"
		
		}
		else
		{
			var reunicode =/(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
			if(!reunicode.test(object.sdt.value)){
			object.thongbaosdt.innerText="Số điện thoại không hợp lệ";
			}
		
		}
	}
object.sdt.onfocus=function(){
	object.thongbaosdt.innerText="";}
//Dia chi

object.diachi.onblur=function(){
	if(diachi.value=="" || diachi.value==null)
	{
		thongbaodiachi.innerText="Địa chỉ không được phép để trống"
		
		}
		
	}
object.diachi.onfocus=function(){
	object.thongbaodiachi.innerText="";}
