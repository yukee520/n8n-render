const { execSync } = require('child_process');
const port = process.env.PORT || 5678;

try {
  console.log(`Starting n8n on port ${port}...`);
  execSync(`n8n start --port=${port}`, { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to start n8n:', error);
  process.exit(1);
}
