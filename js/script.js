$(function(){
    mainInit();
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
})


function mainInit(){
    gnb_menu()
    main_visual()
    content1()
    content3()
    content4()
    footer()
    side_nav()
}


function gnb_menu(){
    let $gnbli = $('#header .nav > .gnb > li');
    let $subul = $('#header .nav .gnb li ul');
    let $header = $('#header');


    $gnbli.hover(function(){
        $header.stop().animate({height:390,backgroundColor:'rgba(999,999,999,0.6)'},500);
        })

    $header.on('mouseleave', function(){
        $header.stop().animate({height:175,backgroundColor:'transparent'},500);
        })
}





function main_visual(){
    let $banner = $('#visual .main-banner');
    let $bannerli = $('#visual .main-banner li');
    let $h2 = $('#visual .main-banner li h2');
    let $prev = $('#visual .btn-wrap .prev');
    let $next = $('#visual .btn-wrap .next');
    let old = 0, current = 0, size = $bannerli.length, 
    timer = null, interval = 6000;

    $h2.eq(0).animate({opacity:1},3500);

    timer = setInterval(make, interval);
    function make(){
        current++;
        if(current > size-1) {
            current=0;
        }
        banner('100%','-100%');
    }

    $prev.on('click', function(){
        current--;
        if(current < 0) {
            current = size-1;
        }
        banner('-100%','100%');
    })

    $next.on('click', function(){
        current++;
        if(current > size-1) {
            current=0;
        }
        banner('100%','-100%');
    })


    function banner(start, end){
        if(current != old) {
            $bannerli.eq(current).css({left:start}).animate({left:0},1000);
            $bannerli.eq(old).css({left:0}).animate({left:end},1000);
            $h2.eq(current).css({opacity:0}).animate({opacity:1},3500);

            old = current;
            clearInterval(timer);
            timer = setInterval(make, interval);
        }
    }
    
}



function content1(){
    let $li = $('.main .sale .apartment ul li ');
    let $h3 = $('.main .sale .apartment ul li > h3');
    let $p = $('.main .sale .apartment ul li > p');
    let $detail = $('.main .sale .apartment .more');
    let cnt = 0;

    $li.hover(function(){
        cnt = $(this).index();
        $h3.eq(cnt).stop().hide();
        $p.eq(cnt).stop().hide();
        $detail.eq(cnt).stop().animate({top:0},500);
    },function(){
        $detail.eq(cnt).stop().animate({top:400},500);
        $h3.eq(cnt).stop().show();
        $p.eq(cnt).stop().show();
    })
}

function content3(){
    let $presslist = $('.main .news .press-list li');
    let $ul = $('.main .news .press ul');
    let $newspost = $('main .news .news-post');
    let $blogpost = $('main .news .blog-post');
    let $li = $('.main .news .news-post li');
    let $blogli = $('.main .news .blog-post li');
    let $h3 = $('.main .news .news-post li > h3');
    let $blogh3 = $('.main .news .blog-post li > h3');
    let $strong = $('.main .news .news-post li > strong');
    let $blogstrong = $('.main .news .blog-post li > strong');
    let $p = $('.main .news .news-post li strong + p');
    let $blogp = $('.main .news .blog-post li strong + p');
    let $date = $('.main .news .news-post .date');
    let $blogdate = $('.main .news .blog-post .date');
    let cnt = 0;



    $newspost.show();
    $blogpost.hide();

    $presslist.on('click',function(){
        cnt = $(this).index();
        $ul.hide();
        $ul.eq(cnt).show();

        $presslist.removeClass('on');
        $presslist.eq(cnt).addClass('on')
    })

    $li.hover(function(){
        cnt = $(this).index();
        $li.eq(cnt).stop().animate({backgroundColor:'#006A80'},400)
        $h3.eq(cnt).stop().animate({color:'#fff'},400);
        $strong.eq(cnt).stop().animate({color:'#fff'},400);
        $p.eq(cnt).stop().animate({color:'#E0E0E0'},400);
        $date.eq(cnt).stop().animate({color:'#BDBDBD'},400);
    },function(){
        $li.eq(cnt).stop().animate({backgroundColor:'#F2F2F2'},400);
        $h3.eq(cnt).stop().animate({color:'#006A80'},400);
        $strong.eq(cnt).stop().animate({color:'#333'},400);
        $p.eq(cnt).stop().animate({color:'#676767'},400);
        $date.eq(cnt).stop().animate({color:'#666'},400);
    })


    $blogli.hover(function(){
        cnt = $(this).index();
        $blogli.eq(cnt).stop().animate({backgroundColor:'#006A80'},400)
        $blogh3.eq(cnt).stop().animate({color:'#fff'},400);
        $blogstrong.eq(cnt).stop().animate({color:'#fff'},400);
        $blogp.eq(cnt).stop().animate({color:'#E0E0E0'},400);
        $blogdate.eq(cnt).stop().animate({color:'#BDBDBD'},400);
    },function(){
        $blogli.eq(cnt).stop().animate({backgroundColor:'#F2F2F2'},400);
        $blogh3.eq(cnt).stop().animate({color:'#006A80'},400);
        $blogstrong.eq(cnt).stop().animate({color:'#333'},400);
        $blogp.eq(cnt).stop().animate({color:'#676767'},400);
        $blogdate.eq(cnt).stop().animate({color:'#666'},400);
    })

}




function content4(){
    let $video = $('.main .utube .video video');
    let $button = $('.main .utube .video p');
    let $li = $('.main .utube .play-list ul li');
    let isplay = false;
    let cnt = 0, vidurl = '';

    let vid = $video.get(0);  

    $li.on('click',function(){
        cnt = $(this).index();
        vidurl = './images/video'+cnt+'.mp4';

        $video.attr('src',vidurl);
        $li.removeClass('on');
        $li.eq(cnt).addClass('on');
        $button.show();
    })


    $button.on('click',function(){
        vid.play();
        $(this).fadeOut();
    })

    $video.on('click',function(){
                vid.pause();
                $button.fadeIn();
    })
}




function footer(){
    let $family = $('#footer .family-site .family');
    let $familySite = $('#footer .family-site ul');

    $familySite.hide();

    $family.on('click',function(){
        $familySite.toggle();
    })
}



function side_nav(){
    let $sideNav = $('#side-nav'); 
    let $nav = $('#side-nav ul li');
    let posY = [], cnt = 0, ty = 0;
    

    for(let i=0 ; i<6 ; i++) {
        posY[i] = $('.main .con').eq(i).offset().top; 
    }

    $sideNav.hide();

    // $(window).on('scroll',function(){
    //     ty = $(window).scrollTop();
    //     for(let i=0 ; i<6 ; i++) {
    //         if(ty >= posY[i]) {
    //             $nav.removeClass('on');
    //             $nav.eq(i).addClass('on');
    //         }
    //     }
    // })


    // if(ty>3000){
    //     $sideNav.show();
    // }else {
    //     $sideNav.hide();
    // }

    // $nav.on('click',function(){
    //     cnt = $(this).index();
    //     $('html,body').animate({scrollTop:posY[cnt]}, 400);
        
    //     $nav.removeClass('on');
    //     $nav.eq(cnt).addClass('on');
    // })


}











