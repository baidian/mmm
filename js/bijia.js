$(function () {
    var baseUrl = "http://127.0.0.1:9090";
    var productid = tools.getSearch("productid")
    var categoryid = tools.getSearch("categoryId");
    var brandName = tools.getSearch("brandName");


    $.ajax({
        type:"get",
        url:baseUrl + "/api/getproduct",
        data:{
            productid:productid
        },
        success: function (data) {
            //console.log(data);
            $(".mm_product_title").html(template("tpl2",data));
        }
    });



    $.ajax({
        type:"get",
        url:baseUrl + "/api/getproductcom",
        data:{
            productid:productid
        },
        success: function (data) {
            //console.log(data);
            $(".mm_product_comlist ul").html(template("tpl3",data));
        }
    })

    $.ajax({
        type:"get",
        url:baseUrl + "/api/getproductcom",
        data:{
            productid:productid
        },
        success: function (data) {
            //console.log(data);
            $(".mm_product_comlist ul").html(template("tpl3",data));
        }
    })

    $.ajax({
        type:"get",
        url: baseUrl + "/api/getcategorybyid",
        data:{
            categoryid:categoryid,
        },
        success:function(data){
            //console.log(data);
            $(".mm_product_top").html(template("tpl",data));
            $(".mm_list_title3").text(brandName);
        }
    });

})
