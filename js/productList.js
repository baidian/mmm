$(function () {

    var baseUrl = "http://127.0.0.1:9090";

    var pageid = tools.getSearch("pageid");
    var id = tools.getSearch("categoryid");

    $.ajax({
        type:"get",
        url: baseUrl + "/api/getcategorybyid",
        data:{
            categoryid:id
        },
        success:function(data){
            console.log(data);
            $(".mm_product_top").html(template("tpl",data));
        }
    });
    $.ajax({
        type:"get",
        url:baseUrl + "/api/getproductlist",
        data:{
            categoryid:id,
            pageid:pageid
        },
        success: function (data) {
            console.log(data);
            $(".mm_product ul").html(template("tpl2",data));
        }
    });




    function setProductList(dom, categoryid, pageid, callback) {
        Route.getproductlist( categoryid, pageid, function( res ){
            var pageCount = Math.ceil(res.totalCount / res.pagesize);
            var data = res.result;

            var productlistHtml = '<div class="clearfix page">';
            productlistHtml += '<span class="w33">' + '<a href="productlist.html?categoryid=' + categoryid + '&category=' + $('#category').html() + '&pageid=' + (pageid - 1) + '">上一页</a></span>';
            productlistHtml += '<span class="w33"><select id="selectPage" name="select"  selected style="border: 1px solid #bababa; font-size: 16px; padding: 8px 15px; height: 36px"">';
            for (var i = 0; i < pageCount; i++) {
                if (pageid == i+1) {
                    productlistHtml += '<option value="' + Number(i+1) + '" selected>' + Number(i+1) + '/' + Number(pageCount) + '</option>';
                } else {
                    productlistHtml += '<option value="' + Number(i+1) + '">' + Number(i+1) + '/' + Number(pageCount) + '</option>';
                }
            }
            productlistHtml += '</select></span>'
            productlistHtml += '<span class="w33"><a href="productlist.html?categoryid=' + categoryid + '&category=' + $('#category').html() + '&pageid=' + (Number(pageid) + 1) + '" >下一页</a></span>'
            productlistHtml += '</div>'
            dom.html(productlistHtml);
            $('#selectPage').on('change', function(e) {
                window.location.href = 'productlist.html?categoryid=' + $.getParam('categoryid') + '&category=' + $('#category').html() + '&pageid='+ $(this).val();
                $(this).attr('selected',"selected");
            })
        });
    }
    setProductList($(".product-list .fenye"), id, pageid);
});
(function($) {
    $.getParam = function(name) {
        var reg = new RegExp("(^|&)" +
            name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
})(jQuery);
