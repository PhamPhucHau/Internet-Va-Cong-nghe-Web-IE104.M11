document.getElementById("giohang").onmouseover= function() {
	document.getElementById("anhgiohang").src="images/GioHang1.png";
	}
document.getElementById("giohang").onmouseout= function() {
	document.getElementById("anhgiohang").src="images/GioHang.png";
	}
	
var object={
	tru:document.getElementById("giam"),
	tang:document.getElementById("tang"),
	soluong:document.getElementById("soluong"),
	thanhtien:document.getElementById("thanhtien"),
	dongia:document.getElementById("dongia")
	};

object.tru.onclick=function(){
	if(soluong.value<=1)
	{alert("Số lượng không thể nhỏ hơn 1");}
	else{
	(soluong.value--);
	object.thanhtien=soluong.value*parseInt(dongia.innerText);
	document.getElementById("thanhtien").innerText=object.thanhtien;
	}};
object.tang.onclick=function(){soluong.value++;
object.thanhtien=soluong.value*parseInt(dongia.innerText);
document.getElementById("thanhtien").innerText=object.thanhtien;}
 object.thanhtien=soluong.value*parseInt(dongia.innerText);
document.getElementById("thanhtien").innerText=object.thanhtien;