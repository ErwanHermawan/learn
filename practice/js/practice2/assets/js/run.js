var dataBarang = [
  {
    "name": "Kopi Kapal Api",
    "price": 1500
  },
  {
    "name": "Buku",
    "price": 24000
  },
  {
    "name": "Pencil",
    "price": 3000
  },
  {
    "name": "Penghapus",
    "price": 1000
  },
];

function formatRupiah(number, prefix="Rp. ") {
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

  function keluaranData(val, i, data){
  var content = '';
    content += '<tr>' +
                '<td>'+ (i+1)+'.' +'</td>' +
                '<td>'+ val.name +'</td>' +
                '<td>'+ formatRupiah(val.price) +'</td>' +
              '</tr>';
  }
  dataBarang.forEach(keluaranData);

  document.getElementById('data').innerHTML = content;