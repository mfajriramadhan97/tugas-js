let tanya = true;

while (tanya){
// Player
let player = prompt ('pilih : Gajah, Semut, Orang');

let comp = Math.random();

if(comp < 0.34){
    comp = 'Gajah';
}else if(comp >= 0.34 && comp <= 0.67){
    comp = 'Semut';
}else{
    comp = 'Orang';
}

//rules

let hasil = '';

if(player == comp){
    hasil = 'Anda Seri !';
} else if ( player == 'Gajah'){
    if (comp == 'Orang'){
        hasil = 'Anda Menang !';
    } else {
        hasil = 'Anda Kalah !';
    }
} else if ( player == 'Semut'){
    if(comp == 'Orang'){
        hasil = 'Anda Kalah !';
    } else {
        hasil = 'Anda Menang !';
    }
} else if ( player == 'Orang'){
    if(comp == 'Gajah'){
        hasil = 'Anda Kalah !';
    } else {
        hasil = 'Anda Menang !';
    }
} else {
    hasil = 'Anda memasukan pilihan yang salah!';
}

//Hasil
alert ('Kamu memilih : ' + player + ' dan komputer memilih : ' + comp + '\nMaka Hasilnya : ' + hasil);

tanya = confirm ('Apakah anda ingin bermain lagi ?');

};

alert ('Terima kasih telah bermain !');