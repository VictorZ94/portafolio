// @Icons
import HtmlIcon from "../assets/icons/html5-icon.svg"
import CssIcon from "../assets/icons/css3-icon.svg"
import ReactIcon from "../assets/icons/reactjs-icon.svg"
import JsIcon from "../assets/icons/js-icon.svg"
import PythonIcon from "../assets/icons/python-icon.svg"
import MongoIcon from "../assets/icons/mongodb-icon.svg"
import DjangoIcon from "../assets/icons/django-icon.svg"
import ApiIcon from "../assets/icons/api-icon.png"
import JsonIcon from "../assets/icons/json-icon.svg"
import GrapqhqlIcon from "../assets/icons/graphql-icon.svg"
import DockerIcon from "../assets/icons/docker-icon.png"
import FastApiIcon from "../assets/icons/fastapi-icon.png"

const defaultHeight = 100

const iconSkills = [
    {
        image: HtmlIcon,
        alt: "Html icon",
        order: 1,
        target: ["front-end"],
        height: defaultHeight
    },
    {
        image: CssIcon,
        alt: "Css icon",
        order: 2,
        target: ["front-end"],
        height: defaultHeight
    },
    {
        image: ReactIcon,
        alt: "React icon",
        order: 4,
        target: ["front-end", "full-stack"],
        height: defaultHeight
    },
    {
        image: JsIcon,
        alt: "Javascript programming language icon",
        order: 3,
        target: ["front-end", "full-stack"],
        height: defaultHeight
    },
    {
        image: PythonIcon,
        alt: "Python lenguage programming icon",
        order: 5,
        target: ["back-end"],
        height: defaultHeight
    },
    {
        image: MongoIcon,
        alt: "Mongo DB icon",
        order: 9,
        target: ["back-end", "full-stack"],
        height: defaultHeight
    },
    {
        image: DjangoIcon,
        alt: "Django Backend icon",
        order: 6,
        target: ["back-end"],
        height: defaultHeight
    },
    {
        image: ApiIcon,
        alt: "API icon",
        order: 8,
        target: ["full-stack", "back-end", "front-end"],
        height: defaultHeight
    },
    {
        image: JsonIcon,
        alt: "Json icon",
        order: 11,
        target: ["full-stack", "back-end", "front-end"],
        height: defaultHeight
    },
    {
        image: GrapqhqlIcon,
        alt: "Grapql query language icon",
        order: 9,
        target: ["full-stack", "back-end", "front-end"],
        height: defaultHeight
    },
    {
        image: DockerIcon,
        alt: "Docker compose icon",
        order: 10,
        target: ["back-end"],
        height: defaultHeight
    },
    {
        image: FastApiIcon,
        alt: "Fast Api framework icon",
        order: 7,
        target: ["back-end"],
        height: defaultHeight
    },
]

export default iconSkills;
