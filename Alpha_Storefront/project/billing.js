const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all requests
app.use(cors());

// Your existing routes and middleware
app.use(express.json());

app.post('/api/billing', (req, res) => {
    console.log('Received billing data:', req.body);
    // Process the billing data, e.g., save to database, perform payment processing, etc.
    res.json({ success: true, message: 'Billing information processed successfully' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});