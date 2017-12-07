$(function() {
    // 请求数据，设置主菜单内容
    function render( dom, callback ) {
        var $lastFour;
        // 获取菜单数据
        Route.getindexmenu(function( res ){
            var data = res.result;
            var menuHtml = "";
            data.forEach(function( item, index ) {
                menuHtml += '<div class="item">'
                            +   '<a href="' + item.titlehref + '">'
                            +       item.img
                            +       '<p>' + item.name + '</p>'
                            +   '</a>'
                            +'</div>';
            });
            $(dom).html(menuHtml);


            $lastFour = $(dom).children('.item:nth-last-child(-n+4)')
            //console.log($lastFour);
            $lastFour.addClass('hide');


            more($(dom).find('.item:nth-child(8) > a'));
        });


        function more(dom, callback) {
            $(dom).on('click', function() {
                $lastFour.toggleClass('hide');

            })
        }
    }
    render(".mm_menu .mm_list");


    function product() {
        Route.getmoneyctrl(function( data ){
            var html = template('tpl', data);
            $('.product-list').html(html);
        })
    }
    product();
});