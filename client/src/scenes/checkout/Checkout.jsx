import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { shades } from "../../theme";
import Payment from "./Payment";
import Shipping from "./Shipping";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Mo9IdEvGHJfN2RqUbDgWE5PnHMVxV1mDTfYHJCRTQmjxkUfgyDBwd6i4hd2uDhQieyDleTcypfXLWNxSJ2ZHGls00x79NrfDt"
);

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);

    // isso copia o endereço de compra para o endereço de entrega
    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }

    if (isSecondStep) {
      makePayment(values);
    }

    actions.setTouched({});
  };

  async function makePayment(values) {
    const stripe = await stripePromise;
    const requestBody = {
      userName: [values.firstName, values.lastName].join(" "),
      email: values.email,
      products: cart.map(({ id, count }) => ({
        id,
        count,
      })),
    };

    const response = await fetch("http://localhost:1337/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  }

  return (
    <Box width="80%" m="80px auto">
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pagamento</StepLabel>
        </Step>
      </Stepper>
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              {isSecondStep && (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              <Box display="flex" justifyContent="space-between" gap="50px">
                {!isFirstStep && (
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    sx={{
                      backgroundColor: shades.primary[200],
                      boxShadow: "none",
                      color: "white",
                      borderRadius: 0,
                      padding: "15px 40px",
                    }}
                    onClick={() => setActiveStep(activeStep - 1)}
                  >
                    Voltar
                  </Button>
                )}
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
                  }}
                >
                  {!isSecondStep ? "Próximo" : "Fazer pedido"}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("campo obrigatório"),
      lastName: yup.string().required("campo obrigatório"),
      country: yup.string().required("campo obrigatório"),
      street1: yup.string().required("campo obrigatório"),
      street2: yup.string(),
      city: yup.string().required("campo obrigatório"),
      state: yup.string().required("campo obrigatório"),
      zipCode: yup.string().required("campo obrigatório"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("campo obrigatório"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("campo obrigatório"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("campo obrigatório"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("campo obrigatório"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("campo obrigatório"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("campo obrigatório"),
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("campo obrigatório"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("campo obrigatório"),
    phoneNumber: yup.string().required("campo obrigatório"),
  }),
];

export default Checkout;
