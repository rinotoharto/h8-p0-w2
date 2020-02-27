// Soal 1 Menyusun barisan bintang

var rows1 = 5

for(var i = 0 ; i < rows1; i++) {
    console.log('*');
}

// Soal 2 Menyusun barisan bintang dengan nested looping

var rows2 = 5;
var str = '*';

while(rows2 > 0){
  while(str.length < rows2){
    str += '*';
    str.length ++;
  }
  console.log(str);
  rows2--;
}


// Soal 3 Menyusun barisan tangga bintang dengan nested looping

var rows3 = 5;

for (var i = 1; i <= rows3; i++) {
    var str = '';
    for (var j = 1; j <= i; j++) {	
    str += '*';
	}
	console.log(str);
}
