<template>
  <div>
    <van-nav-bar title="登录" left-arrow @click-left="this.$router.back()" class="top"/>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="primary" native-type="submit"
        >登录</van-button
        >
        <div class="link">
            <router-link to="/signup">没帐号？去注册</router-link>
        </div>
      </div>
    </van-form>
  </div>
</template>

<script>
import { signin } from '@/api/user'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      const res = await signin(values)
      this.$toast.success('登录成功')
      this.$router.push('/my')
      console.log(res)
    }
  }
}
</script>

<style scoped lang='less'>
.link {
  text-align: center;
  margin-top: 18px;
}
</style>
