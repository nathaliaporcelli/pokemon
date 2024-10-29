import { Router } from 'express';
import {getAllPokemons} from '../api/pokemonService';


const router = Router();


router.get('/pokemons', getAllPokemons);

export default router;
