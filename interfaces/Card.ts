interface CardI {
    add: boolean
    icon: JSX.Element
    items: {
        meta: string
        title?: string
    }[],
    title: string
}

export default CardI