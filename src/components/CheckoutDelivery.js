import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Button, Container, Stack, Typography } from "@mui/material";
import { FormProvider, FTextField } from "./form";
import useCartContext from "../hooks/useCartContext";

const DeliverySchema = yup.object().shape({
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
});
const defaultValues = {
  address: "",
  city: "",
  country: "",
};

function CheckoutDelivery({ setActiveStep }) {
  const methods = useForm({
    resolver: yupResolver(DeliverySchema),
    defaultValues: window.localStorage.getItem("defaultAddress")
      ? JSON.parse(window.localStorage.getItem("defaultAddress"))
      : defaultValues,
  });
  const { handleSubmit } = methods;
  const { dispatch } = useCartContext();

  const onSubmit = (data) => {
    setActiveStep((step) => step + 1);
    window.localStorage.setItem("defaultAddress", JSON.stringify(data));
    dispatch({ type: "SET_DELIVERY", payload: data });
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} sx={{ minWidth: "350px" }}>
          <Typography variant="h4" textAlign="center">
            Delivery Address
          </Typography>
          <FTextField name="address" label="Address" />
          <FTextField name="city" label="City" />
          <FTextField name="country" label="Country" />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </FormProvider>
    </Container>
  );
}

export default CheckoutDelivery;
