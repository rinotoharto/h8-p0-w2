function konversiMenit(menit) {
    var jam = Math.floor(menit / 60);
    var  mm = menit % 60;

    if(String(mm).length === 1){
        mm = "0" + mm;
    }

    var waktu = jam + " : " + mm;
    return waktu
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00