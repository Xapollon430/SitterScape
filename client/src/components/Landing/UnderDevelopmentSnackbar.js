import { useState, forwardRef } from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const UnderDevelopmentSnackbar = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(true);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={snackbarOpen}
    >
      <Alert
        onClose={() => setSnackbarOpen(false)}
        severity="info"
        sx={{ width: "100%" }}
      >
        SitterScape is still under development.
      </Alert>
    </Snackbar>
  );
};

export default UnderDevelopmentSnackbar;
