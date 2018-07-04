


// 姓名
function isChinaName(name) {
    var pattern = /^[\u4E00-\u9FA5]{1,6}$/;
    return pattern.test(name);
}
// 验证身份证
function isCardNo(card) {
    var pattern = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
    return pattern.test(card);
}
// 验证手机号
function isPhoneNo(phone) {
    var pattern = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/; 
    return pattern.test(phone);
}
/////////////////////////////
/*姓名判断*/
var A="false";
function userName(inputid, spanid) {
    $(inputid).blur(function() {
            if (isChinaName($.trim($(inputid).val())) == false) {   
                $(spanid+">p").text('请输入正确的姓名！');
                $(spanid).css("visibility","visible");
            }else{
                $(spanid).css("visibility","hidden");
                 A="ture";
            }
        
    });
    $(inputid).focus(function() {
        // $(spanid).css("visibility","hidden");  
        A="false";
    });
};
userName('#name', "#caveat");
// /*身份证判断*/
var C="false";
function userID(inputid, spanid) {
    $(inputid).blur(function() {
            if (isCardNo($.trim($(inputid).val())) == false) {               
                $(spanid+">p").text('请输入正确的身份证号！');
                $(spanid).css("visibility","visible");
            }else{
                $(spanid).css("visibility","hidden");
                 C="ture";
            }   
    });
    $(inputid).focus(function() {
        // $(spanid).css("visibility","hidden");     
        C="false";  
    });
};
userID('#identity', "#caveat");

/*手机号判断*/
var B="false";
function userTel(inputid, spanid) {
    $(inputid).blur(function() {
            if (isPhoneNo($.trim($(inputid).val())) == false) { 
                $(spanid+">p").text('请输入正确的手机号!');
                $(spanid).css("visibility","visible");
            }else{
                $(spanid).css("visibility","hidden");
                 B="ture";

            }
        
        $(inputid).focus(function() {
            // $(spanid).css("visibility","hidden");
            B="false";
        });
    });
};
userTel('#telephone', "#caveat");
///////////////点击注册///////////////////////
function submitB(){
    if(A==B&&B==C&&A=="ture"&&$("#chenbox").is(':checked')==true){
        $("#message").css("display","block");
        $("#messageName").val($("#name").val());
        $("#messageTelephone").val($("#telephone").val());
        $("#messageIdentity").val($("#identity").val());
        $("#caveat>p").text('');
        $("#caveat").css("visibility","hidden");
    }else if($("#chenbox").is(':checked')==false){
        $("#caveat>p").text('请同意用户保密协议！');
        $("#caveat").css("visibility","visible");
    }else{
        userTel('#telephone', "#caveat");
        userID('#identity', "#caveat");
        userName('#name', "#caveat");
    }
}
////////////////点击取消///////////////////////////
function cancel(){
    $("#message").css("display","none");
    // A="false";
    // B="false";
    // C="false";
}
/*******************点击确定**************** */
function determine(){
	var username=document.getElementById("messageName").value;
    var uphone=document.getElementById("messageTelephone").value;
    var ucard=document.getElementById("messageIdentity").value;
    var openid=document.getElementById("openid").value;
    $("#message").css("display","none");
    $.ajax({
        type: "POST",//方法类型
        dataType:'json',//预期服务器返回的数据类型
        url: "http://fangoujie.com/wx/index.php/Home/UserRegiste/register" ,//url
        //data: $('#message').serialize(),
      data:{username:username,uphone:uphone,ucard:ucard,openid:openid},
        success: function (res) {
            if(res.val==0){
            $("#caveat>p").text('信息有误请重新填写！');
            $("#caveat").css("visibility","visible");
        }else if(res.val==1){
            $("#caveat>p").text('这是已经注册过的手机号！');
            $("#caveat").css("visibility","visible");
        }else if(res.val==2){
                $("#caveat>p").text('这是已经注册过的身份证号！');
                $("#caveat").css("visibility","visible");
         }else if(res.val==3){
                //window.location.href="http://localhost/wx/index.php/Home/UserRegist/regist";
                window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx725f9bfc3c1f89bc&redirect_uri=http%3A%2F%2Ffangoujie.com%2Fwx%2Findex.php%2FHome%2FUserRegiste%2Fregist&response_type=code&scope=snsapi_base&state=123#wechat_redirect";
            }
    }
    });
}
/*********************协议**************** */
// function readonlyC(){
//     $("#protocol").css("display","block")
// }
// function readonlyO(){
//     $("#protocol").css("display","none")
// }
/////*************************** */
function stopPropagation(e) {
    var ev = e || window.event;
    if (ev.stopPropagation) {
        ev.stopPropagation();
    }
    else if (window.event) {
        window.event.cancelBubble = true;//兼容IE
    }
}
$("#chenbox~a").click(function (e) {
    $("#protocol").show();
    stopPropagation(e);
});
$(document).bind('click', function () {
    $("#protocol").hide();
});
$("#protocol").click(function (e) {
    stopPropagation(e);
});

