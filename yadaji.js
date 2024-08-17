const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/submit', (req, res) => {
    
    const { textbox1, textbox2 } = req.body;

    

    
    res.status(200).json({ message: 'Data received successfully!', textbox1, textbox2 });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
