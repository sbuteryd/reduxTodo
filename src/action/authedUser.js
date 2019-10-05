const AUTHED_USER = 'AUTHED_USER'

function authedUser(user) {
    return {
        type:AUTHED_USER,
        user
    }
}