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


export interface IComment {
    by : string
    id : number
    kids : Array<number>
    parent : number
    text : string
    time : number
    type : string
}