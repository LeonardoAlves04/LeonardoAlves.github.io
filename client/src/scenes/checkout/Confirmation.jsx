import { Box, Alert, AlertTitle } from "@mui/material";

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle sx={{ mb: "10px" }}>Confirmado!</AlertTitle>
        Você acaba de confirmar o seu pedido —{" "}
        <strong>Parabéns pela sua compra e obrigado!</strong>
        <h4>ID do seu pedido para rastreamento: #634187362473264324526</h4>
      </Alert>
    </Box>
  );
};

export default Confirmation;
