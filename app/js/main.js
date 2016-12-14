jQuery(document).ready(function(){





  $(window).scroll(function() {
    $(".appearance").each(function(){
      var positionElements = $(this).offset().top;
      var windowTop = $(window).scrollTop();
      if (positionElements < windowTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

});

  var b = document.getElementById("myButton");
  b.addEventListener ('click', uploadPictures, false);

  function uploadPictures() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.onreadystatechange = function() {

      if (xhr.readyState == 4 && xhr.status == 200) {
        var getData = allTogether(JSON.parse(xhr.responseText));
      }
    };

    xhr.open('GET', 'info.json', true);
    xhr.send(null);

};

  function allTogether(getData){
    console.log(getData);
    var out = "";
    var allData = getData.response.length;
    console.log(allData);
    for (var i = 6; i < allData; i++) {
      out += '<div class="col-xs-12 col-sm-6 col-md-4">';
      out += '<img src="' + getData.response[i].image_medium + '"'+'class="img-responsive" alt="img">';
      out += '<div class="caption">' + '<p>' + getData.response[i].title + '</p>';
      out += '</div>' + '</div>'
    }
    document.getElementById("download").innerHTML = out;
}
