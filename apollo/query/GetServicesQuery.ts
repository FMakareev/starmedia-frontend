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
                    name {
                        ru
                    }
                    phones 
                    emails
                }
                contactsRu {
                    name {
                        ru
                    }
                    phones
                    emails
                }
                formTesting {
                    id
                    name {
                        ru
                    }
                }
                formPresentation{
                    id
                    name {
                        ru
                    }
                }
                presentation {
                    url
                }
                localization
            }

            cooperationAtYoutube {
                name {
                    ru
                }
                content {
                    ru
                }
                contactsUk {
                    name {
                        ru
                    }
                    phones
                    emails
                }
                localization
            }
            
            vehicleRental {
                name {
                    ru
                }
                content {
                    ru
                }
                contactsRu {
                    name {
                        ru
                    }
                    phones
                    emails
                }
                localization
            }

            equipmentRental  {
                name {
                    ru
                }
                content {
                    ru
                }
                contactsRu {
                    name {
                        ru
                    }
                    phones
                    emails
                }
                localization
            }
            seilzHouse {
                name {
                    ru
                }
                content {
                    ru
                }
                contactsRu {
                    name {
                        ru
                    }
                    phones
                    emails
                }
                localization
            }
            costumeRental  {
                name {
                    ru
                }
                content {
                    ru
                }
                contactsRu {
                    name {
                        ru
                    }
                    phones
                    emails
                }
                localization
            }
            rentalPremises {
                name {
                    ru
                }
                content {
                    ru
                }
                contactsRu {
                    name {
                        ru
                    }
                    phones
                    emails
                }
                localization
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
                contactsEn {
                    name {
                        en
                    }
                    phones
                    emails
                }
                formTesting {
                    id
                    name {
                        en
                    }
                }
                formPresentation{
                    id
                    name {
                        en
                    }
                }
                presentation {
                    url
                }
                localization
            }

            cooperationAtYoutube {
                name {
                    en
                }
                content {
                    en
                }
                contactsUk {
                    name {
                        en
                    }
                    phones
                    emails
                }
                localization
            }
            
            vehicleRental {
                name {
                    en
                }
                content {
                    en
                }
                contactsEn {
                    name {
                        en
                    }
                    phones
                    emails
                }
                localization
            }

            equipmentRental {
                name {
                    en
                }
                content {
                    en
                }
                contactsEn {
                    name {
                        en
                    }
                    phones
                    emails
                }
                localization
            }
            seilzHouse {
                name {
                    en
                }
                content {
                    en
                }
                contactsEn {
                    name {
                        en
                    }
                    phones
                    emails
                }
                localization
            }
            costumeRental {
                name {
                    en
                }
                content {
                    en
                }
                contactsEn {
                    name {
                        en
                    }
                    phones
                    emails
                }
                localization
            }
            rentalPremises {
                name {
                    en
                }
                content {
                    en
                }
                contactsEn {
                    name {
                        en
                    }
                    phones
                    emails
                }
                localization
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

export const GetServicesUKQuery =gql`
    {
        getServices {
            protection {
                localization
                name {
                    uk
                }
                content {
                    uk
                }
                contactsUk {
                    name {
                        uk
                    }
                    phones
                    emails
                }
                formTesting {
                    id
                    name {
                        uk
                    }
                }
                formPresentation{
                    id

                    name {
                        uk
                    }
                }
                presentation {
                    url
                }
            }

            cooperationAtYoutube {
                name {
                    uk
                }
                content {
                    uk
                }
                contactsUk {
                    name {
                        uk
                    }
                    phones
                    emails
                }
                localization
            }
            
            vehicleRental {
                name {
                    uk
                }
                content {
                    uk
                }
                contactsUk {
                    name {
                        uk
                    }
                    phones
                    emails
                }
                localization
            }

            equipmentRental {
                name {
                    uk
                }
                content {
                    uk
                }
                contactsUk {
                    name {
                        uk
                    }
                    phones
                    emails
                }
                localization
            }
            seilzHouse {
                name {
                    uk
                }
                content {
                    uk
                }
                contactsUk {
                    name {
                        uk
                    }
                    phones
                    emails
                }
                localization
            }
            costumeRental {
                name {
                    uk
                }
                content {
                    uk
                }
                contactsUk {
                    name {
                        uk
                    }
                    phones
                    emails
                }
                localization
            }
            rentalPremises {
                name {
                    uk
                }
                content {
                    uk
                }
                contactsUk {
                    name {
                        uk
                    }
                    phones
                    emails
                }
                localization
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
