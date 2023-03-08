import { Box, Checkbox, FormControl, FormControlLabel, Typography } from "@mui/material";
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
            values={values.billingAddress}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}/>
        </Box>

        <Box mb="20px">
          <FormControlLabel
            label="Mesmo endereço da entrega"
            control={
            <Checkbox
                defaultChecked
                values={values.shippingAddress.isSameAddress}
                onChange={()=>
                setFieldValue(
                    "shippingAddress.isSameAddress",
                    !values.shippingAdress.isSameAddress
                    )
                }
            />
            }
          />
        </Box>

        {/* shipping form */}
     </Box>   
    )
};

export default Shipping;
