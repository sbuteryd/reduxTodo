export const AUTHED_USER = 'AUTHED_USER'

export  function authedUser(user) {
    return {
        type:AUTHED_USER,
        user
    }
}