// Soal 1 Melakukan Looping Menggunakan While

var i = 2;
var string = ' - i love coding';
var str = ' - I will become fullstack developer'

console.log('LOOPING PERTAMA');
while(i <=  20) {
    console.log(i + string);
    i += 2;
}
i -= 2;

console.log('LOOPING KEDUA')
while(i >= 2) {
    console.log(i + string);
    i -= 2;
}

// Soal 2 Melakukan Looping Menggunakan For

var string2 = ' - i love coding';
var str2 = ' - I will become fullstack developer'


console.log('LOOPING PERTAMA')
for(i = 1; i <= 20; i++) {
    console.log(i + string2);
}
console.log('LOOPING KEDUA')
for(i = 20; i > 0; i--) {
    console.log(i + str2)
}

// Soal 3 Angka Ganjil dan Genap


var i = 1;
var j = 1;
var k = 1;
var l = 1;

// Perulangan Ganjil dan Genap 
while(i <= 100) {
    if(i % 2 == 0){
        console.log(i + ' GENAP')
    } else {
        console.log(i + ' GANJIL')
    }
    i++
}

// Perulangan pertambahan 2
while(j <= 100) {
    if(j % 3 == 0){
        console.log(j + ' KELIPATAN 3')
    } else {
        console.log('')
    }
    j += 2
}

// Perulangan pertambahan 5
while(k <= 100) {
    if(k % 6 == 0){
        console.log(k + ' KELIPATAN 6')
    } else {
        console.log('')
    }
    k += 5
}

// Perulangan pertambahan 9
while(l <= 100) {
    if(l % 10 == 0){
        console.log(l + ' KELIPATAN 10')
    } else {
        console.log('')
    }
    l += 9
}