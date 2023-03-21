import { Box, Typography, TextField } from "@mui/material";

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  return (
    <Box m="30px 0">
      <Box>
        <Typography>Informações de Contato</Typography>
        <TextField
          fullWidth
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          type="text"
          label="Número de Telefone"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.numeroDeTelefone}
          name="email"
          error={!!touched.numeroDeTelefone && !!errors.numeroDeTelefone}
          helperText={touched.numeroDeTelefone && errors.numeroDeTelefone}
          sx={{ gridColumn: "span 4" }}
        />
      </Box>
    </Box>
  );
};

export default Payment;
