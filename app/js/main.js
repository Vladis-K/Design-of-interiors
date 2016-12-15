jQuery(document).ready(function(){


  $("#myBtn").click(function(){
    $("#myModal").modal();
  });


  //Scroll appearance
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
         allTogether(JSON.parse(xhr.responseText));
      }
    };

    xhr.open('GET', 'img/info.json', true);
    xhr.send(null);


  function allTogether(getData){
      console.log(getData);
      var out = "";
      var allData = getData.response.length;
      console.log(allData);
      for (var i = 6; i < allData; i++) {
          out += '<div class="col-xs-12 col-sm-6 col-md-4">';
          out += '<img src="' + getData.response[i].image_medium + '"' + ' class="img-responsive" alt="'+ getData.response[i].title +' ">';
          out += '<div class="depiction">' + '<p>' + getData.response[i].description + ', '+ getData.response[i].title + '</p>';
          out += '</div>' + '</div>'
      }
      document.getElementById("download").innerHTML = out;
    }
  };
