import {render, screen} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { PrivateRoute } from "../../router/PrivateRoute"
import { AuthContext } from "../../auth"


describe("Testing in the <PrivateRouter/> ", () => {
    test("must of show the children if user is authenticate", () => {
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: "Cesar Cordero"
            },
            login: (name: string) => {console.log(name)},
            logout: () => {}
        }

        render(
            <AuthContext.Provider value={{ ...contextValue }}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Private Route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
         
        expect(screen.getByText("Private Route")).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/search?q=batman');
    })
})