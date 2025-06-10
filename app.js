import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Testing environment ready!',
    moduleType: 'ES modules',
    nodeVersion: process.version
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    clear: 'healthy' // Add this property
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;