// Home Page
interface Settings {
    theme: boolean,
    font: string
}

// Articles Page
interface Settings {
    sidebar: boolean
}

// Contact Page
interface Settings {
    external: boolean
}


let userSettings: Settings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true
}