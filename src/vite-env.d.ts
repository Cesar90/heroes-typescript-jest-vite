/// <reference types="vite/client" />
type RequireOnly<T, P extends keyof T> = Pick<T, P> & Partial<Omit<T, P>>;

type TCharacters = RequireOnly<THero, "alter_ego" | "characters">

type THero = {
    id: string,
    superhero: string, 
    publisher: string, 
    alter_ego: string,
    first_appearance: string,
    characters: string
}
