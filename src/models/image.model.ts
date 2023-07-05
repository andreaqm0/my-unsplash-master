export interface ImageBase {
    description: string,
    imageurl: string
}

export interface Image extends ImageBase {
    id : number,
    createdAt: string
}
