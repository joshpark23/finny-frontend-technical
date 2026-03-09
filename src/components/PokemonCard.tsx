"use client"

import Image from 'next/image'

import type { Pokemon } from '@/lib/api/pokemon'

import { PokemonCardHeader } from './PokemonCardHeader'
import { PokemonCardStats } from './PokemonCardStats'
import { Card } from './ui/card'

type Props = {
    expanded: boolean
    onToggle: () => void
    pokemon: Pokemon
}

export default function PokemonCard({ expanded, onToggle, pokemon }: Props) {
    return (
        <Card className="overflow-hidden pt-0 cursor-pointer transition hover:shadow-md h-56 flex flex-col" onClick={onToggle}>
            {!expanded ? (
                <>
                    <div className="relative h-44 w-full">
                        <Image alt={pokemon.name} className="object-cover" fill src={pokemon.imageUrl} />
                    </div>
                    <PokemonCardHeader pokemon={pokemon} />
                </>
            ) : (
                <>
                    <PokemonCardHeader pokemon={pokemon} />
                    <div className="w-full h-44 overflow-auto">
                        <PokemonCardStats pokemon={pokemon} />
                    </div>
                </>
            )}
        </Card>
    )
}

