<template>
  <form method="#" action="#">
    <fade-render-transition :duration="200">
        <card>
          <div slot="header">
            <div class="row switch">
              <l-switch v-model="model.edit">
                <i class="fa fa-pencil" slot="on"></i>
                <i class="fa fa-times" slot="off"></i>
              </l-switch>
            </div>
            <h6 class="card-title left">{{model.email}}</h6>
          </div>
          <div class="row text-center">
            <circleImg  :imagePath="model.profileImage == null ? 'static/img/faces/user.jpg' : model.profileImage"
                        :sizeStyle="'width: 120px; height:120px'"
                        :isUpload="model.edit">
            </circleImg>
          </div>
          <hr/>
          <!-- User Info -->
          <div class="row">
            <!-- first name -->
            <div class="col-md-6 col-12">
              <fg-input type="text"
                        name="first name"
                        label="First Name"
                        placeholder= "Alan"
                        @blur="$v.model.firstName.$touch()"
                        :class="{'input-error': $v.model.firstName.$error }"
                        :maxLength="20"
                        :readonly="!model.edit"
                        v-model="model.firstName">
              </fg-input>
              <div class="error-message">
                <span v-if="model.edit && !$v.model.firstName.required" class="error-message">The first name field is required</span>
                <span v-if="model.edit && $v.model.firstName.required && !$v.model.firstName.alphaSpace" class="error-message">The first name field must be only alphabet characters</span>
              </div>
            </div>
            <!-- last name -->
            <div class="col-md-6 col-12">
              <fg-input type="text"
                        name="last name"
                        label="Last Name"
                        placeholder= "Bob"
                        @blur="$v.model.lastName.$touch()"
                        :class="{'input-error': $v.model.lastName.$error }"
                        :maxLength="30"
                        :readonly="!model.edit"
                        v-model="model.lastName">
              </fg-input>
              <div class="error-message">
                <span v-if="model.edit && !$v.model.lastName.required">The last name field is required</span>
                <span v-if="model.edit && $v.model.lastName.required && !$v.model.lastName.alphaSpace">The last name field must be only alphabet characters</span>
              </div>
            </div>
          </div> 
          <div class="row">
            <!-- gender -->
            <div class="col-md-6 col-12 form-group" :class="{'input-error': $v.model.gender.$error }">
              <label class="control-label">GENDER</label>
              <el-select class="select-default"
                          size="large"
                          placeholder="Select Gender"
                          :disabled="!model.edit"
                          v-model="model.gender">
                  <el-option v-for="option in genders"
                             class="select-default"
                             :value="option.value"
                             :label="option.label"
                             :disabled="!model.edit"
                             :key="option.value">
                  </el-option>
                </el-select>
              <div class="error-message">
                <span v-if="model.edit && !$v.model.gender.required">The gender field is required</span>
              </div> 
            </div>
            <!-- mobile -->
            <div class="col-md-6 col-12">
              <fg-input type="mobile"
                        name="mobile"
                        label="Mobile Number"
                        placeholder= "+6012345678"
                        @blur="$v.model.mobile.$touch()"
                        :class="{'input-error': $v.model.mobile.$error }"
                        :maxLength="14"
                        :readonly="!model.edit"
                        v-model="model.mobile">
              </fg-input>  
              <div class="error-message">
                <span v-if="model.edit && !$v.model.mobile.required">The mobile field is required</span>
                <span v-if="model.edit && !$v.model.mobile.numericPlus" class="error-message">Invalid mobile format.Please start with + and country code</span>
              </div>  
            </div>
          </div>
          <div class="row">
            <!-- birthday -->
            <div class="col-md-6 col-12">
              <fg-input label="Birth Date" 
                        name="birthdate"
                        @blur="$v.model.birthdate.$touch()"
                        :class="{'input-error': $v.model.birthdate.$error }"
                        :readonly="!model.edit"
                        v-model="model.birthdate">
                <el-date-picker v-model="calendarDate"
                                format="dd-MMM-yyyy"
                                type="date"
                                :class="{'input-error': $v.model.birthdate.$error }"
                                :readonly="!model.edit"
                                placeholder="Date of Birth"></el-date-picker>
              </fg-input>
              <div class="error-message">
                <span v-if="model.edit && !$v.model.birthdate.required">The birth date field is required</span>
                <span v-if="model.edit && $v.model.birthdate.required && !$v.model.birthdate.between">You must be age of 18 or order to sign up</span>
              </div>
            </div>
          </div>
          <hr/>
          <div class="row">
            <!-- premiss address -->
            <div class="col-12">
              <fg-input type="text"
                        name="Address"
                        label="Premise Address"
                        placeholder= "Premise Address"
                        @blur="$v.model.address.$touch()"
                        :class="{'input-error': $v.model.address.$error }"
                        :maxLength="200"
                        :readonly="!model.edit"
                        v-model="model.address">
              </fg-input>
              <div class="error-message">
                <span v-if="model.edit && !$v.model.address.required">The premise address field is required</span>
              </div>
            </div>
          </div>
          <div class="row">
            <!-- country -->
            <div class="col-md-6 col-12 form-group" :class="{'input-error': $v.model.country.$error }">
              <label class="control-label">COUNTRY</label>
              <el-select class="select-default"
                          size="large"
                          placeholder="Select Country"
                          :disabled="!model.edit"
                          v-model="model.country">
                  <el-option v-for="option in countries"
                             class="select-default"
                             :value="option.value"
                             :label="option.label"
                             :disabled="!model.edit"
                             :key="option.label">
                  </el-option>
                </el-select>
                <div class="error-message">
                  <span v-if="model.edit && !$v.model.country.required">The country field is required</span>
                </div> 
            </div> 
          </div>
          <div class="empty-row"></div>
          <div class="row" v-if="model.edit">
            <div class="text-center col-12">
              <div class="button-inline">
                <button type="reset" @click="resetForm" :disabled="!model.edit" class="btn btn-round btn-reset btn-wd">Clear</button>
                <button type="submit" @click.prevent="saveProfile" :disabled="!model.edit" class="btn btn-round btn-submit btn-wd">Save</button>
              </div>
            </div>
          </div>
        </card>
      </fade-render-transition>
    </form>
</template>

<style scoped>
  .switch {
    padding-right: 15px;
    float: right;
  }
</style>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { DatePicker, Select, Option } from 'element-ui'
  import { FadeRenderTransition, Switch as LSwitch } from 'src/components/index'
  import CircleImage from 'src/components/CircleImage.vue'
  import UserModel from 'src/models/userModel'
  
  export default {
    components: {
      [Option.name]: Option,
      [Select.name]: Select,
      FadeRenderTransition,
      [DatePicker.name]: DatePicker,
      [CircleImage.name]: CircleImage,
      LSwitch
    },
    data () {
      return {
        calendarDate: null,
        model: new UserModel()
      }
    },
    validations: {
      model: UserModel.validationScheme()
    },
    computed: {
      ...mapGetters([
        'cognitoUserEmail',
      ])
    },
    methods: {
      ...mapActions([
        'getUserProfileInfo'
      ]),
      resetForm () {
        
      },
      async initUserProfile () {
        await this.getUserProfileInfo(this.cognitoUserEmail).then((data) => {
          console.log(data)
          this.model = new UserModel(data)
        }, (error) => {
          console.log(error)
        })
      },
      saveProfile () {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return
        }

        alert('saved')
      }
    },
    watch: {
      calendarDate: function (val) {
        this.model.birthdate = val
      },
      'model.edit' (val) {
        if (!val){
          //todo: undo user profile changes
        }
      }
    },
    beforeMount: async function () {
      this.initUserProfile()
    }
  }

</script>
