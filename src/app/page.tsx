import PokemonGrid from '@/components/PokemonGrid'

import Providers from './providers'

export default function Home() {
    return (
        <main>
            <Providers>
                <PokemonGrid />
            </Providers>
        </main>
    )
}