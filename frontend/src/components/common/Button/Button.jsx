import React from 'react';
import MuiButton from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const Button = ({ children, loading = false, disabled = false, variant = 'contained', ...props }) => {
  return (
    <MuiButton variant={variant} disabled={disabled || loading} {...props}>
      {loading ? <CircularProgress size={24} color="inherit" /> : children}
    </MuiButton>
  );
};

export default Button;
