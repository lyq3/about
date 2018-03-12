layui.use(['util', 'laydate', 'layer'], function() {
    var util = layui.util
        , laydate = layui.laydate
        , $ = layui.jquery
        , layer = layui.layer;
    //固定块
    util.fixbar({
        bar1: '点'
        , bar2: '我'
        , css: {right: 50, bottom: 100}
        , bgcolor: '#393D49'
        , click: function (type) {
            if (type === 'bar1' || type === 'bar2') {
                layer.closeAll();
                layer.open({
                    type: 1
                    ,content: '<div style="text-align:center; padding:15px 0;min-width:250px;height:500px;">\n' +
                    '            <div class="col-3 peasonal" style="width: 100%">\n' +
                    '                <img style="margin:0 auto" class="peasonal-image" src="./static/image/peason.png" alt="">\n' +
                    '            </div>\n' +
                    '            <div style="width: 100%;text-align: center;line-height: 32px">\n' +
                    '                <h3>罗 云 强</h3>\n' +
                    '                <span>JAVA开发 | 成都</span>\n' +
                    '            </div>\n' +
                    '            <table class="layui-table" lay-skin="line" style="border: 0">\n' +
                    '                <colgroup>\n' +
                    '                    <col width="90">\n' +
                    '                    <col width="120">\n' +
                    '                </colgroup>\n' +
                    '                <tbody style="text-align: left">\n' +
                    '                <tr>\n' +
                    '                    <td><i class="icon iconfont">&#xe768;</i> 手机</td>\n' +
                    '                    <td>13438379796</td>\n' +
                    '                </tr>\n' +
                    '                <tr>\n' +
                    '                    <td><i class="icon iconfont">&#xe601;</i> 邮箱</td>\n' +
                    '                    <td>mail@lyq3.com</td>\n' +
                    '                </tr>\n' +
                    '                <tr>\n' +
                    '                    <td><i class="icon iconfont">&#xe659;</i> Q Q</td>\n' +
                    '                    <td>99190092</td>\n' +
                    '                </tr>\n' +
                    '                <tr>\n' +
                    '                    <td><i class="icon iconfont">&#xe722;</i> 博客</td>\n' +
                    '                    <td><a target="_blank" href="http://blog.lyq3.com" style="color: blue">blog.lyq3.com</a></td>\n' +
                    '                </tr>\n' +
                    '                <tr>\n' +
                    '                    <td><i class="icon iconfont">&#xead8;</i> GitHub</td>\n' +
                    '                    <td><a target="_blank" href="https://github.com/lyq3" style="color: blue">github.com/lyq3</a></td>\n' +
                    '                </tr>\n' +
                    '                <tr>\n' +
                    '                    <td><i class="icon iconfont">&#xe628;</i> 业余网站</td>\n' +
                    '                    <td><a target="_blank" href="http://ichrome.top" style="color: blue">ichrome.top</a></td>\n' +
                    '                </tr>\n' +
                    '                </tbody>\n' +
                    '            </table>\n' +
                    '            <div>\n' +
                    '                <img style="width: 70px;height: 70px" src="./static/image/IMG_0944.JPG"/>\n' +
                    '            </div>\n' +
                    '        </div>'
                    ,shade: 0 //不显示遮罩
                    ,area: ['270px','584px']
                    ,offset: 'l'
                    ,title: '联系方式'
                });
            }
        }
    });

    //查看项目详情

    $(".link-to").click(function(){
        layer.open({
            type: 2,
            title: '项目详情',
            shadeClose: true,
            shade: [0.3, '#434752'],
            maxmin: true, //开启最大化最小化按钮
            area: ['893px', '600px'],
            content: './page/ssglpt.html',
            scrollbar: false
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