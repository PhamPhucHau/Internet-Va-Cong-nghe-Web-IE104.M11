var object={
	hoten:document.getElementById("hovaten"),
	sdt:document.getElementById("sdt"),
	thongbaosdt:document.getElementById("thongbaosdt"),
	thongbaohoten:document.getElementById("thongbaohoten"),
	email:document.getElementById("email"),
	thongbaoemail:document.getElementById("thongbaoemail"),
	gopy:document.getElementById("gopy"),
	gui:document.getElementById("gui"),
	thongbaogopy:document.getElementById("thongbaogopy"),
	form:document.getElementById("thongtinlienlac")};

object.hoten.onblur=function(){
	if(object.hoten.value=="" || object.hoten.value==null)
	{
		thongbaohoten.innerText="Họ và tên không được phép để rỗng";
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
	object.gui.disabled=false;
	}
	
object.sdt.onblur=function(){
	if(sdt.value=="" || sdt.value==null)
	{
		thongbaosdt.innerText="Số điện thoại không được phép để rỗng";
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
	object.gui.disabled=false;}// JavaScript Document
	
//Kiem tra email

object.email.onblur=function(){
	if(object.email.value=="" || object.email.value==null)
	{
		thongbaoemail.innerText="Email không được phép để rỗng";
		object.gui.disabled=true;
		
		}
		else
		{
			var reunicode = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
			if(!reunicode.test(object.email.value)){
			object.thongbaoemail.innerText="Email không hợp lệ";
			object.gui.disabled=true;
			}
		
		}
		}
	
	
object.email.onfocus=function(){
	object.thongbaoemail.innerText="";
	object.gui.disabled=false;}
//Kiem tra gop y

	object.gopy.onblur=function(){
	if(object.gopy.value=="" || object.gopy.value==null)
	{
		thongbaogopy.innerText="Góp ý không được phép để trống";
		object.gui.disabled=true;
		
		}

		}
	
	
object.gopy.onfocus=function(){
	object.thongbaogopy.innerText="";
	object.gui.disabled=false;}
object.form.onsubmit=function(){
	var result="Họ và tên: " + object.hoten.value+"\n Số điện thoai: "+ object.sdt.value+"\n Email: "+ object.email.value+"\n Góp ý: "+object.gopy.value;
	alert(result);  
	}