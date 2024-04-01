import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstName = 'Имя обязательно к заполнению';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Фамилия обязательна к заполнению';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email обязателен к заполнению';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email недействителен';
      isValid = false;
    }

    if (!formData.password) {
      errors.password = 'Пароль обязателен к заполнению';
      isValid = false;
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(formData.password)) {
      errors.password = 'Пароль должен быть не менее 8 символов, включая заглавные и строчные буквы, цифры и символы';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
        const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        const newUserData = { ...formData, id: Date.now() };
        const updatedUsers = [...users, newUserData];

        console.log('Adding new user:', newUserData); // Добавьте это

        localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
        
        console.log('Registered users after registration:', updatedUsers); // Добавьте это

        navigate('/app/overview');
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="Имя"
            name="firstName"
            autoComplete="given-name"
            autoFocus
            value={formData.firstName}
            onChange={handleChange}
            error={!!formErrors.firstName}
            helperText={formErrors.firstName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Фамилия"
            name="lastName"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={handleChange}
            error={!!formErrors.lastName}
            helperText={formErrors.lastName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email адрес"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            error={!!formErrors.password}
            helperText={formErrors            .password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Зарегистрироваться
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default RegisterPage;