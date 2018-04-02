<template>
  <form method="#" action="#">
      <fade-render-transition :duration="200">
        <card :title="'kaylek207@gmail.com'">
          <div class="row text-center">
            <circleImg :imagePath="'static/img/team/kayweng.png'"
                          :sizeStyle="'width: 120px; height:120px'">   
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
                        v-model="model.firstName">
              </fg-input>
              <div class="error-message">
                <span v-if="!$v.model.firstName.required" class="error-message">The first name field is required</span>
                <span v-if="$v.model.firstName.required && !$v.model.firstName.alphaSpace" class="error-message">The first name field must be only alphabet characters</span>
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
                        v-model="model.lastName">
              </fg-input>
              <div class="error-message">
                <span v-if="!$v.model.lastName.required">The last name field is required</span>
                <span v-if="$v.model.lastName.required && !$v.model.lastName.alphaSpace">The last name field must be only alphabet characters</span>
              </div>
            </div>
          </div> 
          <div class="row">
            <!-- gender -->
            <div class="col-md-6 col-12 form-group">
              <div>
                <label class="control-label">GENDER</label>
              </div>
              <el-select class="select-default"
                          size="large"
                          placeholder="Select Gender"
                          v-model="model.gender">
                  <el-option v-for="option in genders"
                             class="select-default"
                             :value="option.value"
                             :label="option.label"
                             :key="option.label">
                  </el-option>
                </el-select>
              <div class="error-message">
                <span v-if="!$v.model.gender.required">The gender field is required</span>
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
                        v-model="model.mobile">
              </fg-input>  
              <div class="error-message">
                <span v-if="!$v.model.mobile.required">The mobile field is required</span>
                <span v-if="!$v.model.mobile.numericPlus" class="error-message">Invalid mobile format.Please start with + and country code</span>
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
                        v-model="model.birthdate">
                <el-date-picker v-model="calendarDate"
                                format="dd-MMM-yyyy"
                                type="date"
                                :class="{'input-error': $v.model.birthdate.$error }"
                                placeholder="Date of Birth"></el-date-picker>
              </fg-input>
              <div class="error-message">
                <span v-if="!$v.model.birthdate.required">The birth date field is required</span>
                <span v-if="$v.model.birthdate.required && !$v.model.birthdate.between">You must be age of 18 or order to sign up</span>
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
                        placeholder= "Premiss Address"
                        @blur="$v.model.address.$touch()"
                        :class="{'input-error': $v.model.address.$error }"
                        :maxLength="200"
                        v-model="model.address">
              </fg-input>
              <div class="error-message">
                <span v-if="!$v.model.address.required">The premise address field is required</span>
              </div>
            </div>
          </div>
          <div class="row">
            <!-- country -->
            <div class="col-md-6 col-12 form-group">
              <label class="control-label">COUNTRY</label>
              <el-select class="select-default"
                          size="large"
                          placeholder="Select Country"
                          v-model="model.country">
                  <el-option v-for="option in countries"
                             class="select-default"
                             :value="option.value"
                             :label="option.label"
                             :key="option.label">
                  </el-option>
                </el-select>
                <div class="error-message">
                  <span v-if="!$v.model.country.required">The country field is required</span>
                </div> 
            </div> 
          </div>
          <div class="empty-row"></div>
          <div class="row">
            <div class="text-center col-12">
              <div class="button-inline">
                <button type="reset" @click="resetForm" class="btn btn-round btn-reset btn-wd">Reset</button>
                <button type="submit" @click.prevent="submitForm" class="btn btn-round btn-submit btn-wd">Save</button>
              </div>
            </div>
          </div>
        </card>
      </fade-render-transition>
    </form>
</template>

<script>
  import { DatePicker, Select, Option } from 'element-ui'
  import { FadeRenderTransition } from 'src/components/index'
  import CircleImage from 'src/components/CircleImage.vue'
  import UserModel from 'src/models/userModel'
  
  export default {
    components: {
      [Option.name]: Option,
      [Select.name]: Select,
      FadeRenderTransition,
      [DatePicker.name]: DatePicker,
      [CircleImage.name]: CircleImage
    },
    data () {
      return {
        calendarDate: null,
        genders: [
          { value: 'M', text: 'Male'},
          { value: 'F', text: 'Female'},
        ],
        model: new UserModel()
      }
    },
    validations: {
      model: UserModel.validationScheme()
    },
    methods: {
      resetForm () {
        this.model.resetState()
        this.$v.model.$reset()
      }
    },
    beforeMount () {
      this.model.resetState()
    }
  }

</script>
