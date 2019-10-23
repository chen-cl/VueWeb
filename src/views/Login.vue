<template>
<mu-container>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
          <mu-form-item  prop="username" :rules="usernameRules" icon="account_circle">
            <mu-text-field placeholder="请输入用户名" v-model="validateForm.username" prop="username" ></mu-text-field>
          </mu-form-item>
          <mu-form-item  prop="password" :rules="passwordRules" icon="locked">
              <mu-text-field placeholder="请输入密码" type="password" v-model="validateForm.password" prop="password"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="isAgree" :rules="argeeRules">
            <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
          </mu-form-item>
          <mu-form-item>
            <mu-button ripple="true" round  full-width color="primary" @click="submit" v-loading="loading1" data-mu-loading-size="24">登录</mu-button>
          </mu-form-item>
        </mu-form>
</mu-container>
</template>
<script>
export default {
  data() {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: '必须填写用户名' },
        { validate: (val) => val.length >= 3, message: '用户名长度大于3' }
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码' },
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10' }
      ],
      show4: true,
      loading1: false,
      argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议' }],
      validateForm: {
        username: '',
        password: '',
        isAgree: false
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate().then((result) => {
        if (result) {
          const _this = this
          _this.loading1 = true
          _this.$axios.post('/user', {
            params: {
              account: _this.validateForm.username,
              pwd: _this.validateForm.password
            }
          })
            .then(function(response) {
              _this.loading1 = false
              sessionStorage.setItem('islogin', true)
              _this.$router.push('/home')
            })
            .catch(function(error) {
              console.log(error)
              _this.loading1 = false
            })
        }
      })
    },
    clear() {
      this.$refs.form.clear()
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
      }
    }
  }
}
</script>
<style>
.mu-demo-form {
  width: 100%;
  max-width: 400px;
  margin:0 auto;
  padding-top: 30%;
  padding-right: 20px;
}
.mu-container
{
  text-align: center;
}
</style>