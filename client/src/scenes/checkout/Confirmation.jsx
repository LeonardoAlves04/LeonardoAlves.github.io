import { Box, Alert, AlertTitle } from "@mui/material";

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Confirmado!</AlertTitle>
        Você acaba de confirmar o seu pedido —{" "}
        <strong>Parabéns pela sua compra e obrigado!</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;
