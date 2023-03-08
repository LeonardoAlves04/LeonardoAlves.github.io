import {Box, useMediaQuery, textField} from "@mui/material";
import {getIn} from  "formik";

const AddressForm = =({
type,
value,
errors,
touched,
handleBlur,
handleChange,
}) => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const formattedName = (field) => `${type}.${field}`;

    const formattedErro = (field) => 
    Boolean(
        getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

    const formattedHelper = (field) =>
    getIn(touched, formattedName)
};

export default AddressForm;
