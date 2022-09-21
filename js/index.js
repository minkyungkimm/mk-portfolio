$(document).ready(function(){
    var ww = $(window).width();
    var wh = $(window).height();
    layout();
    
    function layout(){
        if(ww >= 1480){
            new fullpage('#wrap',{
                scrollBar:'ture'
            });
        
            
        }else{
            
        }
    }

    const but = $('#top-but');
    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        if(sct >= 800){
            but.addClass('show');
        }else{
            but.removeClass('show');
        }
        but.click(function(){
            $('html,body').stop().animate({
                scrollTop:0
            },400)
        });
    });


    var profile = $('#sec1').offset();
    var works = $('#sec2').offset();
    var footer = $('#footer').offset();
    $('.profile-but').click(function(){
        $('body,html').animate({scrollTop:profile.top},300);
    });
    $('.work-but').click(function(){
        $('body,html').animate({scrollTop:works.top},300);
    });
    $('.f-but').click(function(){
        $('body,html').animate({scrollTop:footer.top},300);
    });

});