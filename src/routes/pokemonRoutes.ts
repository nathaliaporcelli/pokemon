import { Router } from 'express';
import {getOnePokemon , getAllPokemons} from '../api/pokemonService';


const router = Router();

router.get('/pokemon', getOnePokemon);
router.get('/pokemons', getAllPokemons);

export default router;
