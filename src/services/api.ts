import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Game } from '../pages/Home';

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
    }),
    endpoints: (builder) => ({
        getFeaturedGame: builder.query<Game, void>({
            query: () => 'destaque'
        }),
        getOnSale: builder.query<Game[], void>({
            query: () => 'promocoes'
        }),
        getComingSoon: builder.query<Game[], void>({
            query: () => 'em-breve'
        }),
        getActionGames: builder.query<Game[], void>({
            query: () => 'acao'
        }),
        getEsportsGames: builder.query<Game[], void>({
            query: () => 'esportes'
        }),
        getSimulationGames: builder.query<Game[], void>({
            query: () => 'simulacao'
        }),
        getFighterGames: builder.query<Game[], void>({
            query: () => 'luta'
        }),
        getRPGGames: builder.query<Game[], void>({
            query: () => 'rpg'
        }),
        getGame: builder.query<Game, string>({
            query: (id) => `jogos/${id}`
        })
    }),
})

export const { 
    useGetFeaturedGameQuery,
    useGetOnSaleQuery, 
    useGetComingSoonQuery, 
    useGetActionGamesQuery, 
    useGetEsportsGamesQuery, 
    useGetSimulationGamesQuery, 
    useGetFighterGamesQuery, 
    useGetRPGGamesQuery, 
    useGetGameQuery } = api;

export default api;