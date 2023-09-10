import { Typography, Box, IconButton } from "@mui/material";
import React from "react";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteExistingContact } from "../../../redux/features/contacts/contactsSlice";

const ContactListItem = ({
  name,
  number,
  id,
  setName,
  setNumber,
  setActionType,
  setId,
}) => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        border: "1px solid #e0f2f1",
        padding: "10px 5px",
        marginBottom: "5px",
        width: "100%",
      }}
    >
      <Box sx={{ flex: "1" }}>
        <Typography variant="body2">
          {number} saved as {name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: "1",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <IconButton
          variant="outlined"
          size="small"
          sx={{
            color: "red",
            border: "1px solid red",
            ":hover": {
              border: "1px solid red",
            },
          }}
          onClick={() => dispatch(deleteExistingContact({ id }))}
        >
          <AiOutlineDelete size="16px" />
        </IconButton>
        <IconButton
          variant="outlined"
          size="small"
          sx={{
            color: "#009688",
            border: "1px solid #009688",
            ":hover": {
              border: "1px solid #009688",
            },
          }}
          onClick={() => {
            setActionType("update");
            setId(id);
            setName(name);
            setNumber(number);
          }}
        >
          <BsPencil size="16px" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ContactListItem;
