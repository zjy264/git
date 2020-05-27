$(document).ready(function(){
    $(function(){
    var i=0;
    var num=0;
    var timer=null;
    var arr=['文化','文化','娱乐','文化','商业'];
    var arr2=['富裕社会里的穷人，以及美国所经历的增长困境 | 好奇心日报年度图书推荐⑱','《终局》','世界纷繁复杂，你的归属感也变得越来越具体了吗？ | 100个生活大问题','德先生和赛先生，五四和国家，历史学家徐国琦看到的中国人和美国人 | 访谈录','反垄断究竟是在反对什么④：对大公司控制信息和言论传播的恐惧正在成为现实'];
    for (var j = 0; j < $('.img li').length; j++) {
        $('.num').append('<li></li>');
    }
    $('.num li').first().addClass('active');
    $('.banner').hover(function(){
        $('.btn').show();
    },function(){
        $('.btn').hide('slow');
    });

    var firstimg=$('.img li').first().clone();
    $('.img').append(firstimg).width($('.img li').length*($('.img img').width()));


    timer=setInterval(function(){
        i++;
        if (i==$('.img li').length) {
            i=1;
            $('.img').css({left:0});
        }
        $('.img').stop().animate({left:-i*($('.img img').width())},400);
        if (i==$('.img li').length-1) {
            $('.num li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        }
        $('#fir_p1').html(arr[i]);
        $('#fir_span1').html(arr2[i]);
    },3000);

/////////////////////////
       /* alert("sdc");
        $('#denlu').click(function(){
            var txt1=$(".user").val();
            var txt2=$(".pass").val();
            $.ajax({
                url: "login",
                contentType:"application/x-www-form-urlencoded",
                type: "post",
                data: {"name":txt1,"pass":txt2},
                success: function(data) {
                    if (data=="yes") {
                        alert('登录成功');//弹窗提示
                    } else if (data=="no") {
                        alert('密码错误');
                    }else if (data=="noo") {
                        alert('用户名不存在');
                    }
                },
                error: function() {
                    alert("请求错误")
                }
            });

        }*/
// /////////////////////////////

    $('.banner').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            i++;
            if (i==$('.img li').length) {
                i=1;
                $('.img').css({left:0});
            };
            $('.img').stop().animate({left:-i*($('.img img').width())},400);
            if (i==$('.img li').length-1) {
                $('.num li').eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $('.num li').eq(i).addClass('active').siblings().removeClass('active');
            }
            $('#fir_p1').html(arr[i]);
            $('#fir_span1').html(arr2[i])
        },3000)
    });


    $('.prev').click(function(){
        i--;
        if (i==-1) {
            i=$('.img li').length-2;
            $('.img').css({left:-($('.img li').length-1)*($('.img img').width())});
        }
        $('.img').stop().animate({left:-i*($('.img img').width())},400);
        $('.num li').eq(i).addClass('active').siblings().removeClass('active');

        num--;
        if(num==-1){
            num=4;
        }
        $('#fir_p1').html(arr[num]);
        $('#fir_span1').html(arr2[num]);

    });


    $('.next').click(function(){
        i++;
        if (i==$('.img li').length) {
            i=1;
            $('.img').css({left:0});
        };
        $('.img').stop().animate({left:-i*($('.img img').width())},400);
        if (i==$('.img li').length-1) { 
            $('.num li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        };
        num++;
        if(num==5){
            num=0;
        }
        $('#fir_p1').html(arr[num]);
        $('#fir_span1').html(arr2[num]);
   });


    $('.num li').click(function(){
        var _index=$(this).index();
        i = _index;     
        num = _index;        
        $('.img').stop().animate({left:-_index*($('.img img').width())},500);
        $('.num li').eq(_index).addClass('active').siblings().removeClass('active');
        $('#fir_p1').html(arr[_index]);
        $('#fir_span1').html(arr2[_index]);
    });
})

    $('.icon-weixin').mouseover(function(){
        $('#qrcode1').toggle();
    })
    $('.icon-weixin').mouseout(function(){
        $('#qrcode1').toggle();
    })
})

window.onload=function(){
    let oDropdown=document.querySelector(".dropdown");
    let dropDownBox = document.querySelector('.dropDownBox');
    let oFirst = document.querySelector('#first');
    let oFir2_btn1 = document.querySelector('#fir2_btn1');
    let oEnter = document.querySelector('.enter');
    let oCli = document.querySelector('.cli');
    
    oDropdown.onclick= () => {
         if (dropDownBox.style.display == 'none') {
        dropDownBox.style.display = 'block';
        oDropdown.style.transform = 'rotateZ(180deg)';
    }else{
        dropDownBox.style.display = 'none';
        oDropdown.style.transform = 'rotateZ(0deg)';
    }
    }
    oFir2_btn1.onclick=function(){
        oFirst.style.display='none';
        oEnter.style.display='block';
    }
    oCli.onclick=function(){
        oEnter.style.display='none';
        oFirst.style.display='block';
    }


    window.onscroll=function(){
        let t = document.documentElement.scrollTop;
        let oTop = document.querySelector('#top');
        if(t >= 140){
            oTop.style.height='60px';
        }else{
            oTop.style.height='80px';
        }
    }
}