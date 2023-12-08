import { TYPES, authReducer } from "../../../auth"

export {}

describe("Testing on AuthReducer", () => {
    // test("must of return the state by default", () => {
    //     const state = authReducer({logged: false, user: null}, {})
    // })

    test("must of (login) call the authentication login and set", () => {
        const action = {
            type: TYPES.login,
            payload: {
                name: "Cesar",
                id: "123"
            }
        }
        const state = authReducer({logged: false, user: null}, action)
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })
    })

    test("must of (logout) clear the name of user and logged in false", () =>{
        const state = {
            logged: true,
            user: { id: "123", name: "Cesar" }
        }

        const newState = authReducer(state, { type: TYPES.logout });
        expect(newState).toEqual({logged: false, user: null})
    })
})