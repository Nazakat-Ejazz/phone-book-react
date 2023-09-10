import Button from "@mui/material/Button";
import { Box, FormGroup } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";

import React, { useState } from "react";
import { useSelector } from "react-redux";

const NewContact = () => {
  const [name, setName] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const contacts = useSelector((state) => state.contacts.contacts);

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
    setSearchResult("");
  };

  const handleSearch = () => {
    const contact = contacts.find((c) => c.name === name);
    if (contact) {
      setSearchResult(`name : ${contact.name} , number : ${contact.number}`);
    } else {
      setSearchResult(`No such contact found.`);
    }
  };

  if (searchResult.length > 0) {
    return (
      <Box
        sx={{
          flex: "1",
          border: "1px solid #e0f2f1",
          margin: "5px auto",
          padding: "10px 25px",
          width: "100%",
          height: "220px",
          borderRadius: 1,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            width: "100%",
            textAlign: "center",
            marginBottom: "15px",
            marginTop: "100px",
          }}
        >
          {searchResult}
        </Typography>

        <Button
          variant="outlined"
          sx={{
            color: "#009688",
            border: "1px solid #009688",
            marginTop: "5px",
          }}
          onClick={reset}
        >
          back
        </Button>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        flex: "1",
        border: "1px solid #e0f2f1",
        margin: "5px auto",
        padding: "15px 25px",
        borderRadius: 1,
        height: "220px",
      }}
    >
      <Typography variant="h6" sx={{ width: "100%", textAlign: "center" }}>
        Search An Existing Contact
      </Typography>{" "}
      <Typography
        variant="subtitle2"
        sx={{ width: "100%", textAlign: "center", marginBottom: "10px" }}
      >
        Type name and press search.
      </Typography>
      <form
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <FormGroup sx={{ marginBottom: "5px", textAlign: "left" }}>
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
        <Button
          variant="outlined"
          sx={{
            color: "#009688",
            border: "1px solid #009688",
            marginTop: "5px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </form>
    </Box>
  );
};

export default NewContact;
