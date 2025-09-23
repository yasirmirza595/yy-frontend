import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  Snackbar
} from "@mui/material";

// ✅ Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  service: yup.string().required("Service is required"),
  vehicle: yup.string().required("Vehicle is required"),
  date: yup.date().required("Date is required"),
  time: yup.string().required("Time is required"),
});

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "success",
  });

  // ✅ Environment variable (fallback localhost for dev)
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

  const onSubmit = async (data) => {
    try {
      // 🔑 Convert date (yyyy-mm-dd) to full ISO string
      if (data.date) {
        data.date = new Date(data.date).toISOString();
      }

      const res = await axios.post(`${API_URL}/bookings`, data);
      setSnackbar({
        open: true,
        message: "✅ Booking Successful!",
        severity: "success",
      });
      reset();
    } catch (err) {
      console.error(err.response?.data || err.message || err);
      setSnackbar({
        open: true,
        message: "❌ Error submitting booking",
        severity: "error",
      });
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Book an Appointment
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {["name", "email", "phone", "service", "vehicle"].map((field) => (
          <TextField
            key={field}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            fullWidth
            margin="normal"
            {...register(field)}
            error={!!errors[field]}
            helperText={errors[field]?.message}
          />
        ))}

        <TextField
          type="date"
          fullWidth
          margin="normal"
          {...register("date")}
          error={!!errors.date}
          helperText={errors.date?.message}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          type="time"
          fullWidth
          margin="normal"
          {...register("time")}
          error={!!errors.time}
          helperText={errors.time?.message}
          InputLabelProps={{ shrink: true }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BookingForm;
