function openAlert(obj, mess) {
	obj.area.value = mess;
}

var stop = true;

function startIncrease() {	
	stop = true;
	increaseWidth();
}

function increaseWidth() {
	var width = document.assImg.width;
	if (width < 500 & stop) {
		document.assImg.width = width + 1;
		setTimeout("increaseWidth()", 1);
	}
}

function defaultWidth() {
	stop = false;
	document.assImg.width = 100;
}