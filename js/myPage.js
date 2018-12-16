$(function(){
    $('#fullpage').fullpage({
        //显示项目导航
        navigation: true,
        //是否支持键盘滚动
        keyboardScrolling: true,

        //回调函数，滚动到下一屏开始之前执行
        afterLoad: function(anchorLink, index){
            if(index === 2) {
                $('.search').show().animate({'right': 380}, 1500, function(){
                    //方块走到中间时，‘沙发’两字显示
                    $('.search-words').animate({'opacity': 1}, 500, function(){
                        $('.search').hide();
                        $('.search-02-1').show().animate({'height': 30, "right": 220,"bottom": 450},500);
                        //商品图片放大显示
                        $('.goods-01-1').show().animate({'width':450},1000);
                        //标题呈现渐现效果
                        $('.words-02').animate({'opacity': 1}, 500);
                    })
                });
            }
        }
    });
})