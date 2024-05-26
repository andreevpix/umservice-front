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

export type TFooterSocial = {
    id: number
    link: string
    icon: Element
}
