import {render, screen} from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { PublicRoute } from "../../router/PublicRoute"
import { AuthContext } from "../../auth"

describe("Testing in <PublicRoute />", () => {
    test("must of show the children if user isn't authenticate", () => {
        const contextValue = {
            logged: false,
            user: null,
            login: (name: string) => {console.log(name)},
            logout: () => {}
        }

        render(
            <AuthContext.Provider value={{ ...contextValue }}>
                <PublicRoute>
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
         
        expect(screen.getByText("Public Route")).toBeTruthy()
    })

    test("must navigate if user is authenticated", () => {
        const contextValue = {
            logged: true,
            user: null,
            login: (name: string) => {console.log(name)},
            logout: () => {}
        }
        
        render(
            <AuthContext.Provider value={{ ...contextValue }}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login"  element={
                            <PublicRoute>
                                <h1>Public Route</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={<h1>Marvel Page</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText("Marvel Page")).toBeTruthy();
    })
})