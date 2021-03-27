var dataProduct = [
  {
    title: 'Bantal Guling Anak Motif Cowok Termurah - Spiderman',
    image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/10/9/4cdf7c71-83bb-4016-9cbe-685d220bb5e8.jpg.webp',
    harga: 45000
  },
  {
    title: 'Cat Bed - Kasur kucing bentuk donat dengan bulu yang lembut dan mewah - Beige, S',
    image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/10/24/492507a3-19b7-4a60-acd9-06cf48334849.jpg.webp',
    harga: 255000,
    discount: 30
  },
  {
    title: 'Sarung Sandaran Tempat Tidur Motif Cover Kepala Tempat Tidur - Scandinavian, Size S',
    image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/6/30/0ecbc496-c0c9-43e8-bf00-2e21d5d8525e.jpg.webp',
    harga: 140000
  },
  {
    title: 'Rubik Piramid Cube 3x3x3 Black Series Yuxin',
    image: 'https://images.tokopedia.net/img/cache/200-square/product-1/2020/4/22/25185711/25185711_f55b20bc-a835-483f-ba0a-d8402a1270ba_785_785.webp',
    harga: 150000,
    discount: 20
  }
];

function formatRupiah(number, prefix="Rp ") {
  var _split = String(number).split(','),
  _mod = _split[0].length % 3,
  _idr = _split[0].substr(0, _mod),
  _thousands = _split[0].substr(_mod).match(/\d{3}/gi),
  _separator = '',
  _result;

    // if thousands
  if (_thousands) {
    _separator = _mod ? '.' : '';
    _idr += _separator + _thousands.join('.');
  }

  _idr = (_split[1] != undefined ? _idr + ',' + _split[1] : _idr);
  _result = (prefix != undefined ? prefix + _idr : _idr);
  return _result;
}

function hargaTertinggi() {
  dataProduct.sort(function(a,b) {
    return b.harga - a.harga
  });
}

function hargaTerendah() {
  dataProduct.sort(function(a,b) {
    return a.harga - b.harga
  });
}

function keluaranData() {
  var content = '';
   dataProduct.forEach(function(val) {
    price = val.harga;
    content += 
    '<div class="col-3">' + 
      '<div class="product-item">' +
        '<a href="#" class="box-link"></a>' +
        '<div class="product-image">' + '<img src="'+val['image']+'" alt="lorem">' + '</div>' +
        '<div class="product-text">' +
          '<p class="product-title">' + val['title'] + '</p>' +
          '<h3 class="product-price">' + formatRupiah(price) + '</h3>' +
        '</div>' +
      '</div>' +
    '</div>';
  });
  document.getElementById('productList').innerHTML = content;
}

var harga = document.getElementById('harga');
harga.onchange = function() {
  if (this.value == 1) {
    hargaTertinggi();
  } else if (this.value == 2) {
    hargaTerendah();
  } 
  keluaranData();
}

keluaranData();
