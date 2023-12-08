import { TYPES } from "../../../auth"

describe("Testing in TYPES.TS", () => {
    test("must of return these types", () => {
        expect(TYPES).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })
})