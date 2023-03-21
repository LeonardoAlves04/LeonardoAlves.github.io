import { Box, useMediaQuery, TextField } from "@mui/material";
import { getIn } from "formik";

const AddressForm = ({
  type,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="reapt(4, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      <TextField
        fullWidth
        type="text"
        label="Nome"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.nome}
        name={formattedName("nome")}
        error={formattedError("nome")}
        helperText={formattedHelper("nome")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="text"
        label="Sobrenome"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.sobrenome}
        name={formattedName("sobrenome")}
        error={formattedError("sobrenome")}
        helperText={formattedHelper("sobrenome")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="text"
        label="País"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.país}
        name={formattedName("país")}
        error={formattedError("país")}
        helperText={formattedHelper("país")}
        sx={{ gridColumn: "span 4" }}
      />
      <TextField
        fullWidth
        type="text"
        label="Rua"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.rua}
        name={formattedName("rua")}
        error={formattedError("rua")}
        helperText={formattedHelper("rua")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="text"
        label="Rua 2 (opcional)"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.rua2}
        name={formattedName("rua2")}
        error={formattedError("rua2")}
        helperText={formattedHelper("rua2")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="text"
        label="Cidade"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.cidade}
        name={formattedName("cidade")}
        error={formattedError("cidade")}
        helperText={formattedHelper("cidade")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="text"
        label="Estado"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.estado}
        name={formattedName("estado")}
        error={formattedError("estado")}
        helperText={formattedHelper("estado")}
        sx={{ gridColumn: "1fr" }}
      />
      <TextField
        fullWidth
        type="text"
        label="CEP"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.cep}
        name={formattedName("cep")}
        error={formattedError("cep")}
        helperText={formattedHelper("cep")}
        sx={{ gridColumn: "1fr" }}
      />
    </Box>
  );
};

export default AddressForm;
