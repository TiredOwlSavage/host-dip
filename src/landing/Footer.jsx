import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', color: 'text.secondary', py: 0 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ mb: 1 }}>Название компании</Typography>
            <Typography variant="body2">
              Здесь вы можете использовать строки и столбцы для организации содержимого подвала.
            </Typography>
          </Grid>

          <Grid item xs={6} sm={4}>
            <Typography variant="h6" sx={{ mb: 1 }}>Ссылки</Typography>
            <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
              <li><Link href="#!" color="inherit">Ссылка 1</Link></li>
              <li><Link href="#!" color="inherit">Ссылка 2</Link></li>
              <li><Link href="#!" color="inherit">Ссылка 3</Link></li>
              <li><Link href="#!" color="inherit">Ссылка 4</Link></li>
            </Box>
          </Grid>

          <Grid item xs={6} sm={4}>
            <Typography variant="h6" sx={{ mb: 1 }}>Ссылки на соцсети</Typography>
            <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
              <li><Link href="#!" color="inherit">Facebook</Link></li>
              <li><Link href="#!" color="inherit">Twitter</Link></li>
              <li><Link href="#!" color="inherit">Instagram</Link></li>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{bgcolor: 'rgba(0, 0, 0, 0.05)',color: 'black',
            textAlign: 'center',
            pt: 2, // padding-top: 16px (стандартный множитель 2 в теме Material UI)
            pb: 2, // padding-bottom: 16px, можно добавить для симметрии
            fontSize: '0.875rem', // размер шрифта, например 14px
            mt: 4, // margin-top: 32px, можно добавить, если нужно отступ сверху
          }}
        >
        &copy; {new Date().getFullYear()} Telbot
      </Box>
    </Box>
  );
};

export default Footer;
