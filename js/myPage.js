$(function(){
    var k = $(window).height();
    var flag = false;       //控制沙发动画的显示顺序
    $('#fullpage').fullpage({
        //显示项目导航
        navigation: true,
        //是否支持键盘滚动
        keyboardScrolling: true,

        //回调函数，滚动到下一屏开始之前执行
        afterLoad: function(anchorLink, index){
            if(index === 2 && flag === false) {
                $('.search').show().animate({'right': 380}, 1500, function(){
                    //方块走到中间时，‘沙发’两字显示
                    $('.search-words').animate({'opacity': 1}, 500, function(){
                        $('.search').hide();
                        $('.search-02-1').show().animate({'height': 30, "right": 220,"bottom": 450},500, function(){
                            flag = true;
                        });
                        //商品图片放大显示
                        $('.goods-01-1').show().animate({'width':450},1000);
                        //标题呈现渐现效果
                        $('.words-02').animate({'opacity': 1}, 500);
                    })
                });
            }
        },

        //刚开始滚动屏幕就触发的函数
        onLeave: function(index, nextIndex, direction){
            if(index === 2 && nextIndex ===3  && flag === true){
                $('.shirt-02-1').show().animate({"bottom":-(k-230),"left":260,"width": 207},1000, function(){
                    $('.img-01-a').animate({"opacity":1}, 500, function(){
                        $('.btn-01-a').animate({"opacity":1}, 500);
                    })
                });
                $('.cover').show();
            }
            //第三屏到第四屏间的滚动动画
            if(index === 3 && nextIndex === 4){
                $('.shirt-02-1').hide();
                $('.car-img').hide();
                $('.t1f').show().animate({"bottom":-(k - 200),"left": 250}, 2000, function(){
                    $('.t1f').animate({"opacity": 0}, 100, function(){
                        $('.car-img').show();
                        $('.car').animate({"left": '150%'}, 5000, 'easeInElastic', function(){
                            $('.note, .words-04-a').animate({'opacity': 1}, 1000);
                        });
                    });
                });  
            }

            //第四屏到第五屏的滚动动画
            if(index === 4 && nextIndex === 5){
                $('.hand-05').animate({'bottom':-20},1000, function(){
                    $('.t1f-05').show().animate({'bottom': 65}, 1000, function(){
                        $('.order-05').animate({'bottom':380},1000, function(){
                            $('.words-05').addClass('words-05-a');
                        })
                    });
                })
            }

            // 第5屏幕到第6屏幕过渡
            if(index == 5 && nextIndex == 6 ) {
                // 沙发的距离 当前屏幕的高度 减去  box 的 bottom  500
                    $(".t1f-05").animate({"bottom": -(k - 500), "left": "40%", "width": 65}, 1500, function() {
                        $(".t1f-05").hide();
                    });

                    $(".box-06").animate({"left": "38%"}, 1500, function() {
                         $(this).animate({"bottom": 40}, 500, function() {
                            $(this).hide();

                            // 行走的过程就是 背景移动的过程
                            // 背景jqury 里面改变比较麻烦  backgroundPositionX  x坐标 
                            // 
                            $(".item6").animate({"backgroundPositionX": "100%"}, 4000, function() {
                                // 当背景动画执行完毕  boy 大小复原  
                                $(".boy").animate({"height": 305, "bottom": 116}, 1000, function() {
                                    $(this).animate({ "right": 500}, 500, function() {
                                        // 门显示出来 模拟打开门的效果
                                        $(".door").animate({"opacity": 1},200, function() {
                                            // 之后girl 显示出来
                                            $(".girl").show().animate({"right": 350, "height": 306 },500, function() {
                                                  $(".pop-07").show();
                                                   $(".next").fadeIn();
                                            })
                                        });
                                    });
                                });
                            });
                            // 光的速度
                            $(".words-06-a").show().animate({"left": "30%"},2000, "easeOutElastic");
                            // 
                            $(".pop-06").show();
                         });
                    });
            }

             // 第6屏幕到第7屏幕过渡
             if(index === 6 && nextIndex === 7 ) {
                setTimeout(function() {
                    $(".star").animate({"width": 120}, 500, function() {
                        $(".good-07").show();
                    });
                }, 2000);
            }
        }
    });
})