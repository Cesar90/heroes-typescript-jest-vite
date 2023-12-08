import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth"
import { AppRouter } from "../../router/AppRouter"
// @ts-ignore
import queryString from 'query-string'

jest.mock('query-string' , () => ({
    //mock whatever you use from query-string
    parse :jest.fn(),
    stringify: jest.fn()
}));

describe("Testing  in <App Router />", () => {
    test("must of show login if user is not auth", () => {

        const contextValue = {
            logged: false,
            user: null,
            login: (name: string) => {console.log(name)},
            logout: () => {}
        }

        render(
            <AuthContext.Provider value={{...contextValue}}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // screen.debug();
        expect(screen.getAllByText('Login').length).toBe(2);
        
    })

    test("must of show login if user is auth", () => {

        const contextValue = {
            logged: true,
            user: {
                name: "Cesar",
                id: "123"
            },
            login: (name: string) => {console.log(name)},
            logout: () => {}
        }

        render(
            <AuthContext.Provider value={{...contextValue}}>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        // screen.debug();
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    })
})