UI.registerHelper('createExcerpt', function(e, tlength) {
	var str = e;
	var length = tlength;
	if(str.length > length) {
		return str.substr( 0, length ) + "...";
	} else {
		return str;
	}
});