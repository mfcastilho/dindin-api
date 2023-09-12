const app = require('./app');

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, async () => console.log(`Server running on http://localhost:${PORT}.`));
