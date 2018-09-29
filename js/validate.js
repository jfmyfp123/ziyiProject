layui.use(['form', 'layedit', 'laydate'], function(){
  var form = layui.form
  ,layer = layui.layer
  ,layedit = layui.layedit
  ,laydate = layui.laydate;
  
  //日期
  laydate.render({
    elem: '#date'
  });
  laydate.render({
    elem: '#date1'
  });
  
  //创建一个编辑器
  var editIndex = layedit.build('LAY_demo_editor');
 
  //自定义验证规则
  form.verify({
  	// 验证
    title: function(value){
      if(value.length <= 0){
        return '标题至少得5个字符啊';
      }
    },
    pass: [/(.+){6,12}$/, '密码必须6到12位'],
    phone:[/^1[3|4|5|8][0-9]\d{4,8}$/i,'请输入正确的手机号偶'],
    identity:[/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,'请输入正确的身份证号偶'],
    email:[/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,'请输入正确的邮箱偶'],
    chinese:[/[\u4e00-\u9fa5]/,'请输入中文'],
    floatNum:[/^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$/,'请输入正确的金额格式偶'],
    num:[/^\d+$/,'只能输入数字偶'],
    num1:[/^(0|[1-9][0-9]*)$/,'请输入非负整数偶'],
    
    //end
    content: function(value){
      layedit.sync(editIndex);
    }
  });
  
  //监听指定开关
  form.on('switch(switchTest)', function(data){
    layer.msg('开关checked：'+ (this.checked ? 'true' : 'false'), {
      offset: '60px'
    });
    layer.tips('温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF', data.othis)
  });
  
  //监听提交
  form.on('submit(demo1)', function(data){
    layer.alert(JSON.stringify(data.field), {
      title: '最终的提交信息'
    })
    return false;
  });
 
   
  
  
});