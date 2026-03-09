export type Pokemon = {
    attack: number
    defense: number
    description: string
    generation: number
    height: number
    hp: number
    id: number
    imageUrl: string
    isLegendary?: boolean
    name: string
    specialAttack: number
    specialDefense: number
    speed: number
    types: string[]
    weight: number
}

export type PokemonResponse = {
    data: Pokemon[]
    pagination: {
        hasNext: boolean
        limit: number
        page: number
        total: number
        totalPages: number
    }
}

export async function fetchPokemon(
    page: number,
    search?: string
): Promise<PokemonResponse> {
    const params = new URLSearchParams({
        limit: '20',
        page: String(page)
    })

    if (search) params.append('search', search)

    const res = await fetch(`/api/pokemon?${params.toString()}`)

    if (!res.ok) throw new Error('Failed to fetch pokemon')

    const data = (await res.json()) as PokemonResponse

    return data
}