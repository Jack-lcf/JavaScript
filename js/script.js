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

function setText(form) {
	var choice = form.sel.value;
	var res = "text";
	switch (choice) {
	case '1':
		res = "one";
		break;
	case '2':
		res = "two";
		break;
	case '3':
		res = "three";
		break;
	case '4':
		res = "four";
		break;
	case '5':
		res = "five";
		break;
	default:
		res = "no one selected";
		break;
	}
	form.area.value = res;
}

function calculate() {
	var start = 1 * document.culc.startNumber.value;
	var end = 1 * document.culc.endNumber.value;
	var res = 0;
	for (var i = start; i <= end; i++) {
		res += i;
	}
	document.culc.resultArea.value = res;
}

function showDate() {
	const
	DELIMITER = ":";
	const
	SPACE = " ";
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var d = date.getDay() + 1;
	var mon = date.getMonth();
	var y = date.getFullYear();
	var time = d + SPACE + formatMonth(mon) + SPACE + y + " - " + formatTime(h)
			+ DELIMITER + formatTime(m) + DELIMITER + formatTime(s);
	document.date.datatArea.value = time;
}

function formatTime(time) {
	if (time < 10) {
		return "0" + time;
	} else {
		return time;
	}
}

function formatMonth(m) {
	var months = new Array("January", "February", "March", "April", "May",
			"June", "July", "August", "September", "October", "November",
			"December");
	return months[m];
}

function countWord() {
	var text = document.findWord.textarea.value;
	var word = document.findWord.searchWord.value;
	var size = word.length;
	var count = 0;
	if (size != 0) {
		var i = 0;
		while (i < (text.length - 1)) {
			var ch = text.substr(i,size);
			if(ch == word ) {
				count+=1;
				i+=(size-1);
			} else {
				i++;
			}
		}
	}
	document.findWord.numOfWord.value = count;
}

function isMail() {
	var mail = document.mail.inputMail.value;
	var mail_pattern = /[\w]+@[0-9a-z]+\.[a-z]{2,4}/i;
	var res = mail_pattern.test(mail);
	var span = document.getElementById('result');
	if(res == true) {
		span.style.display = 'inline';
		span.innerHTML = 'Right :)';
	} else {
		span.style.display = 'inline';
		span.innerHTML = 'Wrong }:(';
	}
}