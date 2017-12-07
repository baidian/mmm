$(function () {

    var baseUrl = "http://127.0.0.1:9090";
    var productid = tools.getSearch("productid");
    $.ajax({
        type:"get",
        url:baseUrl + "/api/getdiscountproduct",
        data:{
            productid:productid
        },
        success: function (data) {
            console.log(data);
            $(".money-product").html(template("tpl",data));
        }
    })

})