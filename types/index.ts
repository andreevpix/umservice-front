export type THeaderMenuResponse = {
    id: number
    name: string
    link: string
}

export type TFooterMenuItem = {
    id: number
    name: string
    link: string
}

export type TFooterMenuResponse = {
    title: string
    items: TFooterMenuItem[]
}
