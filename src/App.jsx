import ContactsList from "./Components/contact/ContactList/ContactsList";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <Box sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          backgroundColor: "rgba(224, 242, 241, .3)",
          textAlign: "center",
          padding: "5px 50px",
          color: "#009688",
          borderBottom: "2px solid rgba(224, 242, 241, .8)",
          width: "100%",
        }}
      >
        <Typography variant="h5">Welcome to Phonebook</Typography>{" "}
        <Typography variant="subtitle2" gutterBottom>
          Your tool to save your contacts forever
        </Typography>
      </Box>

      <Box
        sx={{
          padding: "10px 50px",
          margin: "0 50px",
          height: "max-content",
        }}
      >
        <ContactsList />
      </Box>
    </Box>
  );
}

export default App;
