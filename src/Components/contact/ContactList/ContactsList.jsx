import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ContactListItem from "./ContactListItem";
import { useDispatch, useSelector } from "react-redux";
import NewContact from "../NewContact/NewContact";
import SearchContact from "../SearchContact/SearchContact";
import { updateAnExistingContact } from "../../../redux/features/contacts/contactsSlice";
const ContactsList = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [actionType, setActionType] = useState("");
  const Contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const reset = () => {
    setId("");
    setName("");
    setNumber("");
    setActionType("");
  };

  if (actionType === "update") {
    dispatch(
      updateAnExistingContact({
        id, // + 1 because id's are starting from one and length = no of total elements
        name,
        number,
      })
    );
    reset();
  }

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "0 10px",
        width: "100%",
        height: "min-content",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "15px",
        }}
      >
        <NewContact
          name={name}
          setName={setName}
          number={number}
          setNumber={setNumber}
          actionType={actionType}
        />
        <SearchContact />
      </Box>
      <Typography variant="h5" width={"100%"}>
        List of Contacts
      </Typography>{" "}
      <Typography variant="subtitle2" gutterBottom>
        All the contacts in your list
      </Typography>
      {/* List of Contacts*/}
      <Box
        sx={{
          overflowY: "scroll",
          overflowX: "hidden",
          height: "250px",
          width: "100%",
        }}
      >
        {Contacts.map((contact) => (
          <ContactListItem
            name={contact.name}
            setName={setName}
            number={contact.number}
            setNumber={setNumber}
            setId={setId}
            key={contact.id}
            id={contact.id}
            setActionType={setActionType}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ContactsList;
