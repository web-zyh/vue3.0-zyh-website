<template>
  <div class="login">
    <div class="login-mask" v-if="device !== 'mobile'"></div>
    <button
      @click="switchLanguage"
      style="position: absolute; right: 10px; top: 4px"
    >
      {{ language }}
    </button>

    <el-form
      @keyup.enter="submitForm('ruleForm')"
      :style="
        device == 'mobile'
          ? 'top:50%;left:50%;transform: translate(-50%, -50%);'
          : ''
      "
      :model="ruleForms"
      :rules="rules"
      ref="ruleForm"
      class="form"
    >
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
          {{ $t("login.login") }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { defineComponent, reactive, computed, toRefs } from "vue";
import { LOGIN } from "../../api/user/login";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { setItem } from "../../utils/storage/storage";

export default defineComponent({
  name: "login",
  setup(prop, context) {
    const router = useRouter();
    const i18n = useI18n();
    const store = useStore();
    const switchLanguage = () => {
      const locale = i18n.locale.value === "cn" ? "en" : "cn";
      i18n.locale.value = locale;
      setItem("locale", locale);
      state.language = locale;
    };
    const state = reactive({
      result_valid: false,
      language: i18n.locale.value,
    });
    const ruleForms = reactive({
      account: "admin",
      password: "admin",
    });
    const rules = {
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
          const obj = {
            username: ruleForms.account,
            password: ruleForms.password,
          };
          // const result = await LOGIN(obj);
          // if (result?.code == 1) {
          //   const { token, tokenType } = result.data;
          //   this.$store.dispatch(
          //     "user/saveTokenAsync",
          //     `${tokenType} ${token}`
          //   );
          //   this.$router.push("/index.html");
          // }
          this.$router.push("/index.html");
          this.$store.dispatch(
            "user/saveTokenAsync",
            `${1} ${2}`
          );
        } catch (e) {
          console.log(e);
        } finally {
          // 不管有没有异常，finally中的代码都会执行
          console.log("finally");
        }
      }
    }
    const device = computed({
      get: () => {
        return store.state.device;
      },
    });
    return {
      device,
      i18n,
      switchLanguage,
      ...toRefs(state),
      ruleForms,
      rules,
      submitForm,
    };
  },
});
</script>
<style lang="scss" src="./style.scss"></style>
