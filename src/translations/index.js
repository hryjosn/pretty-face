// ES6 module syntax
import LocalizedStrings from 'react-native-localization';
import { en } from './en';
import { enUs } from './enUs';
import { zh } from './zh';

export const Translate = new LocalizedStrings({
    'en-US': enUs,
    en: en,
    zh: zh,
});
