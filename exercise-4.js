var tanggal = 27; // isi tanggal dengan angka antara 1 - 31
var bulan = 2; // isi bulan dengan angka antara 1 -12
var tahun = 2020; // isi tahun dengan angka antara 1900 - 2200

switch (true) {
    case tanggal > 0 && tanggal <= 31:       
        break;
    default:
        tanggal = false;
}

switch(bulan) {
    case 1:
        bulan = 'Januari';
        break;
    case 2:
        bulan = 'Februari';
        break;
    case 3:
        bulan = 'maret';
        break;
    case 4:
        bulan = 'April';
        break;
    case 5:
        bulan = 'Mei';
        break;
    case 6:
        bulan = 'Juni';
        break;
    case 7:
        bulan = 'Juli';
        break;
    case 8:
        bulan = 'Agustus';
        break;
    case 9:
        bulan = 'September';
        break;
    case 10:
        bulan = 'Oktober';
        break;
    case 11:
        bulan = 'November';
        break;
    case 12:
        bulan = 'Desember';
        break;
    default:
        bulan = false;
}

switch (true) {
    case tahun >= 1900 && tahun <= 2200:       
        break;
    default:
        tahun = false;
}
 console.log(tanggal + " " + bulan + " " + tahun)
