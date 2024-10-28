import { Router } from 'express';
import pokemonFunction from '../api/pokemonService';

const router = Router();

// Ajuste a rota para incluir um parâmetro dinâmico
router.get('/pokemon', pokemonFunction);

export default router;
