function calculate(val){
	var show = document.getElementById("show");
	var str = show.innerHTML;
	str += val;
	show.innerHTML = str;
}

function myClear(){
	var show = document.getElementById("show");
	show.innerHTML = "";
}

function equal(){
	var show = document.getElementById("show");
	var str = show.innerHTML;
	try{
		show.innerHTML = eval(str);
	}catch(e){
		alert("Wrong Syntax.");
	}
}