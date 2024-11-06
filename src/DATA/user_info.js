const users = [
    {
        userName: "SuperAdmin",
        Key: "m7FVvlxjfvFJWz66",
        token:"SuperAdmin",
    },
    {
        userName: "Admin",
        Key: "dKbfa1f7O8SaJ8Iq",
        token:"Admin",
    },
    {
        userName: "Mehanic",
        Key: "HAzwd6Htk01FxWDw",
        token:"Mehanic",
    },
    {
        userName: "SuperUser",
        Key: "SjJmCamJtNJFIzdS",
        token:"SuperUser",
    },
    {
        userName: "SupUser",
        Key: "kcZGGrO1V6mC9wMS",
        token:"SupUser",
    },
]

export function isMatch(in_userName, in_keys) {
    const user = users.find(user => user.userName === in_userName && user.Key === in_keys);
    return user ? { user: user.userName, token: user.token } : false;
}
