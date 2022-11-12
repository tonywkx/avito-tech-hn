export interface IProduct {
    by: string
    descendants: number
    id: number
    kids: Array<number>
    score: number
    text?: string
    time: number
    title: string
    type: string
    url?: string
}