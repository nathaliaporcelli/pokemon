import express, { Request, Response } from 'express';
import pokemonRoutes from './routes/pokemonRoutes'; 
import pokemonFunction from './api/pokemonService'; 

const app = express();
const port = 3001;

app.use(express.json());

app.use('/api', pokemonRoutes); 
app.get('/', (request: Request, response: Response) => {
    response.send('Bem vindo a poke api');
});

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
});
