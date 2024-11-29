import express from 'express';
const app = express();
const PORT = 8000;
app.use('*', (req, res) => {
    res.status(404).json({message: 'not found'});
});
app.listen(PORT, () => {
    console.log(`Сервер слушает на порту ${PORT}`);
});