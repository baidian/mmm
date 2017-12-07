$(function () {


    var baseUrl = "http://127.0.0.1:9090";


    function render() {
        $.ajax({
            type: "get",
            url: baseUrl + "/api/getcategorytitle",
            success: function (data) {
                //console.log(data);
                $(".mm_main_list").html(template("tpl", data));
            }
        });
    }

    render();


    $(".mm_main_list").on("click", "#title", function (e) {
        e.preventDefault();
        var id = $(this).data("id");
        var $this = $(this);
        $this.next().toggleClass('hide');

        $.ajax({
            type: "get",
            url: baseUrl + "/api/getcategory",
            data: {
                titleid: id
            },
            success: function (data) {
                $this.next().html(template("tpl2", data));
            }
        });


    })


})