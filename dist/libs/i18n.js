"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_i18next_1 = __importDefault(require("next-i18next"));
const config = {
    browserLanguageDetection: true,
    serverLanguageDetection: true,
    defaultNS: 'common',
    defaultLanguage: 'ru',
    localeExtension: 'json',
    localePath: 'static/locales',
    otherLanguages: ['ru', 'uk', 'en'],
    localeStructure: '{{lng}}/{{ns}}',
    localeSubpaths: {
        ru: 'ru',
        en: 'en',
        uk: 'uk',
    },
};
const NextI18NextInstance = new next_i18next_1.default(config);
exports.appWithTranslation = NextI18NextInstance.appWithTranslation, exports.withTranslation = NextI18NextInstance.withTranslation, exports.useTranslation = NextI18NextInstance.useTranslation, exports.Trans = NextI18NextInstance.Trans, exports.i18n = NextI18NextInstance.i18n, exports.rest = __rest(NextI18NextInstance, ["appWithTranslation", "withTranslation", "useTranslation", "Trans", "i18n"]);
exports.default = NextI18NextInstance;
//# sourceMappingURL=i18n.js.map