window.onload =  function () {
    setInterval(function () {
        var imageview = document.getElementById("status");
        var http = new XMLHttpRequest();
        var url = "http://127.0.0.1:5000/";
        var json = "";
        http.open("GET", url);
        http.setRequestHeader('Access-Control-Allow-Headers', '*');
        http.onreadystatechange = function() {//Call a function when the state changes.
            if(http.readyState == 4 && http.status == 200) {
                //alert(http.responseText);
                json = JSON.parse(http.responseText);

                if (json['message'] == "Alarm") {
                    imageview.src = "images/FLOODRBACKGROUNDBAD.png";
                } else {
                    imageview.src = "images/FLOODRBACKGROUNDGOOD.png";
                }
            } else {
                imageview.src = "images/";
            }
        };
        http.send(null);
    }, 1000)
};