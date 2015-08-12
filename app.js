'use strict';



function openFolderDialog () {
	var inputField = document.querySelector('#folderSelector');
	inputField.addEventListener('change', function () {
		var folderPath = this.value;
		alert('Folder path is ' + folderPath);
	});
	inputField.click();
}



function bindSelectFolderClick () {
	var button = document.querySelector('#select_folder');
	button.addEventListener('click', function () {
		openFolderDialog();
	});
}



// Runs when the browser has loaded the page
//
window.onload = function () {
	bindSelectFolderClick();
};