var id,password;
id=prompt("아이디 입력");
if(id=="admin"){
	alert ("관리자입니다.");
	password=prompt("비밀번호입력")
	if(password=="1234"){
		//location.href="http://www.naver.com";
		location.href="login.html"
	}else{
		//location.href="http://www.daum.net"
		location.href="error.html"
	}
}else{
	alert("Get the fuck out")
	location.href="error.html"
}