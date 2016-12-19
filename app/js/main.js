jQuery(document).ready(function() {

    // $("#modal_btn").click(function(){
    //   $("#modalBasic").modal("toggle");
    // });

    //Scroll appearance
    $(window).scroll(function () {
        $(".appearance").each(function () {
            var positionElements = $(this).offset().top;
            var windowTop = $(window).scrollTop();
            if (positionElements < windowTop + 600) {
                $(this).addClass("slide");
            }
        });
    });

    //Smooth scrolling

    var menu = document.getElementById("menu");


    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 2000);
    });

})


// var a = document.getElementById("modal_btn");
// a.addEventListener('click', uploadModal, false);
//
// function uploadModal() {
//
//     let xhr = new XMLHttpRequest();
//     console.log(xhr.status)
//
//     xhr.onreadystatechange = function() {
//         if(xhr.readyState == 4 && xhr.status == 200) {
//             console.log(xhr.status + "+" + xhr.statusText)
//
//             document.getElementById('content').innerHTML = xhr.responseText;
//         }
//     };
//     xhr.open('GET', 'modal.html', true);
//     xhr.send();
//
// }


    // setTimeout(gogo, 1200);

    // function gogo(){
        var b = document.getElementById("myButton");
        b.addEventListener('click', uploadPictures, false);

        function uploadPictures() {
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    allTogether(JSON.parse(xhr.responseText));
                }
            };

            xhr.open('GET', 'img/info.json', true);
            xhr.send(null);

            function allTogether(getData) {
                var out = "";
                var allData = getData.response.length;
                console.log(allData);
                // var index = 0;
                top: for (var i = 0; i < allData; i++) {
                    getData.response[i];
                    console.log(getData.response[i]);
                    // if (index % 4 == 0){
                    //     break top;
                    // }
                    out += '<div class="col-xs-12 col-sm-6 col-md-4">';
                    out += '<img src="' + getData.response[i].image_medium + '"' + ' class="img-responsive" alt=" ' + getData.response[i].title + ' ">';
                    out += '<div class="depiction">' + '<p>' + getData.response[i].description + ', ' + getData.response[i].title + '</p>';
                    out += '</div>' + '</div>'

                }

                document.getElementById("download").innerHTML = out;
                b.style.visibility = "hidden";

            }
        }
    // };

