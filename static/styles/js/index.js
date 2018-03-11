layui.use(['util', 'laydate', 'layer'], function() {
    var util = layui.util
        , laydate = layui.laydate
        , $ = layui.jquery
        , layer = layui.layer;
    //固定块
    util.fixbar({
        bar1: true
        , bar2: true
        , css: {right: 50, bottom: 100}
        , bgcolor: '#393D49'
        , click: function (type) {
            if (type === 'bar1') {
                layer.msg('icon是可以随便换的')
            } else if (type === 'bar2') {
                layer.msg('两个bar都可以设定是否开启')
            }
        }
    });

    //查看项目详情

    $(".link-to").click(function(){
        layer.open({
            type: 2,
            title: '项目详情',
            shadeClose: true,
            shade: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['893px', '600px'],
            content: './page/ssglpt.html'
        });
    })

    //未命名项目提示
    $("#bestProject").click(function(){
        layer.msg("该项目计划中，并未开始写.....<br/>我github还有其他一些没什么卵用的小项目",{
            time: 20000, //20s后自动关闭
            btn: ['去看看', '没兴趣'],
            yes: function () {
                window.open("https://github.com/lyq3");
            }
        });
    })
});