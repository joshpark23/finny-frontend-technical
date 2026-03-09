/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchPokemon } from '@/lib/api/pokemon'

export function usePokemonInfinite(search: string) {
    return useInfiniteQuery({
        getNextPageParam: lastPage =>
            lastPage.pagination.hasNext
                ? lastPage.pagination.page + 1
                : undefined,

        initialPageParam: 1,

        queryFn: ({ pageParam = 1 }: { pageParam: number }) =>
            fetchPokemon(pageParam, search),

        queryKey: ['pokemon', search] as const
    })
}