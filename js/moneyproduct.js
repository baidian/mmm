
$(function () {

    var baseUrl = "http://127.0.0.1:9090";

    var productid = tools.getSearch("productid");
    console.log(productid);
    $.ajax({
        type:"get",
        url:baseUrl + "/api/getmoneyctrlproduct",
        data:{
            productid:productid
        },
        success: function (data) {
            console.log(data);
            $("#recommen-product").html(template("tpl",data));
        }
    })

})