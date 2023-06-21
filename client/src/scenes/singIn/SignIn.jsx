import {
  Box,
  useMediaQuery,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { shades } from "../../theme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ type, values, errors, touched, handleBlur }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [CEP, setCEP] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const backToHomePage = () => {
    navigate("/");
  };

  return (
    <Box
      display="grid"
      gap="15px"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      <Box sx={{ gridColumn: "2" }}>
        <Typography
          sx={{ fontSize: "40px", marginLeft: "250px", marginTop: "50px" }}
        >
          Seu Perfil:
        </Typography>
      </Box>
      <TextField
        fullWidth
        type="text"
        label="Nome"
        onBlur={handleBlur}
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        sx={{
          marginTop: "50px",
          gridColumn: "2",
          width: "700px",
        }}
      />
      <TextField
        fullWidth
        type="text"
        label="Sobrenome"
        onBlur={handleBlur}
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        sx={{ gridColumn: "2", width: "700px" }}
      />
      <TextField
        fullWidth
        type="text"
        label="CEP"
        onBlur={handleBlur}
        onChange={(e) => setCEP(e.target.value)}
        value={CEP}
        sx={{ gridColumn: "2", width: "700px" }}
      />
      <TextField
        fullWidth
        type="text"
        label="Email"
        onBlur={handleBlur}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        sx={{ gridColumn: "2", width: "700px" }}
      />
      <Button
        fullWidth
        type="submit"
        color="primary"
        variant="contained"
        sx={{
          backgroundColor: shades.primary[400],
          boxShadow: "none",
          color: "white",
          borderRadius: 0,
          padding: "15px 40px",
          width: "700px",
          gridColumn: "2",
          marginTop: "30px",
          marginBottom: "28px",
        }}
        onClick={() => backToHomePage()}
      >
        Fazer cadastro
      </Button>
    </Box>
  );
};

export default SignIn;
