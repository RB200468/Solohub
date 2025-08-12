import app from './app.ts';
import prisma from './prisma.ts';
import config from './config/config.ts'

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
