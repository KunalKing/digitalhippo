import { features } from "process";

export const PRODUCT_CATEGORIES = [
    {
        label : "UI KITS",
        value : "ui_kits" as const,
        features:[
            {
                name: "Editor picks",
                href: "#",
                imageSrc: '/nav/ui-kits/mixed.jpg',
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: '/nav/ui-kits/blue.jpg',
            },
            {
                name:'Bestsellers',
                href: '#',
                imageSrc: '/nav/ui-kits/purple.jpg',
            },
        ],
    },
    {
        label : "Icons",
        value : "Icons" as const,
        features:[
            {
                name: "Favourite Icon Picks",
                href: "#",
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name:'Bestselling Icons',
                href: '#',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
        ],
    },
]