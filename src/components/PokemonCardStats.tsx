import type { Pokemon } from "@/lib/api/pokemon";

export function PokemonCardStats({ pokemon }: { pokemon: Pokemon }) {
    return (
        <div className="p-3 space-y-2 text-sm">
            <p className="text-sm text-muted-foreground">{pokemon.description}</p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                <div>HP: {pokemon.hp}</div>
                <div>Attack: {pokemon.attack}</div>
                <div>Defense: {pokemon.defense}</div>
                <div>Speed: {pokemon.speed}</div>
                <div>Sp. Attack: {pokemon.specialAttack}</div>
                <div>Sp. Defense: {pokemon.specialDefense}</div>
                <div>Height: {pokemon.height.toFixed(1)}</div>
                <div>Weight: {pokemon.weight.toFixed(1)}</div>
                <div>Generation: {pokemon.generation}</div>
            </div>
        </div>
    )
}
