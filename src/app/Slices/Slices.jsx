import { createSlice } from "@reduxjs/toolkit";
import NavbarMenuModal from "../../components/NavbarMenu.modal";

const initialState = {
    hamburgerDisplay : 'none',
    userAccountModalDisplay : 'none',
    navbarMenuModal : 'none',
    filterMenu:'none',
    AuthenticationState:false
}

 const Slice = createSlice({
   
    name:"Slice",
    initialState,
    reducers:{

     displayHamburgerMenu : (state) => {
        state.hamburgerDisplay = 'grid'
     },

     hideHamburgerMenu : (state) => {
        state.hamburgerDisplay = 'none'
     },

     displayuserAccountModalDisplay : (state) => {
      state.userAccountModalDisplay = 'flex'
     },

     hideuserAccountModalDisplay : (state) => {
      state.userAccountModalDisplay = 'none'
     },

     displayNavbarMenuModal : (state) => {
      state.navbarMenuModal = 'grid'
     },

     hideNavbarMenuModal : (state) => {
      state.navbarMenuModal = 'none'
     },

     displayFilterMenu : (state) => {
      state.filterMenu = 'block'
     },

     hideFilterMenu : (state) => {
      state.filterMenu = 'none'
     },

     AuthSuccessful : (state) => {
      state.AuthenticationState = true
     },

     AuthFailed : (state) => {
      state.AuthenticationState = false
     }

    }
})

export const {
   displayHamburgerMenu,
   hideHamburgerMenu,
   displayuserAccountModalDisplay,
   hideuserAccountModalDisplay,
   displayNavbarMenuModal,
   hideNavbarMenuModal,
   displayFilterMenu,
   hideFilterMenu,
   AuthSuccessful,
   AuthFailed
}  = Slice.actions;

export default Slice.reducer;