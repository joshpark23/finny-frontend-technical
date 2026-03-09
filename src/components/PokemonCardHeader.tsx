"use client"

import type { Pokemon } from '@/lib/api/pokemon'

import { getTypeColor } from '@/lib/pokemonUtils'

import { Badge } from './ui/badge'
import { CardHeader, CardTitle } from './ui/card'

export function PokemonCardHeader({ pokemon }: { pokemon: Pokemon }) {
    return (
        <CardHeader className="h-12 flex items-center px-4 py-2">
            <div className="flex items-center gap-2">
                <CardTitle className="text-lg">{pokemon.name}</CardTitle>
                <div className="flex flex-wrap gap-2">
                    {pokemon.types.map(t => (
                        <Badge className={`${getTypeColor(t)} text-xs px-2 py-0.5`} key={t}>
                            {t}
                        </Badge>
                    ))}
                </div>
            </div>
        </CardHeader>
    )
}