$(function () {

    var baseUrl = "http://127.0.0.1:9090";

    $.ajax({
        type:"get",
        url: baseUrl + "/api/getinlanddiscount",
        success: function (data) {
            console.log(data);
            $(".cu-friend ul").html(template("tpl",data));
        }
    })

})
