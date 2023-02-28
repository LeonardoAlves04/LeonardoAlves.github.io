import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkedEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkedEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3"> Se inscreva na nossa Newsletter</Typography>
      <Typography>
        e receba um cupom de R$30 reais para sua primeira compra
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Coloque seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography
          sx={{
            p: "10px",
            ":hover": {
              cursor: "pointer",
              backgroundColor: "grey",
              color: "white",
            },
          }}
        >
          Inscreva-se
        </Typography>
      </Box>
    </Box>
  );
};

export default Subscribe;
