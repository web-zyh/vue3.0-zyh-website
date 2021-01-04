<template>
    <div class="login">
        <div class="login-mask"></div>
        <el-form    
                :model="ruleForms" 
                status-icon 
                :rules="rules" 
                ref="ruleForm" 
                class="form">
            <el-form-item  prop="account">
                <el-input type="text" v-model="ruleForms.account" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item  prop="pass">
                <el-input type="password" v-model="ruleForms.pass" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item style="text-align:center">
                <el-button style="width:100%;" type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {defineComponent, reactive} from 'vue'

    export default defineComponent({
        name:'login',
        setup(prop,context){
            let ruleForms = reactive({
                account:'',
                pass:''
            });
            let rules = {
                account: [
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
                pass: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
            };
            function submitForm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log('submit!!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
            return {
                ruleForms,
                rules,
                submitForm,
            }
        }
    });
</script>
<style lang="scss" src="./style.scss"></style>