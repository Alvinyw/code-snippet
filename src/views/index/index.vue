<template>
  <div id="wrapper">
    <div>{{ testTxt }}</div>
    <ol>
      <li>
        <h3>文本过长显示省略号</h3>
        <div class="sec1" title="12345678910111213141516">12345678910111213141516</div>
      </li>
      <li>
        <h3>表单校验</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="numberTxt">
            <el-input
              v-model.number="ruleForm.numberTxt"
              maxlength="17"
              show-word-limit
              clearable
              placeholder="校验是否为纯数字，长度不超过 17 位"
            ></el-input>
          </el-form-item>
          <el-form-item prop="strNumber">
            <el-input v-model="ruleForm.strNumber" clearable placeholder="输入的 string 只能是数字，长度无限制"></el-input>
          </el-form-item>
          <el-form-item prop="cellPhoneNumber">
            <el-input
              v-model="ruleForm.cellPhoneNumber"
              maxlength="11"
              show-word-limit
              clearable
              placeholder="手机号码为纯数字，且长度不超过 11 位"
            ></el-input>
          </el-form-item>
          <el-form-item prop="emailTxt">
            <el-input v-model="ruleForm.emailTxt" clearable placeholder="输入格式正确的邮箱"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      testTxt: process.env.VUE_APP_URL,
      ruleForm: {
        numberTxt: null,
        strNumber: "",
        cellPhoneNumber: null,
        emailTxt: ""
      },
      rules: {
        numberTxt: [{ validator: this.$validater.number }],
        strNumber: [{ validator: this.$validater.strNumber, trigger: "blur" }],
        cellPhoneNumber: [
          { validator: this.$validater.phoneNumber, trigger: "blur" }
        ],
        emailTxt: [{ validator: this.$validater.email, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
#wrapper {
  ol {
    width: 30%;
    .sec1 {
      width: 100px;
      height: 30px;
      line-height: 28px;
      margin: 0;
      border: 1px solid #aaa;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
