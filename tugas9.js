/*
-Buatlah sebuah variabel object versi teman teman.
-Tampilkan berikan nilai pada masing masing properti objek yang teman teman buat
-Setelah itu tampilkan objectnya dengan perulangan for in.
*/

function callFunction1(){
  var merkMobil = {
    nama1  : "Toyota",
    nama2  : "Suzuki",
    nama3  : "BMW",
    nama4  : "Wuling",
  }
  for(var x in merkMobil){
    console.log(merkMobil[x])
  }
}
callFunction1()
