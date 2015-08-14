'use strict';



// Dependencies
//
var fs 		= require('fs');
var mime    = require('mime');
var path 	= require('path');



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



function findAllFiles (folderPath, cb) {
	fs.readdir(folderPath, function (err, files) {
		if (err) { return cb(err, null); }
		cb(null, files);
	});
}



var imageMimeTypes = [
	'image/bmp',
	'image/gif',
	'image/jpeg',
	'image/png',
	'image/pjpeg',
	'image/tiff',
	'image/webp',
	'image/x-tiff',
	'image/x-windows-bmp'
];



function findImageFiles (files, folderPath, cb) {
	var imageFiles = [];
	files.forEach(function (file) {
		var fullFilePath = path.resolve(folderPath,file);
		var extension = mime.lookup(fullFilePath);
		if (imageMimeTypes.indexOf(extension) !== -1) {
			imageFiles.push({name: file, path: fullFilePath});
		}
		if (files.indexOf(file) === files.length-1) {
			cb(imageFiles);
		}
	});
}



function addImageToPhotosArea (file) {
	var photosArea = document.getElementById('photos');
	var template = document.querySelector('#photo-template');
	template.content.querySelector('img').src = file.path;
	template.content.querySelector('img').setAttribute('data-name',file.name);
	var clone = window.document.importNode(template.content, true);
    photosArea.appendChild(clone);
}



function displayPhotoInFullView (photo) {
	var filePath = photo.querySelector('img').src;
	var fileName = photo.querySelector('img').attributes[1].value;
	document.querySelector('#fullViewPhoto > img').src = filePath;
	document.querySelector('#fullViewPhoto > img').setAttribute('data-name', fileName);
	document.querySelector('#fullViewPhoto').style.display = 'block';
}



function bindClickingOnAPhoto (photo) {
	photo.onclick = function () {
		displayPhotoInFullView(photo);
	};
}



function bindClickingOnAllPhotos () {
	var photos = document.querySelectorAll('.photo');
	for (var i=0;i<photos.length;i++) {
		var photo = photos[i];
		bindClickingOnAPhoto(photo);
	}
}



// Runs when the browser has loaded the page
//
window.onload = function () {
	bindSelectFolderClick(function (folderPath) {
		hideSelectFolderButton();
		findAllFiles(folderPath, function (err, files) {
			if (!err) {
				findImageFiles(files, folderPath, function (imageFiles) {
					imageFiles.forEach(function (file, index) {
						addImageToPhotosArea(file);
						if (index === imageFiles.length-1) {
							bindClickingOnAllPhotos();
						}
				    });
				});
			}
		});
	});
};