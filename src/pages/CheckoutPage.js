import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  Stack,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React, { useState } from "react";
import CartProductList from "../components/CartProductList";
import CheckoutDelivery from "../components/CheckoutDelivery";
import CheckoutSummary from "../components/CheckoutSummary";

const STEPS = ["Cart", "Delivery", "Summary"];

function CheckoutPage() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Container sx={{ my: 3 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
        <Link underline="hover" color="inherit" component={RouterLink} to="/">
          CoderStore
        </Link>
        <Typography color="text.primary">Checkout</Typography>
      </Breadcrumbs>

      <Stack spacing={2}>
        <Box sx={{ width: "100%" }}>
          <Stepper nonLinear activeStep={activeStep}>
            {STEPS.map((label, index) => (
              <Step key={label}>
                <StepButton onClick={handleStep(index)}>{label}</StepButton>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Stack>

      {activeStep === 0 && <CartProductList setActiveStep={setActiveStep} />}
      {activeStep === 1 && <CheckoutDelivery setActiveStep={setActiveStep} />}
      {activeStep === 2 && <CheckoutSummary />}
    </Container>
  );
}

export default CheckoutPage;
