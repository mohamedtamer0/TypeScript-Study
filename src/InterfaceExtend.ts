interface UserEx {
    id: number,
    username: string,
    country: string
}

interface Moderator extends UserEx {
    role: string | number
}

interface Admin extends Moderator {
    protect: boolean
}

let userEx: Admin = {
    id: 100,
    username: "Tamer",
    country: "Egypt",
    role: "Mod",
    protect: true
}

console.log(userEx.id)