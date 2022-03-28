<template>
  <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
    <form class="card mt-5" data-testid="form-sign-up" v-if="!signUpSuccess">
      <div class="card-header">
        <h1 class="text-center">Sign Up</h1>
      </div>
      <div class="card-body">
        <Input 
          id="username" 
          label="Username" 
          :help="errors.username" 
          @customInput="onChangeUsername"
        />
        <!-- <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input id="username" class="form-control" type="text" placeholder="username" v-model="username"/>
          <span>{{errors.username}}</span>
        </div> -->

        <div class="mb-3">
          <label class="form-label" for="email">E-mail</label>
          <input class="form-control" id="email" type="email" placeholder="e-mail" v-model="email"/>
        </div>
        <div class="mb-3">
          <label class="form-label" for="password">Password</label>
          <input class="form-control" id="password" type="password" placeholder="password" v-model="password"/>
        </div>
        <div class="mb-3">
          <label class="form-label" for="password-repeat">Password Repeat</label>
          <input class="form-control" id="password-repeat" type="password" placeholder="password" v-model="passwordRepeat"/>
        </div>
        <div class="text-center">
          <button class="btn btn-primary" :disabled="isDisabled || apiProgress" @click.prevent="submit">
            <span v-if="apiProgress" class="spinner-border spinner-border-sm" role="status"></span>
            Sign Up
          </button>
        </div>
      </div>
    </form>
    <div class="alert alert-success mt-3" v-else>
      Please check your e-mail to activate your account
    </div>
  </div>
</template>
 
<script>
import axios from "axios";
import Input from "../components/Input-c.vue";
 
export default {
  name: 'SignUpPage',
  components: {
    Input
  },
  props: {
 
  },
  data:() => {
    return {
      username: '',
      email: '',
      password: '',
      passwordRepeat: '',
      apiProgress: false,
      signUpSuccess: false,
      errors: {}
    }
  },
  computed: {
    isDisabled() {
      return (this.password && this.passwordRepeat)? this.password != this.passwordRepeat : true
    }
  },
  methods: {
    submit() {
      this.apiProgress = true;
      axios.post("/api/1.0/users", {
        username: this.username,
        email: this.email,
        password: this.password,
      }).then(() => {
        this.signUpSuccess = true
      })
      .catch((error) => {
        if(error.response.status === 400) {
          this.errors = error.response.data.validationErrors
        }
        this.apiProgress = false;
      })
    },
    onChangeUsername(value) {
      this.username = value;
    }
  },
}
</script>
 
<style lang="scss" scoped>
 
</style>