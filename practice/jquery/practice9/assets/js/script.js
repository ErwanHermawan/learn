var exjson = {
  handleSetData: function() {
    $.get('http://localhost/learn/practice/jquery/json-data/data.json', function(data) {
      content = '';
      $.each(data, function(idx, v) {
        content += '<div class="col-4">'+ 
                    '<div class="team__item js-popup" data-name="'+ v.name +'" data-photo="'+ v.photo +'" data-position="'+ v.position +'" > '+
                      '<div class="team__item_img">'+
                        '<img src="http://localhost/learn/images/uhkti/'+ v.photo +'" alt="'+ v.name +'" /> '+
                      '</div>'+
                      '<div class="team__item_txt">'+
                        '<h3 class="team__item_txt_name">'+ v.name +'</h3>'+
                        '<p class="team__item_txt_position">'+ v.position +'</p>'+
                      '</div>'+
                    '</div>'+
                  '</div>';
      });
      
      $('.js-list').append(content);
    });  
  },

  init: function() {
    exjson.handleSetData();
  }
}

exjson.init();