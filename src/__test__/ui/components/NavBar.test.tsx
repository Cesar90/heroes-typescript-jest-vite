import {fireEvent, render, screen} from "@testing-library/react"
import { AuthContext } from "../../../auth"
import { MemoryRouter } from "react-router-dom"
import { Navbar } from "../../../ui"

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe("Testing in <NavBar />", () => {

    const contextValue = {
        logged: true,
        user: {
            id: 'abc',
            name: "Cesar Cordero"
        },
        login: (name: string) => {console.log(name)},
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks())
    
    test("must show name of user", () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText("Cesar Cordero")).toBeTruthy();
    });
    test("must call logout function and navigate when do click on the button", () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole("button");
        fireEvent.click(logoutBtn);
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true})
    })
})