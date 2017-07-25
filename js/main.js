function cargarPagina() {
    $("#banner").css({"height":$(window).height()+"px"});
    scrollNav();
}

function scrollNav() {
    var flag = false;
    var scroll;
    $(window).scroll(function () {
        scroll=$(window).scrollTop();

        if(scroll > 200){
            if (!flag) {
                 $("#logo").css({"margin-top":"-5px","width":"50px","height":"50px"});
                 $("header").css({"background-color":"#3c3c3c"});
                 $(".titulos-menu").css({"color":"#f3f3f3"});
                 $("li").css({"border": "1px solid #f3f3f3"});
                 flag=true;
            }           
        }else{
            if (flag) {
                $("#logo").css({"margin-top":"150px","width":"150px","height":"150px",});       
                $("header").css({"background-color":"transparent"});
                $(".titulos-menu").css({"color":"#3c3c3c"});
                $("li").css({"border": "1px solid #3c3c3c"});


                flag=false;
            }            
        }
    })
    
}
$(document).ready(cargarPagina);
