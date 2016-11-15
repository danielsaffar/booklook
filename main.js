//Our app will be fairly simple... the user will enter a bunch of book
//information along with how many minutes a day they read, and it will 
//display their book along with some information about how long it will
//take them to read it (please assume a user reads 1 page per minute). 
//To be honest, at the moment it's a little (well actually, a lot) useless,
//but we've got all week to make it awesome.


 //global variables first
 var books=[];
  
 //functions second
 var addbook= function () {
 	//create obj


 	var book=  {
 		  name: "name" ,
 		  author: "author" ,
 		  comments: "coments" ,
 		  image: "image url",
 		  numberofpages:"npages",
 		  minutesperday:"minperday",
 	}

 	//push to books 
 	books.push(book)
 } 


 //push the array into the html

//var source = $('#book-template').html();
//var template = Handlebars.compile(source)
//var newHTML = template({item: "bread", price: "15"});
//$('.books').append(newHTML);






 //btn clicks last
$('button').on('click',function() {
    alert('yo')
	//addbook();

});