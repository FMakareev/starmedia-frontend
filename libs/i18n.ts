import NextI18Next from 'next-i18next'


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
};



const NextI18NextInstance:NextI18Next = new NextI18Next(config);
export const {
	appWithTranslation,
	withTranslation,
	useTranslation,
	Trans,
	i18n,
	...rest
} = NextI18NextInstance;

export default NextI18NextInstance
