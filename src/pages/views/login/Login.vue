<template>
  <v-app class="bg-gradient">
    <div class="account-pages my-5 pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-6">
            <div class="card shadow-lg overflow-hidden login-container">
              <div class="bg-soft bg-primary">
                <div class="row py-5">
                  <div class="col-12 py-5 text-center">
                    <img
                      src="@/assets/images/star-rulmancilik.png"
                      alt
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div class="card-body pt-0">
                <h6 class="text-muted text-center py-5">
                  OFISCOM B2B Yazılımları
                </h6>
                <b-form class="px-4 py-5" @submit.prevent="tryToLogIn">
                  <v-text-field
                    v-model="username"
                    :error-messages="
                      validationMessages($v.username, 'Kullanıcı Adı')
                    "
                    @input="$v.username.$touch()"
                    @blur="$v.username.$touch()"
                    label="Kullanıcı Adı"
                    placeholder="Kullanıcı Adınızı Giriniz"
                    prepend-inner-icon="mdi-account"
                    @keydown.enter="tryToLogIn()"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    :error-messages="
                      validationMessages($v.password, 'Şifre')
                    "
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                    label="Şifre"
                    placeholder="Şifrenizi Giriniz"
                    prepend-inner-icon="mdi-key"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                    @keydown.enter="tryToLogIn()"
                  ></v-text-field>
                  <div class="d-flex">
                    <b-form-checkbox
                      class="form-check"
                      id="customControlInline"
                      name="checkbox-1"
                      value="accepted"
                      unchecked-value="not_accepted"
                    >
                      Beni Hatırla
                    </b-form-checkbox>

                    <v-btn
                      x-small
                      depressed
                      text
                      class="ms-auto"
                      @click="forgotPasswordDialog = !forgotPasswordDialog"
                    >
                      <i class="mdi mdi-lock me-1"></i>
                      <span class="text-capitalize"
                        >Şifrenizi Mi Unuttunuz ?</span
                      >
                    </v-btn>
                  </div>

                  <div class="mt-3 text-center">
                    <v-btn
                      color="success darken-2"
                      elevation="3"
                      small
                      raised
                      @click="tryToLogIn()"
                      >GİRİŞ YAP</v-btn
                    >
                  </div>
                </b-form>

                <p class="text-center py-1">Müşteri Başvuru</p>

                <p class="text-center py-5">
                  © {{ new Date().getFullYear() }} OFISCOM Yazılımları
                </p>
              </div>
              <!-- end card-body -->
            </div>
            <div class="mt-5 text-center"></div>
          </div>
        </div>
      </div>
    </div>
    <ForgotPasswordDialog
      :showDialog="forgotPasswordDialog"
      @dialogChange="(e) => (forgotPasswordDialog = e)"
    ></ForgotPasswordDialog>
  </v-app>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import ForgotPasswordDialog from "../../../components/login/ForgotPasswordDialog.vue";

import { validationMessages } from "@/validationMessages.js"

import { mapActions } from "vuex";

export default {
  components: {
    ForgotPasswordDialog,
  },
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
      showPassword: false,
      forgotPasswordDialog: false,
    };
  },
  validations: {
    username: {
      required,
    },
    password: {
      required,
    },
  },
  methods: {
    validationMessages,
    tryToLogIn(){
      this.$v.$touch();

      if(!this.$v.$invalid)
        this.login({username:this.username, password: this.password});


    },
    ...mapActions("auth", ["login"]),
  },
};
</script>

<style scoped>
@media screen and (min-width: 600px) {
  .bg-gradient {
    height: 100%;
    background: #2c3e50 !important; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #3498db,
      #2c3e50
    ) !important; /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #3498db,
      #2c3e50
    ) !important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
}

.login-container {
  animation-name: example;
  animation-duration: 0.8s;
  animation-timing-function: ease-in;
}
@keyframes example {
  from {
    opacity: 0.1;
    margin-top: -100px;
  }
  to {
    opacity: 1;
    margin-top: 0px;
  }
}
</style>