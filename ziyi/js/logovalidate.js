
        // 登录验证
        // 账号验证
        $('#btnLogin').on('click',function(event){
            event.preventDefault();
            if ($('.account').val().trim().length < 1) {
                // alert("请输入用户名");
                layer.tips('请输入用户名',".account",{
  tips: [3, 'red',]});
                
                $('.account').focus();
                return;
            }
            // 密码验证
            if ($('.pwd').val().trim().length < 6 || $('.pwd').val().trim().length >18) {
                 
                // alert("请输入密码");
                layer.tips('请输入6~12位密码',".pwd",{
  tips: [3, 'red']});
                $('.pwd').focus();
                return;
            }
             
            var reg = /^[a-zA-Z]\w{5,17}$/;
            // var reg2 = /^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
            var input1 = $('.pwd').val();
            // var input1 = $('#account').val();
            if(!reg.test(input1)){
                // alert('正确格式为：以字母开头，长度在6~18之间，只能包含字符、数字和下划线');
                layer.tips('密码正确格式为：以字母开头，长度在6~18之间，只能包含字符、数字和下划线',".pwd",{
  tips: [3, 'red']});
                $('.pwd').focus();
                return;
            }                
        })

        // 注册验证

        // 账号验证
        $('#reg').on('click',function(event){
            event.preventDefault();
            
            if ($('#user').val().trim().length < 1) {
                // alert("请输入用户名");
                layer.tips('请输入用户名',"#user",{
  tips: [3, 'red']});
                
                $('#user').focus();
                return;
            }
 
            // 密码

            if ($('#passwd').val().trim().length < 6 || $('#passwd').val().trim().length >18) {
                 
                // alert("请输入密码");
                layer.tips('请输入6~12位密码',"#passwd",{
  tips: [3, 'red']});
                $('#passwd').focus();
                return;
            }
             var reg = /^[a-zA-Z]\w{5,17}$/;
            // var reg2 = /^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
            var input1 = $('#passwd').val();
            // var input1 = $('#account').val();
            if(!reg.test(input1)){
                // alert('正确格式为：以字母开头，长度在6~18之间，只能包含字符、数字和下划线');
                layer.tips('密码正确格式为：以字母开头，长度在6~18之间，只能包含字符、数字和下划线',"#passwd",{
  tips: [3, 'red']});
                $('#passwd').focus();
                return;
            }           
           
            if ($('#passwd').val() != $('#passwd2').val()) {
                 
                // alert("请输入密码");
                layer.tips('两次输入密码不一致',"#passwd2",{
  tips: [3, 'red']});
                $('#passwd2').focus();
                return;
            }
 
        })

