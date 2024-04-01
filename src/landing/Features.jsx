import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SpeedometerIcon from '@mui/icons-material/Speed';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Features = () => {
  // Для иконок MUI, мы используем React компоненты напрямую
  const features = [
    {
      title: "Feature 1",
      description: "Описание особенности 1.",
      icon: <SpeedometerIcon fontSize="large" />,
    },
    {
      title: "Feature 2",
      description: "Описание особенности 2.",
      icon: <LightbulbIcon fontSize="large" />,
    },
    {
      title: "Feature 3",
      description: "Описание особенности 3.",
      icon: <LightbulbIcon fontSize="large" />,
    },
  ];

  return (
    <section style={{ padding: '100px 0' }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} style={{ marginBottom: '32px' }}>
          <Typography variant="h4" component="h2" textAlign="center">Особенности</Typography>
        </Grid>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {feature.icon}
                  {feature.title}
                </Typography>
                <Typography variant="body2">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Features;
