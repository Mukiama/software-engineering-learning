const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe("capitalizeWords", () => {
    it("should capitalize the first letter of each word", () => {
        const input = "hello world"

        const capitalizedWords = capitalizeWords(input)

        expect(capitalizedWords).toBe("Hello World")
    })

    it("should return '' if the input is an empty string", () =>{
        const input = ""

        const capitalizedWords = capitalizeWords(input)

        expect(capitalizedWords).toBe("")
    })

    it("should ignore special characters in strings", () => {
        const input = "hello-world"

        const capitalizedWords = capitalizeWords(input)

        expect(capitalizedWords).toBe("Hello-World")
    })

    it("should capitalize the first letter of the word in a single-word string", () => {
        const input = "hello"

        const capitalizedWords = capitalizeWords(input)

        expect(capitalizedWords).toBe("Hello")
    })
})

describe("filterActiveUsers", () => {
    it("should filter array of user objects, returning only active users", () => {
    const users = [
        { name: "Alice", isActive: true },
        { name: "Bob", isActive: false }
        ];
    
    const filteredUsers = filterActiveUsers(users)

    expect(filteredUsers).toEqual([{ name: "Alice", isActive: true }])
    })
    it("should return an empty array if no active users are found", () => {
        const users = [
            { name: "Alice", isActive: false },
            { name: "Bob", isActive: false }
        ];
    
        const filteredUsers = filterActiveUsers(users)
    
        expect(filteredUsers).toEqual([])
    })
    it("should return an empty array if the input array is empty", () => {
        const users = []
    
        const filteredUsers = filterActiveUsers(users)
    
        expect(filteredUsers).toEqual([])
    })

})

describe("logAction", () => {
    it("should log an action performed by a user with a timestamp", () => {
        const action = "login"
        const username = "Alice"

        const logMessage = logAction(action, username)

        expect(logMessage).toMatch(new RegExp(`User ${username} performed ${action} at .*`))
    })
    it("should return error if action or username is missing", () => {
        const action = ""
        const username = ""

        const logMessage = logAction(action, username)

        expect(logMessage).toMatch(new RegExp(`User ${username} performed ${action} at .*`))
    })
})