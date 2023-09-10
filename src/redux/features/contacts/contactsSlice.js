import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: localStorage?.getItem("contacts")
    ? JSON.parse(localStorage.getItem("contacts"))
    : [
        {
          id: 1,
          name: "Anett Urridge",
          number: "155-614-6550",
        },
        {
          id: 2,
          name: "Emeline Greenroad",
          number: "478-222-1034",
        },
        {
          id: 3,
          name: "Taite Vivian",
          number: "113-493-4461",
        },
        {
          id: 4,
          name: "Alfonse Stinchcombe",
          number: "504-123-3145",
        },
        {
          id: 5,
          name: "Lauren Ten Broek",
          number: "483-774-8620",
        },
        {
          id: 6,
          name: "Dela Sutor",
          number: "946-843-9972",
        },
        {
          id: 7,
          name: "Arin Flippelli",
          number: "619-179-6493",
        },
        {
          id: 8,
          name: "Brady Szachniewicz",
          number: "211-888-8482",
        },
        {
          id: 9,
          name: "Hattie Braidford",
          number: "929-332-0415",
        },
        {
          id: 10,
          name: "Gus Breacher",
          number: "632-603-5032",
        },
      ],
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    AddNewContact: (state, action) => {
      //console.log(action.payload);
      state.contacts = [action.payload, ...state.contacts];
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    deleteExistingContact: (state, action) => {
      // id of contact to delete
      const id = action.payload.id;
      // update state by removing one with id
      state.contacts = state.contacts.filter((contact) => contact.id !== id);

      //reset localStorage
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },

    updateAnExistingContact: (state, action) => {
      const id = action.payload.id;
      const name = action.payload.name;
      const number = action.payload.number;
      state.contacts = state.contacts.forEach((contact) => {
        if (contact.id === id) {
          contact.name = name;
          contact.number = number;
        }
      });
      //reset localStorage
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddNewContact, deleteExistingContact, updateAnExistingContact } =
  contactSlice.actions;

export default contactSlice.reducer;
