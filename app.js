'use strict';



// Dependencies
//
var fs = require('fs');



function openFolderDialog (cb) {
	var inputField = document.querySelector('#folderSelector');
	inputField.addEventListener('change', function () {
		var folderPath = this.value;
		cb(folderPath);
	});
	inputField.click();
}



function bindSelectFolderClick (cb) {
	var button = document.querySelector('#select_folder');
	button.addEventListener('click', function () {
		openFolderDialog(cb);
	});
}



function hideSelectFolderButton () {
	var button = document.querySelector('#select_folder');
	button.style.display = 'none';	
}



function findAllImageFiles (folderPath, cb) {
	fs.readdir(folderPath, function (err, files) {
		if (err) { return cb(err, null); }
		cb(null, files);
	});
}



// Runs when the browser has loaded the page
//
window.onload = function () {
	bindSelectFolderClick(function (folderPath) {
		hideSelectFolderButton();
		findAllImageFiles(folderPath, function (err, files) {
			console.log(err);
			console.log(files);
		});
	});
};