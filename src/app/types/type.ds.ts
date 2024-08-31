import { StaticImageData } from "next/image";

export interface manageCardType {
    img: StaticImageData,
    title: string,
    disc: string,
}

export interface getStartedType {
    img: StaticImageData,
    number: string,
    title: string,
    disc: string
}