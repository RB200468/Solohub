import app from './app';
import prisma from './prisma';
import config from './config/config'


const PORT = config.port;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// Handling Server Close
process.on('SIGINT', async () => {
  console.log('Closing DB connection...');
  await prisma.$disconnect();
  server.close(() => process.exit(0));
});

process.on('SIGTERM', async () => {
  console.log('Closing DB connection...');
  await prisma.$disconnect();
  server.close(() => process.exit(0));
});
