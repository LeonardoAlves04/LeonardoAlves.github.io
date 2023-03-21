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
        value={values.Nome}
        name={formattedName("Nome")}
        error={formattedError("Nome")}
        helperText={formattedHelper("Nome")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="text"
        label="Sobrenome"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.Sobrenome}
        name={formattedName("Sobrenome")}
        error={formattedError("Sobrenome")}
        helperText={formattedHelper("Sobrenome")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="text"
        label="País"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.País}
        name={formattedName("País")}
        error={formattedError("País")}
        helperText={formattedHelper("País")}
        sx={{ gridColumn: "span 4" }}
      />
      <TextField
        fullWidth
        type="text"
        label="Rua"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.Rua}
        name={formattedName("Rua")}
        error={formattedError("Rua")}
        helperText={formattedHelper("Rua")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="text"
        label="Rua 2 (opcional)"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.Rua2}
        name={formattedName("Rua2")}
        error={formattedError("Rua2")}
        helperText={formattedHelper("Rua2")}
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
        value={values.etado}
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
        value={values.CEP}
        name={formattedName("CEP")}
        error={formattedError("CEP")}
        helperText={formattedHelper("CEP")}
        sx={{ gridColumn: "1fr" }}
      />
    </Box>
  );
};

export default AddressForm;
