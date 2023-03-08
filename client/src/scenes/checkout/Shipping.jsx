import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AdressForm from "./AddressForm";

const Shipping = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
    return (
     <Box m="30px auto">
        {/* Formulário de cobrança  */}
        <Box>
            <Typography sx={{mb="15px"}} fontSize="18px">
Informações de cobrança
            </Typography>
            <AdressForm 
            type="billingAddress"
            value={values.billingAddress}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}/>
        </Box>
        <Box mb="20px"></Box>
     </Box>   
    )
};

export default Shipping;
