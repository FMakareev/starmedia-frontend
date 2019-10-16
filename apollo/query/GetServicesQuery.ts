import {gql} from "apollo-boost";


export const GetServicesRUQuery=gql`
    {
        getServices {
            protection {
                name {
                    ru
                }
                content {
                    ru
                }
                contacts {
                    locale
                    name {
                        ru
                    }
                    phones 
                    emails
                }
                forms {
#                    type
                    name {
                        ru
                    }
                    description {
                        ru
                    }
                }
                presentation {
                    url
                }
            }

            vehicleRental {
                name {
                    ru
                }
                content {
                    ru
                }
                contacts {
                    name {
                        ru
                    }
                    phones
                    emails
                }
            }

            equipmentRental  {
                name {
                    ru
                }
                content {
                    ru
                }
                contacts {
                    name {
                        ru
                    }
                    phones
                    emails
                }
            }
            seilzHouse {
                name {
                    ru
                }
                content {
                    ru
                }
                contacts {
                    name {
                        ru
                    }
                    phones
                    emails
                }
            }
            costumeRental  {
                name {
                    ru
                }
                content {
                    ru
                }
                contacts {
                    name {
                        ru
                    }
                    phones
                    emails
                }
            }
            rentalPremises {
                name {
                    ru
                }
                content {
                    ru
                }
                contacts {
                    name {
                        ru
                    }
                    phones
                    emails
                }
            }
            seoTags {
                description {
                    ru
                }
                keywords {
                    ru
                }
                title {
                    ru
                }
                ogUrl {
                    ru
                }
                ogImage {
                    ru
                }
                ogType {
                    ru
                }
                ogTitle {
                    ru
                }
                twitterSite {
                    ru
                }
                twitterImage {
                    ru
                }
                twitterImageAlt{
                    ru
                }
                twitterTitle{
                    ru
                }
                twitterDescription{
                    ru
                }
                twitterCard{
                    ru
                }
            }
        }
    }
`;

export const GetServicesENQuery=gql`
    {
        getServices {
            protection {
                name {
                    en
                }
                content {
                    en
                }
                contacts {
                    locale
                    name {
                        en
                    }
                    phones
                    emails
                }
                forms {
#                    type
                    name {
                        en
                    }
                    description {
                        en
                    }
                }
                presentation {
                    url
                }
            }

            vehicleRental {
                name {
                    en
                }
                content {
                    en
                }
                contacts {
                    name {
                        en
                    }
                    phones
                    emails
                }
            }

            equipmentRental {
                name {
                    en
                }
                content {
                    en
                }
                contacts {
                    name {
                        en
                    }
                    phones
                    emails
                }
            }
            seilzHouse {
                name {
                    en
                }
                content {
                    en
                }
                contacts {
                    name {
                        en
                    }
                    phones
                    emails
                }
            }
            costumeRental {
                name {
                    en
                }
                content {
                    en
                }
                contacts {
                    name {
                        en
                    }
                    phones
                    emails
                }
            }
            rentalPremises {
                name {
                    en
                }
                content {
                    en
                }
                contacts {
                    name {
                        en
                    }
                    phones
                    emails
                }
            }
            seoTags {
                description {
                    en
                }
                keywords {
                    en
                }
                title {
                    en
                }
                ogUrl {
                    en
                }
                ogImage {
                    en
                }
                ogType {
                    en
                }
                ogTitle {
                    en
                }
                twitterSite {
                    en
                }
                twitterImage {
                    en
                }
                twitterImageAlt{
                    en
                }
                twitterTitle{
                    en
                }
                twitterDescription{
                    en
                }
                twitterCard{
                    en
                }
            }
        }
    }
`;

export const GetServicesUKQuery=gql`
    {
        getServices {
            protection {
                name {
                    uk
                }
                content {
                    uk
                }
                contacts {
                    locale
                    name {
                        uk
                    }
                    phones
                    emails
                }
                forms {
#                    type
                    name {
                        uk
                    }
                    description {
                        uk
                    }
                }
                presentation {
                    url
                }
            }

            vehicleRental {
                name {
                    uk
                }
                content {
                    uk
                }
                contacts {
                    name {
                        uk
                    }
                    phones
                    emails
                }
            }

            equipmentRental {
                name {
                    uk
                }
                content {
                    uk
                }
                contacts {
                    name {
                        uk
                    }
                    phones
                    emails
                }
            }
            seilzHouse {
                name {
                    uk
                }
                content {
                    uk
                }
                contacts {
                    name {
                        uk
                    }
                    phones
                    emails
                }
            }
            costumeRental {
                name {
                    uk
                }
                content {
                    uk
                }
                contacts {
                    name {
                        uk
                    }
                    phones
                    emails
                }
            }
            rentalPremises {
                name {
                    uk
                }
                content {
                    uk
                }
                contacts {
                    name {
                        uk
                    }
                    phones
                    emails
                }
            }
            seoTags {
                description {
                    uk
                }
                keywords {
                    uk
                }
                title {
                    uk
                }
                ogUrl {
                    uk
                }
                ogImage {
                    uk
                }
                ogType {
                    uk
                }
                ogTitle {
                    uk
                }
                twitterSite {
                    uk
                }
                twitterImage {
                    uk
                }
                twitterImageAlt{
                    uk
                }
                twitterTitle{
                    uk
                }
                twitterDescription{
                    uk
                }
                twitterCard{
                    uk
                }
            }
        }
    }
`;
