import UserModel from 'src/models/userModel'

const mutations = {
  setUserProfileState (state, data) {
    state.profile = new UserModel(data)

    // state.profile.firstName = data.FirstName
    // state.profile.lastName = data.LastName
    // state.profile.email = data.Email
    // state.profile.mobile = data.Mobile
    // state.profile.birthdate = data.Birthdate
    // state.profile.gender = data.Gender
    // state.profile.address = data.Address
    // state.profile.country = data.Country
    // state.profile.userType = data.UserType
    // state.profile.userTypeDescription = data.UserTypeDescription
    // state.profile.imageUrl = data.ImageUrl
    // state.profile.active = data.Active
    // state.profile.createdOn = data.CreatedOn
    // state.profile.modifiedOn = data.ModifiedOn
  }
}

export default mutations
