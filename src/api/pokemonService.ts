import axios from 'axios';
import  { Request, Response } from 'express';


interface PokemonAll {
   
    count: number;
    next: string;
    previous:null;
    results:{
        name:string,
        url:string,
    }[]
}
interface PokemonDetails {
    name: string;
    height: number;
    weight: number;
  }
 
export const getAllPokemons = async (req : Request, res :  Response): Promise<void> => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
    try{
        
        const response = await axios.get<PokemonAll>(url);
        const { results} = response.data;
        const pokemons = await Promise.all(
          results.map(async({url}) => {
            const { data } = await axios.get<PokemonDetails>(url);

        const { name, height, weight } = data;

        let heightMeters = data.height/10
        let weightKg = data.weight/10
        let imc = weightKg/(heightMeters*heightMeters)

        let heightMetersFormated = heightMeters.toFixed(2)
        let weightKgFormated = weightKg.toFixed(2)
        let imcFormated = imc.toFixed(2)

        return { name,'height':heightMetersFormated, 'weight':weightKgFormated, 'imc':imcFormated };

          })  
        );
        res.status(200).json({pokemons});

  
    } catch{
      
        res.status(500).json({ error: 'Falha ao obter a lista de Pokémons' });

    }
        
};





