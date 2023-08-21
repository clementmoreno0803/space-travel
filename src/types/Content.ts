interface Content {
    destinations : Destination[]
    crew : Crew[]
    technology : Technology[]
}
interface Destination {
    name: string,
    description: string,
    distance: string,
    travel: string,
    images: Images
}

interface Crew {
    name: string,
    images: Images
    role: string,
    bio: string,
}

interface Technology {
    name: string,
    images: TechnoImage
    description: string,
}


interface Images{
    png: string,
}

interface TechnoImage{
    portrait: string,

}

export default Content