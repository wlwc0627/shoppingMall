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
                    $('.t1f-05').animate({'bottom': 65}, 1000, function(){
                        $('.order-05').animate({'bottom':380},1000, function(){
                            $('.words-05').addClass('words-05-a');
                        })
                    });
                })
            }
        }
    });
})