<template>
  <div class="login">
    <div class="login-mask"></div>

    <el-form :model="ruleForms" :rules="rules" ref="ruleForm" class="form">
      <button @click="switchLanguage" style="position: absolute;right:10px;top:4px;">{{ state.language }}</button>

      <el-form-item prop="account">
        <el-input
          type="text"
          v-model="ruleForms.account"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          show-password
          v-model="ruleForms.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button
          style="width: 100%"
          type="primary"
          @click="submitForm('ruleForm')"
        >
          <!-- 登 陆 -->
          {{ $t('login.login') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";
import { LOGIN } from "@/mock/user/login";
import { useI18n } from "vue-i18n";
import  { setItem }  from '../../utils/storage/storage';

export default defineComponent({
  name: "login",
  setup(prop, context) {
    const i18n = useI18n();
    const switchLanguage = () => {
      const locale = i18n.locale.value === "cn" ? "en" : "cn";
      i18n.locale.value = locale;
      setItem('locale',locale);
      state.language = locale;
    }; 
    let state = reactive({
      result_valid: false,
      language:i18n.locale.value
    });
    let ruleForms = reactive({
      account: "admin",
      password: "admin!@#",
    });
    let rules = {
      account: [{ required: true, message: "请输入账号", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    };
    async function submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          state.result_valid = true;
        } else {
          state.result_valid = false;
        }
      });
      if (state.result_valid) {
        try {
          let obj = {
            username: ruleForms.account,
            userpwd: ruleForms.password,
          };
          const result = await LOGIN(obj);
          console.log(result, "result");
          this.$router.push("/about");
        } catch (e) {
          console.log(e);
        } finally {
          // 不管有没有异常，finally中的代码都会执行
          console.log("finally");
        }
      }
    }
    return {
      i18n,
      switchLanguage,
      state,
      ruleForms,
      rules,
      submitForm,
    };
  },
});
</script>
<style lang="scss" src="./style.scss"></style>