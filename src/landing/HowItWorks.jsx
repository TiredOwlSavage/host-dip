import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const HowItWorks = () => {
  const steps = [
    {
      title: "Шаг 1",
      description: "Описание шага 1.",
      image: "path_to_image", // Замените на путь к вашему изображению
    },
    {
      title: "Шаг 2",
      description: "Описание шага 2.",
      image: "path_to_image", // Замените на путь к вашему изображению
    },
    {
      title: "Шаг 3",
      description: "Описание шага 3.",
      image: "path_to_image", // Замените на путь к вашему изображению
    },
  ];

  return (
    <section style={{ padding: '40px 0' }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} style={{ marginBottom: '32px' }}>
            <Typography variant="h4" component="h2" textAlign="center">Как это работает</Typography>
          </Grid>
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={step.image}
                  alt={`Изображение ${step.title}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default HowItWorks;
