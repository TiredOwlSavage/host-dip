import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Импортируем Link для навигации
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert'; // Для отображения сообщений об ошибках

function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState(''); // Состояние для ошибки

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log('Attempting to log in with:', email, password); // Добавьте это

    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    console.log('Registered users:', users); // Добавьте это

    const user = users.find(u => u.email === email && u.password === password);
    console.log('User found:', user); // Добавьте это

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log('Current user after login:', localStorage.getItem('currentUser')); // Добавьте это
        navigate('/app/overview');
    } else {
        setError('Неправильный email или пароль.');
    }
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
          Пожалуйста войдите
        </Typography>
        {error && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            {error}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email адрес"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Войти
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
              Забыли пароль?
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              Регистрация
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;