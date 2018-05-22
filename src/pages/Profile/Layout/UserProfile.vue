<template>
  <form method="#" action="#">
    <fade-render-transition :duration="200">
        <card>
          <div slot="header">
            <div class="row switch">
              <l-switch v-model="model.edit">
                <i class="fa fa-pencil" slot="on"></i>
                <i class="fa fa-pencil" slot="off"></i>
              </l-switch>
            </div>
            <h5 class="card-title left">{{ model.email }}</h5>
          </div>
          <div class="row text-center">
            <circleImg  :imagePath="model.imageUrl == null ? 'static/img/faces/user.jpg' : model.imageData"
                        :sizeStyle="'width: 120px; height:120px'"
                        :isUpload="model.edit"
                        @change="uploadedImage">
            </circleImg>
            <div class="col-12 text-center error-message">
              <span v-if="model.edit" class="error-message">
                <i class="fa fa-info-circle green-sea" style="font-size: 18px; cursor:pointer;" 
                  title="click for more tips" @click="showImageTips" aria-hidden="true"></i>
                <span v-if="model.edit && model.imageUrl === null && this.selectedImageFile === null">Update profile picture</span>
              </span>
              <span v-if="model.edit && this.selectedImageFile !== null" class="note-message">{{this.selectedImageFile.name}}</span>
            </div>
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
                <button type="button" @click="resetForm" :disabled="!model.edit" class="btn btn-round btn-reset btn-wd">Reset</button>
                <button type="submit" @click.prevent="saveForm" :disabled="!model.edit" class="btn btn-round btn-submit btn-wd">Save</button>
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
  import { FadeRenderTransition, Switch as LSwitch } from 'src/components/index'
  import { readImageFileData } from 'src/js/image'
  import CircleImage from 'src/components/CircleImage.vue'
  import UserModel from 'src/models/userModel'
  import swal from 'sweetalert2'
  import cloneDeep from 'clone-deep'
  import { UserProfileBus } from 'src/eventBus/userProfileBus.js'

  export default {
    components: {
      FadeRenderTransition,
      [CircleImage.name]: CircleImage,
      LSwitch
    },
    data () {
      return {
        calendarDate: null,
        model: new UserModel(),
        originalState: null,
        selectedImageFile: null
      }
    },
    validations: {
      model: UserModel.validationScheme()
    },
    computed: {
      ...mapGetters([
        'cognitoUserEmail'
      ])
    },
    methods: {
      ...mapActions([
        'getUserProfileInfo',
        'saveUserProfileImage',
        'saveUserProfile'
      ]),
      resetForm () {
        swal({
          type: 'warning',
          title: 'Undo Changes',
          html: '<small>Are you sure that you want to undo changes in profile ?</small>',
          buttonsStyling: false,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-warning btn-round btn-wd',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.value) {
            this.selectedImageFile = null
            this.model = cloneDeep(this.originalState)
            this.calendarDate = this.model.birthdate
          }
        })
      },
      showImageTips () {
        this.showNotifyMessage('Profile image must be a jpeg/jpg file type and file size of image less than 500 KB.', 3000, 'info', 'fa fa-file-image-o')
      },
      uploadedImage (value) {
        if (value) {
          readImageFileData(value).then(response => {
            this.selectedImageFile = value
            this.model.imageData = response
          })
        }
      },
      async initUserProfile () {
        await this.getUserProfileInfo(this.cognitoUserEmail).then((data) => {
          // this.model = this.$store.state.user.profile
          this.model = cloneDeep(this.$store.state.user.profile)
          this.calendarDate = this.model.birthdate
        }, (error) => {
          console.log(error)
          this.logoutUser()
        })
      },
      async saveUserInfo () {
        var profileInfo = {
          'email': this.cognitoUserEmail,
          'firstName': this.model.firstName,
          'lastName': this.model.lastName,
          'mobile': this.model.mobile,
          'birthdate': this.model.birthdate.toString(),
          'gender': this.model.gender,
          'address': this.model.address,
          'country': this.model.country,
          'imageUrl': this.model.imageUrl,
          'modifiedOn': new Date().toString()
        }

        this.saveUserProfile(profileInfo).then((response) => {
          this.model = this.$store.state.user.profile
          this.originalState = cloneDeep(this.model)
          this.model.edit = false
          this.$loading.endLoading('loading')
          this.showNotifyMessage('User profile information has been updated successfully.', 3000, 'info', 'nc-icon nc-check-2')
        }, (error) => {
          console.log(error)
          this.showNotifyMessage('User profile information failed to updated', 3000, 'error', 'nc-icon nc-check-2')
          this.$loading.endLoading('loading')
        })
      },
      saveForm () {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return
        }

        if (this.model.imageUrl === null && this.selectedImageFile === null) {
          this.swalError('Please upload your profile image')
          return
        }

        swal({
          type: 'info',
          title: 'Save Profile',
          html: '<small>Are you confirm to save changes ?</small>',
          buttonsStyling: false,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-primary btn-round btn-wd',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.value) {
            this.$loading.startLoading('loading')
            
            if (this.selectedImageFile) {
              let profileImage = { 'username': this.cognitoUserEmail, 'image': this.selectedImageFile }
              
              this.saveUserProfileImage(profileImage).then((response) => {
                if (response.status === 200) {
                  this.model.imageUrl = this.profileImageUrl
                  this.saveUserInfo()
                } else {
                  this.swalError('Update profile picture failed.')
                  this.$loading.endLoading('loading')
                }
              }, (error) => {
                console.log(error)
                this.$loading.endLoading('loading')
                return
              })
            } else {
              this.saveUserInfo()
            }
          }
        })
      }
    },
    watch: {
      calendarDate: function (val) {
        this.model.birthdate = val
      },
      'model.edit' (val) {
        if (val) {
          this.originalState = cloneDeep(this.model)
        } else {
          this.model = this.originalState
          this.selectedImageFile = null
        }
        
        this.model.edit = val
      },
      '$store.state.user.profile.imageData' (val) {
        if (val) {
          this.model.imageData = val
          UserProfileBus.setUserProfileImage(val)
        }
      }
    },
    beforeMount: async function () {
      this.initUserProfile()
    }
  }

</script>
