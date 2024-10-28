import axios from 'axios';

interface Pokemon {
    name: string;
    height: number;
    weight: number;
}

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/1';


const pokemonFunction = async (): Promise<void> => {
    try {
        const response = await axios.get<Pokemon>(apiUrl); 
        const { name, height, weight} = response.data
        let heightMeters = response.data.height/10
        let weightKg = response.data.weight/10
        let imc = weightKg/(heightMeters*heightMeters)
        console.log('Nome: ',name);
        console.log('Altura: ',heightMeters.toFixed(2)+ 'cm');
        console.log('Peso: ',weightKg.toFixed(2) + ' kg');
        console.log('Imc: ' + imc.toFixed(2))
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Erro ao buscar Pokémon:', error.message);
        } else {
            console.error('Erro inesperado:', error);
        }
    }
};

pokemonFunction();
export default pokemonFunction
