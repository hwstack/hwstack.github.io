function doThing(id){
	
	var isChecked = document.getElementById(id).checked;
	
	switch(isChecked){
		
	case(true):
		document.cookie="isChecked" + id + "=1; expires=Thu, 3 Jul 2014 12:00:00 GMT"
		break;
	case(false):
		document.cookie"isChecked" + id + "=0; expires =Thu, 3 Jul 2014 12:00:00 GMT"
		break;
	}
	
	
}