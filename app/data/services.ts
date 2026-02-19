export interface ServiceItem {
    name: string;
    description: string;
    price?: string;
}

export interface ServiceCategory {
    title: string;
    subtitle?: string;
    description?: string;
    items: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
    {
        title: "Signature Braiding",
        subtitle: "Exclusive Styles",
        description: "Natural looking braids with seamless finish and lightweight feel for ultimate comfort.",
        items: [
            {
                name: "Snoopy",
                description: "Playful and intricate braiding patterns that showcase creativity and personality.",
            },
            {
                name: "Sweet and Sour",
                description: "A unique blend of textures and styles that create a bold, modern statement.",
            },
            {
                name: "Snoopy",
                description: "Playful and intricate braiding patterns that showcase creativity and personality.",
            },
            {
                name: "Sweet and Sour",
                description: "A unique blend of textures and styles that create a bold, modern statement.",
            },
        ],
    },
    {
        title: "Knotless Braids",
        subtitle: "Protective Collection",
        description: "Pain-free, tension-less braiding technique for a natural scalp appearance.",
        items: [
            {
                name: "Small Knotless",
                description: "Delicate and refined braids for a sleek, versatile look.",
            },
            {
                name: "Medium Knotless",
                description: "The perfect balance of volume and manageability.",
            },
            {
                name: "Large Knotless",
                description: "Bold and beautiful braids that make a statement while saving time.",
            },
            {
                name: "Jumbo Knotless",
                description: "Quick installation with maximum impact and protective benefits.",
            },
        ],
    },
    {
        title: "Cornrows",
        subtitle: "Timeless Braids",
        description: "Classic and contemporary cornrow styles for every occasion.",
        items: [
            {
                name: "Straight Backs",
                description: "Simple, elegant, and timeless protective styling.",
            },
            {
                name: "Feed-In Cornrows",
                description: "Natural-looking cornrows that gradually increase in size.",
            },
            {
                name: "Stitch Braids",
                description: "Clean, precise parting with a high-definition finish.",
            },
            {
                name: "Tribal Braids",
                description: "Intricate patterns inspired by African heritage and culture.",
            },
        ],
    },
];
