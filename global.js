function Start(){
	
}

function LoadOleg(){
	if(document.getElementById("lOProgress").value < document.getElementById("lOProgress").max){
		document.getElementById("lOProgress").style.display = "block";
		document.getElementById("lOButton").style.display = "none";
		document.getElementById("lOProgress").value = parseInt(document.getElementById("lOProgress").value) + 1;
		setTimeout(LoadOleg, 1);
	}
	else{
		document.getElementById("lOProgress").style.display = "none";
		document.getElementById("lOFinished").style.display = "block";
	}
}