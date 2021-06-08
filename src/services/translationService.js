const strings = {
  bio: {
    es: 'Soy Federico Reina, un estudiante de Ingeniería Informática y desarrollador web.',
    en: 'I\'m Federico Reina, a Computer Engineering student and web developer.',
  },
};

export default function getTranslation(stringID, language) {
  return strings[stringID][language];
}
