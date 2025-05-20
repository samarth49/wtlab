import { Container, Typography, Box, Paper } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>
            Welcome to Our Book Store
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Discover your next favorite book from our extensive collection
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;
