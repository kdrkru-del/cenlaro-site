import { Locale, Dictionary } from './types';
import { ru } from './ru';
import { en } from './en';
import { vi } from './vi';

const dictionaries: Record<Locale, Dictionary> = {
  ru,
  en,
  vi,
};

export const defaultLocale: Locale = 'ru';
export const locales: Locale[] = ['ru', 'en', 'vi'];

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}

export function getDictionary(lang: string | undefined): Dictionary {
  if (lang && isValidLocale(lang)) {
    return dictionaries[lang];
  }
  return dictionaries[defaultLocale];
}
