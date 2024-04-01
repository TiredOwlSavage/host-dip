import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Этот продукт изменил мою жизнь! Очень рекомендую!",
      author: "Алексей Иванов",
      position: "CEO, Иванов Инк."
    },
    {
      quote: "Отличное качество и великолепная поддержка.",
      author: "Мария Семёнова",
      position: "Маркетолог, Семёнова и Партнёры"
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Отзывы наших клиентов
        </Typography>
        <Box sx={{ mt: 4 }}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography variant="body1" align="center" paragraph>
                "{testimonial.quote}"
              </Typography>
              <Typography variant="subtitle1" align="center" component="footer">
                — {testimonial.author}, <cite>{testimonial.position}</cite>
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
