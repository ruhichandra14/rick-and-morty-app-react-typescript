type TOrigin = {
    name: string,
    type: string
}

type Tlocation = {
    name: string,
    type: string
}

export type TEpisode = {
    id: string,
    name: string,
    episode: string,
    air_date: string
}

export type TCharacterProps = {
    id?: string,
    name: string,
    image: string, 
    status: string,
    species: string,
    origin: TOrigin,
    location: Tlocation
}

export type TCardProps = {
    cardData: TCharacterProps
}