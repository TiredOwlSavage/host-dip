import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Hero = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h3" component="h1" gutterBottom>
              Встречайте первый в СНГ генератор чат ботов
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Используйте TelBot для быстрого создания ботов по вашим запросам!
            </Typography>
            <Button variant="contained" size="large" href="#get-started">
              Начать использовать
            </Button>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              sx={{ width: '100%', maxWidth: 600, height: 'auto' }}
              alt="Hero"
              src="path_to_your_hero_image"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
