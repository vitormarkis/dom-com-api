import { getElements } from "./scripts/functionals.js"
import { Card } from "./src/components/Card/Card.js"

async function getPokemon(id) {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res.data
}

getPokemon(25)

async function createObjectForCard(pokemon_data) {
    let data = await pokemon_data
    console.log(data['sprites']['versions'])
    return {
        gif: data['sprites']['versions'][`generation-v`]['black-white']['animated']['front_default'],
        name: data.name + '.',
        id: data.id,
    }
}

async function printNewPokemon(id, where) {
    let elements = getElements()
    let pokemon_data = await getPokemon(id)
    let pokemon_obj = await createObjectForCard(pokemon_data)
    let pokemon_node = Card(pokemon_obj)
    elements[where].append(pokemon_node)
}

function printMultiplePokemons(id_array) {
    id_array.map(id => printNewPokemon(id))
}

function bulkPrintPokemons(idx, idxfinal) {
    for(let id = idx; id < idxfinal; id++) {
        printNewPokemon(id, 'container_cards')
    }
}

printNewPokemon(25, 'container_favourite_cards')
printNewPokemon(30, 'container_favourite_cards')

bulkPrintPokemons(0,30)

// printMultiplePokemons(
//     [25,23,22,21,20,19,200], 'vi'
// )
