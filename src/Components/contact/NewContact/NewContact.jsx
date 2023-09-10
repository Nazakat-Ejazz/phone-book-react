import Button from "@mui/material/Button";
import { Box, FormGroup } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddNewContact } from "../../../redux/features/contacts/contactsSlice";

const NewContact = ({
  name,
  setName,
  number,
  setNumber,
  actionType,
  setActionType,
}) => {
  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const muiInputStyle = {
    "& .MuiOutlinedInput-root": {
      "& > fieldset": { borderColor: "#009688" },
    },

    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        borderColor: "#009688",
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        borderColor: "#009688",
      },
    },
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleSave = () => {
    let newId = contacts.length;
    const alreadyExist = contacts.find(
      (c) => c.name === name || c.number === number
    );
    if (alreadyExist) {
      alert("Duplicate contacts are not allowed");
    } else if (name === "" || number === "") {
      alert("Empty name or number is allowed");
    } else {
      dispatch(
        AddNewContact({
          id: newId + 1, // + 1 because id's are starting from one and length = no of total elements
          name,
          number,
        })
      );
    }
    reset();
  };
  return (
    <Box
      sx={{
        border: "1px solid #e0f2f1",
        padding: "10px 25px",
        flex: "1",
        width: "100%",
        borderRadius: 1,
        height: "220px",
      }}
    >
      <Typography variant="h6" sx={{ width: "100%", textAlign: "center" }}>
        Create A New Contact
      </Typography>{" "}
      <Typography
        variant="subtitle2"
        sx={{ width: "100%", textAlign: "center", marginBottom: "10px" }}
      >
        Type name and number and press save.
      </Typography>
      <form
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            textAlign: "left",
          }}
        >
          <FormGroup sx={{ marginBottom: "10px" }}>
            <FormLabel>Name</FormLabel>
            <TextField
              type="text"
              color="primary"
              placeholder="like Jace Hayes"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={muiInputStyle}
            />
          </FormGroup>
          <FormGroup
            sx={{
              marginBottom: "10px",
            }}
          >
            <FormLabel>Number</FormLabel>
            <TextField
              type="tel"
              color="secondary"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="like 123-456-7890"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              sx={muiInputStyle}
            />
          </FormGroup>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginTop: "5px",
          }}
        >
          <Button
            variant="outlined"
            sx={{ color: "red", border: "1px solid red" }}
            onClick={reset}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#009688", border: "1px solid #009688" }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default NewContact;
