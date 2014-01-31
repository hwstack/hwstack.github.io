function doThing(id){
	document.cookie = "isChecked" + id + "=" + (document.getElementById(id).checked ? 1 : 0) + "; expires=Thu, 3 Jul 2014 12:00:00 GMT";
}