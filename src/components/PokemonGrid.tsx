'use client'

import { useState } from 'react'

import type { Pokemon } from '@/lib/api/pokemon'

import { useDebounce } from '@/hooks/useDebounce'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { usePokemonInfinite } from '@/hooks/usePokemonInfinite'

import PokemonCard from './PokemonCard'
import { Input } from './ui/input'


export default function PokemonGrid() {
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search)

    const [expandedId, setExpandedId] = useState<null | number>(null)

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
        usePokemonInfinite(debouncedSearch)

    const pokemon: Pokemon[] = data?.pages.flatMap(p => p.data) ?? []

    const loadMoreRef = useInfiniteScroll({
        enabled: hasNextPage,
        onLoadMore: () => void fetchNextPage()
    })

    const toggleCard = (id: number) => {
        setExpandedId(prev => (prev === id ? null : id))
    }

    return (
        <div>
            <div className="sticky top-0 z-10 bg-background p-8">
                <Input
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search by name, type, or description"
                    value={search}
                />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 px-16 pb-8">
                {pokemon.map((p: Pokemon) => {
                    return (
                        <PokemonCard
                            expanded={expandedId === p.id}
                            key={p.id}
                            onToggle={() => toggleCard(p.id)}
                            pokemon={p}
                        />
                    )
                })}
            </div>
            <div
                className="flex justify-center items-center h-12"
                ref={loadMoreRef}
            >
                {isFetchingNextPage && (
                    <span className="text-sm text-muted-foreground">
                        Loading more...
                    </span>
                )}
            </div>
        </div>
    )
}