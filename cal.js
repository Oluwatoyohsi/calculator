function designate(a){
	forms.display.value += a;
}
function del(){
	var war= forms.display.value;
	forms.display.value = war.substring(0, war.length-1);
}
function ac(){
	forms.display.value = "";
}
function equal(){
	forms.display.value = eval(forms.display.value);
}
function sqrt(){
	 var qwerty = forms.display.value;
	 var store = Math.sqrt(qwerty);
	 forms.display.value = store;
}
function per(){
	var percentage = forms.display.value;
	var temp = eval(percentage);
	var anpercent = temp*100 + "%";
	forms.display.value = anpercent;
}

function rad(){
	var radian = forms.display.value;
	var radia = (radian*180)/3.14;
	forms.display.value = radia;
}
function square(){
	var squared = forms.display.value;
	var redd = Math.pow(squared,2);
	forms.display.value = redd;
}
function logarithm(){
	var logarit = forms.display.value;
	var legit = Math.log10(logarit);
	forms.display.value = legit;
}
function lan(){
	var lang = forms.display.value;
	var lan = Math.log(lang);
	forms.display.value = lan;
}
function pi(){
	var pai = forms.display.value;
	var paai = pai * 3.141;
	forms.display.value = paai;
}
function sine(){
	var trignometry = forms.display.value;
	var result = Math.sin(trignometry);
	forms.display.value = result;
}
function cos(){
	var trignometry = forms.display.value;
	var result = Math.cos(trignometry);
	forms.display.value = result;
}
function tan(){
	var trignometry = forms.display.value;
	var result = Math.tan(trignometry);
	forms.display.value = result;
}


function asine(){
	var trignometry = forms.display.value;
	var result = Math.asin(trignometry);
	forms.display.value = result;
}
function acos(){
	var trignometry = forms.display.value;
	var result = Math.acos(trignometry);
	forms.display.value = result;
}
function atan(){
	var trignometry = forms.display.value;
	var result = Math.atan(trignometry);
	forms.display.value = result;
}