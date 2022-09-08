<template>
  <v-dialog
    v-model="dialog"
    max-width="900"
    persistent
    style="overflow: hidden !important"
  >
    <v-card>
      <v-card-title>
        {{ processType == "new" ? "Kullanıcı Ekle" : "Kullanıcı Düzenle" }}
        <v-spacer></v-spacer>
        <v-btn @click="closeDialog()" color="danger darken-2" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <v-text-field
                v-model="editUser.firstName"
                label="Ad"
                :error-messages="
                  validationMessages($v.editUser.firstName, 'Ad')
                "
                prepend-inner-icon="mdi-account"
                @input="$v.editUser.firstName.$touch()"
                @blur="$v.editUser.firstName.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="editUser.lastName"
                label="Soyad"
                :error-messages="
                  validationMessages($v.editUser.lastName, 'Soyad')
                "
                prepend-inner-icon="mdi-account"
                @input="$v.editUser.lastName.$touch()"
                @blur="$v.editUser.lastName.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="editUser.email"
                label="E-Posta"
                :error-messages="
                  validationMessages($v.editUser.email, 'E-Posta')
                "
                prepend-inner-icon="mdi-email"
                @input="$v.editUser.email.$touch()"
                @blur="$v.editUser.email.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="editUser.userName"
                label="Kullanıcı Adı"
                :error-messages="
                  validationMessages($v.editUser.userName, 'Kullanıcı Adı')
                "
                prepend-inner-icon="mdi-account-arrow-right"
                @input="$v.editUser.userName.$touch()"
                @blur="$v.editUser.userName.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6" v-if="processType == 'new'">
              <v-text-field
                v-model="editUser.password"
                label="Şifre"
                :error-messages="
                  validationMessages($v.editUser.password, 'Şifre')
                "
                prepend-inner-icon="mdi-key"
                @click:append="showPassword = !showPassword"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @input="$v.editUser.password.$touch()"
                @blur="$v.editUser.password.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="editUser.trin"
                label="T.C Kimlik No"
                :error-messages="
                  validationMessages($v.editUser.trin, 'T.C Kimlik No')
                "
                prepend-inner-icon="mdi-card-account-details"
                @input="$v.editUser.trin.$touch()"
                @blur="$v.editUser.trin.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="editUser.phoneNumber"
                label="Telefon"
                :error-messages="
                  validationMessages($v.editUser.phoneNumber, 'Telefon')
                "
                prepend-inner-icon="mdi-phone"
                placeholder="5xxxxxxxxx"
                @input="$v.editUser.phoneNumber.$touch()"
                @blur="$v.editUser.phoneNumber.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-autocomplete
                v-model="editUser.roleGroup"
                label="Role Grup"
                :item-text="(item) => item.name"
                :item-value="(item) => item"
                :error-messages="
                  validationMessages($v.editUser.roleGroup, 'Role Grup')
                "
                @input="$v.editUser.roleGroup.$touch()"
                @blur="$v.editUser.roleGroup.$touch()"
                prepend-inner-icon="mdi-account-star"
                :items="roleGroupList"
                @change="roleGroupChange()"
              ></v-autocomplete>
            </div>
            <div class="col-lg-6">
              <v-autocomplete
                v-model="editUser.role"
                label="Role"
                item-text="name"
                :item-value="item => item"
                :error-messages="validationMessages($v.editUser.role, 'Role')"
                @input="$v.editUser.role.$touch()"
                @blur="$v.editUser.role.$touch()"
                prepend-inner-icon="mdi-account-star"
                :items="roleList"
              ></v-autocomplete>
            </div>
            <div
              class="col-lg-6"
              v-if="editUser.roleGroup && editUser.roleGroup.id == 3"
            >
              <v-text-field
                v-model="editUser.erpCode"
                label="Cari Kod"
                prepend-inner-icon="mdi-cog"
              ></v-text-field>
            </div>
            <div
              class="col-lg-6"
              v-if="editUser.roleGroup && editUser.roleGroup.id != 3"
            >
              <v-text-field
                v-model="editUser.salesPersonCode"
                label="Plasiyer Kod"
                prepend-inner-icon="mdi-cog"
              ></v-text-field>
            </div>
            <div
              class="col-lg-6"
              v-if="editUser.roleGroup && editUser.roleGroup.id != 1"
            >
              <v-autocomplete
                v-model="editUser.branchCode"
                label="Şube Kodu"
                prepend-inner-icon="mdi-office-building"
                :items="companyBranchList"
                item-text="name"
                item-value="code"
                @change="companyBranchChange"
                :error-messages="
                  validationMessages($v.editUser.branchCode, 'Şube Kodu')
                "
                @input="$v.editUser.branchCode.$touch()"
                @blur="$v.editUser.branchCode.$touch()"
              ></v-autocomplete>
            </div>
            <div
              class="col-lg-6"
              v-if="editUser.roleGroup && editUser.roleGroup.id != 1"
            >
              <v-autocomplete
                v-model="editUser.warehouseCode"
                label="Depo Kodu"
                prepend-inner-icon="mdi-warehouse"
                :items="warehouseList"
                item-text="name"
                item-value="code"
                :error-messages="
                  validationMessages($v.editUser.warehouseCode, 'Depo Kodu')
                "
                @input="$v.editUser.warehouseCode.$touch()"
                @blur="$v.editUser.warehouseCode.$touch()"
              ></v-autocomplete>
            </div>
            <div
              class="col-lg-6"
              v-if="editUser.roleGroup && editUser.roleGroup.id != 1"
            >
              <v-autocomplete
                v-model="editUser.safeCode"
                label="Kasa Kodu"
                prepend-inner-icon="mdi-cash-lock"
                :items="bankSafeDepositsList"
                item-text="name"
                item-value="code"
                :error-messages="
                  validationMessages($v.editUser.safeCode, 'Kasa Kodu')
                "
                @input="$v.editUser.safeCode.$touch()"
                @blur="$v.editUser.safeCode.$touch()"
              ></v-autocomplete>
            </div>
          </div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="secondary" @click="closeDialog()" :loading="pendingRequest">İptal</v-btn>
        <v-btn text color="success" @click="saveForm" :loading="pendingRequest">Kaydet</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
import { validationMessages } from "@/validationMessages.js";
//import simplebar from "simplebar-vue";
import { mapActions, mapState } from "vuex";

export default {
  mixins: [validationMixin],

  validations() {
    const self = this;
    return {
      editUser: {
        firstName: { required },
        lastName: { required },
        email: { required, email },
        userName: { required },
        roleGroup: { required },
        role: { required },
        password: self.processType == "new" ? { required } : {},
        trin: { required, maxLength: maxLength(11), minLength: minLength(11) },
        phoneNumber: {
          required,
          maxLength: maxLength(10),
          minLength: minLength(10),
        },
      },
    };
  },

  components: {
    //  simplebar
  },

  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
    userProp: {
      type: Object,
      default: () => ({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        passwordHash: "",
        passwordSalt: "",
        trin: "",
        phoneNumber: null,
        erpCode: "",
        erpName: "",
        salesPersonCode: null,
        branchCode: null,
        warehouseCode: null,
        projectCode: null,
        safeCode: null,
        sendEmail: true,
        registerDate: "",
        isActive: true,
        lastLoginDate: "",
        loginCount: null,
        roleGroup: null,
        role: null,
      }),
    },
    processType: {
      type: String,
      default: "new",
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  mounted() {
    
  },
  data() {
    return {
      dialog: false,
      showPassword: false,
      roleGroupList: [],
      roleList: [],
      warehouseList: [],
      companyBranchList: [],
      bankSafeDepositsList: [],
      editUser: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        passwordHash: "",
        passwordSalt: "",
        trin: "",
        phoneNumber: null,
        erpCode: "",
        erpName: "",
        salesPersonCode: null,
        branchCode: null,
        warehouseCode: null,
        projectCode: null,
        safeCode: null,
        sendEmail: true,
        registerDate: "",
        isActive: true,
        lastLoginDate: "",
        loginCount: null,
        roleGroup: null,
        role: null,
      },
      pendingRequest: false
    };
  },
  methods: {
    ...mapActions("user", [
      "userAdd",
      "userUpdate",
      "fetchSingleUser",
      "fetchRoleGroupList",
      "fetchRoleList",
      "fetchUserList"
    ]),
    ...mapActions("warehouse", ["fetchWarehouseList"]),
    ...mapActions("company", ["fetchBranchList"]),
    ...mapActions("bank", ["fetchSafeDepositsList"]),
    validationMessages,
    roleGroupChange() {
      (this.editUser.role = null), this.getRoleList();
    },
    closeDialog() {
      this.dialog = false;
      this.$v.$reset();
    },
    async saveForm() {
      this.$v.$touch();
      console.log("IS INVALID", this.$v.$invalid);
      if (!this.$v.$invalid) {
        this.pendingRequest = true;
        let requestBody = {
          FirstName: this.editUser.firstName,
          LastName: this.editUser.lastName,
          UserName: this.editUser.userName,
          Email: this.editUser.email,
          Password: this.editUser.password,
          Trin: this.editUser.trin,
          PhoneNumber: this.editUser.phoneNumber,
          ErpCode: this.editUser.erpCode,
          SalesPersonCode: this.editUser.salesPersonCode,
          RoleGroupId: this.editUser.roleGroup.id,
          RoleId: this.editUser.role.id,
          CashSafeCode: this.editUser.safeCode,
          isActive: true,
        };
        if(this.processType == 'new')
        {
          let result = await this.userAdd({
            body:requestBody
          })
          console.log("ADD_RESULT",result)
          if(result.data.success)
          {
            this.dialog = false;
          }
          
        }
        else
        {
          requestBody.Id = this.editUser.id
          let result = await this.userUpdate({
            body:requestBody
          });
          if(result.data.success)
          {
            this.dialog = false;
          }
          
            
        }
        this.pendingRequest = false;    
      }
    },
    async getRoleGroupList() {
      this.roleGroupList = await this.fetchRoleGroupList({
        params: {
          userId: this.user.UserId,
        },
      });
    },
    async getRoleList() {
      if(this.editUser.roleGroup)
      this.roleList = await this.fetchRoleList({
        params: {
          roleGroupId: this.editUser.roleGroup.id,
        },
      });
    },
    async getUser(userId) {
      this.editUser = await this.fetchSingleUser({
        urlSegments: [userId],
      });
    },
    async getWarehouseList(companyBranch = null) {
      if (companyBranch)
        this.warehouseList = await this.fetchWarehouseList({
          params: {
            branchCode: companyBranch,
          },
        });
    },
    async getCompanyBranchList() {
      this.companyBranchList = await this.fetchBranchList({
        params: {
          branchCode: 1,
        },
      });
    },
    async getSafetyDeposits(companyBranch = null) {
      if (companyBranch)
        this.bankSafeDepositsList = await this.fetchSafeDepositsList({
          params: {
            branchCode: companyBranch,
          },
        });
    },
    companyBranchChange(value) {
      this.getWarehouseList(value);
      this.getSafetyDeposits(value);
    },
  },
  watch: {
    dialog: async function (newVal) {
      if (newVal) {

        await this.getRoleGroupList();

        await this.getWarehouseList();

        await this.getCompanyBranchList();

        await this.getSafetyDeposits();

        await this.getRoleList();
        
      } else {
        this.editUser = {
          firstName: "",
          lastName: "",
          userName: "",
          email: "",
          passwordHash: "",
          passwordSalt: "",
          trin: "",
          phoneNumber: null,
          erpCode: "",
          erpName: "",
          salesPersonCode: null,
          branchCode: null,
          warehouseCode: null,
          projectCode: null,
          safeCode: null,
          sendEmail: true,
          registerDate: "",
          isActive: true,
          lastLoginDate: "",
          loginCount: null,
          roleGroup: null,
          role: null,
        };
      }

      this.$emit("dialogChange", newVal);
    },
    showDialog: function (newVal) {
      this.dialog = newVal;
    },
    userProp: async function (newVal) {
      if (this.processType == "edit"){
        await this.getUser(newVal.id)
      } 
    },
  },
};
</script>