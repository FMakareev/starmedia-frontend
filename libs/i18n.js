// import NextI18Next from 'next-i18next'


const config = {
	browserLanguageDetection:	true,
	serverLanguageDetection:	true,
	defaultNS: 'common',
	defaultLanguage: 'ru',
	localeExtension:'json',
	localePath:	'static/locales',
	otherLanguages: ['ru','uk','en'],
	localeStructure: '{{lng}}/{{ns}}',
	localeSubpaths: {
		ru: 'ru',
		en: 'en',
		uk: 'uk',
	},
}

// NextI18NextInstance.i18n.changeLanguage('ru');

/* Optionally, export class methods as named exports */
// export const {
// 	appWithTranslation,
// 	withTranslation,
// 	useTranslation
// } = NextI18NextInstance;

const NextI18Next = require('next-i18next').default



const NextI18NextInstance = new NextI18Next(config);
export const {
	appWithTranslation,
	withTranslation,
	useTranslation
} = NextI18NextInstance;
export default NextI18NextInstance
