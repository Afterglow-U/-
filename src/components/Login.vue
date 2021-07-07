<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="avatar-box">
        <img src="~assets/logo.png" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        ref="loginFormRef"
        label-width="0px"
        :model="loginForm"
        :rules="loginFormRules"
        class="login-form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-zhanghu"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-mima"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="restLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      // 登录表单的数据绑定
      loginForm: {
        username: "violet",
        password: "123456",
      },
      // 登录表单的验证规则
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: "请输入账号名称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 点击重置按钮，重置登录表单
    restLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$message({
        message: "登录成功",
        type: "success",
      });
      this.$router.push("/home");
      // this.$refs.loginFormRef.validate(async (valid) => {
      //   // 网络请求
      //   if (!valid) return;
      //   const {data:res} = await this.$http.post("login", this.loginForm);
      //   if (res.meta.status !== 200) return console.log("登录失败");
      //   console.log("登录成功");
      // });
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  // position: relative;
  width: 100%;
  height: 100%;
  background-color: #2b4b6b;
}
.login-box {
  position: relative;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
}
.avatar-box {
  width: 130px;
  height: 130px;
  transform: translateY(-50%);
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 50%;
  box-shadow: 0 0 10px #ddd;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eeeeee;
  }
}
.login-form {
  position: absolute;
  top: 85px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: center;
}
</style>
