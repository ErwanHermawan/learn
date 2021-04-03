function formatRupiah(angka, prefix="Rp. ") {
  var number_string = angka.replace(/[^,\d]/g, "").toString(),
  split = number_string.split(","),
  sisa = split[0].length % 3,
  rupiah = split[0].substr(0, sisa),
  ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? "Rp " + rupiah : "";
}

function cleanNumber(str) {
  return str.split('.').join('').split(' ').join('').split('Rp').join('');
}

var harga = document.getElementById('harga');
var diskon = document.getElementById('diskon');
var total = document.getElementById('total');
var hasir = document.getElementById('hasil');

harga.oninput = function(e) {
  var value = this.value;
  formatHarga = formatRupiah(value);
  harga.value = formatHarga;
}

diskon.oninput = function(e) {
  var discountPrice = this.value;
  var countDiskon = cleanNumber(harga.value)-(cleanNumber(harga.value)*diskon.value / 100);
  diskon.value = discountPrice;
  formatTotal = countDiskon.toString();
  total.value = formatRupiah(formatTotal);
}

hasil.onclick = function(e){
  document.getElementById('hasilHarga').innerText = 'Harga : ' + harga.value;
  document.getElementById('hasilDiskon').innerText = 'Diskon : ' + diskon.value  + '%';
  document.getElementById('subTotal').innerText = 'Total : ' + harga.value;
}
