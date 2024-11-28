const users = [
    {
        userName: "SuperAdmin",
        Key: "SuperAdmin123",
        token:"SuperAdmin",
    },
    {
        userName: "Admin",
        Key: "Admin123",
        token:"Admin",
    },
    {
        userName: "Mehanic",
        Key: "Mehanic123",
        token:"Mehanic",
    },
    {
        userName: "SuperUser",
        Key: "SuperUser123",
        token:"SuperUser",
    },
    {
        userName: "SupUser",
        Key: "SupUser123",
        token:"SupUser",
    },
]

export function isMatch(in_userName, in_keys) {
    const user = users.find(user => user.userName === in_userName && user.Key === in_keys);
    return user ? { user: user.userName, token: user.token } : false;
}
