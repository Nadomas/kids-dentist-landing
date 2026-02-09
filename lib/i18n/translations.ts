import { Language } from '../constants'

export type { Language }

export const translations = {
  ru: {
    hero: {
      slogan: 'Не страшный доктор',
      subtitle: 'Добрый стоматолог, к которому дети идут с улыбкой',
      cta: 'Записаться на приём',
    },
    trust: {
      title: 'Почему мне доверяют',
      benefits: [
        { title: 'Индивидуальный подход', desc: 'Каждому ребёнку — особое внимание' },
        { title: 'Бережно и без боли', desc: 'Мягкие методики лечения' },
        { title: 'Опыт 3+ года', desc: 'Работаю только с детьми' },
        { title: 'Спокойная атмосфера', desc: 'Никаких слёз и страха' },
      ],
    },
    services: {
      title: 'Услуги',
      items: [
        { name: 'Диагностика', desc: 'Комплексный осмотр полости рта' },
        { name: 'Лечение молочных зубов', desc: 'Бережное лечение кариеса' },
        { name: 'Лечение постоянных зубов', desc: 'Современные методики' },
        { name: 'Пульпиты', desc: 'Лечение воспалений' },
        { name: 'Периоститы', desc: 'Лечение осложнений' },
        { name: 'Удаление', desc: 'Безболезненное удаление' },
        { name: 'Профессиональная чистка', desc: 'Гигиена полости рта' },
        { name: 'Профилактика', desc: 'Фторирование и герметизация' },
      ],
    },
    process: {
      title: 'Как проходит приём',
      steps: [
        { step: 1, title: 'Знакомство', desc: 'Ребёнок знакомится с кабинетом и инструментами' },
        { step: 2, title: 'Игра + осмотр', desc: 'В игровой форме проводим осмотр' },
        { step: 3, title: 'Аккуратное лечение', desc: 'Мягко и спокойно проводим лечение' },
      ],
    },
    about: {
      title: 'О враче',
      text: 'Детский стоматолог с опытом более 3 лет. Умею находить подход даже к самым тревожным малышам. Работаю мягко, спокойно и объясняю каждый шаг ребёнку. Для меня важно, чтобы ребёнок вышел с улыбкой и без страха вернуться снова.',
    },
    contact: {
      title: 'Контакты',
      address: 'Бендеры, ул. Калинина 15, каб. 16',
      clinic: 'Детская стоматология',
      schedule: {
        odd: 'Нечётные числа: 8:00 – 13:00',
        even: 'Чётные числа: 13:00 – 18:00',
      },
      call: 'Позвонить',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      instagram: 'Instagram',
    },
    nav: {
      home: 'Главная',
      services: 'Услуги',
      about: 'О враче',
      contact: 'Контакты',
    },
  },
  ro: {
    hero: {
      slogan: 'Doctorul nu este înfricoșător',
      subtitle: 'Un dentist bun, la care copiii vin cu zâmbetul',
      cta: 'Programează o vizită',
    },
    trust: {
      title: 'De ce mă încredințează',
      benefits: [
        { title: 'Abordare individuală', desc: 'Fiecare copil — atenție specială' },
        { title: 'Cu grijă și fără durere', desc: 'Metode blânde de tratament' },
        { title: 'Experiență 3+ ani', desc: 'Lucrez doar cu copiii' },
        { title: 'Atmosferă calmă', desc: 'Fără lacrimi și frică' },
      ],
    },
    services: {
      title: 'Servicii',
      items: [
        { name: 'Diagnosticare', desc: 'Examinare complexă a cavității orale' },
        { name: 'Tratamentul dinților de lapte', desc: 'Tratament blând al cariilor' },
        { name: 'Tratamentul dinților permanenți', desc: 'Metode moderne' },
        { name: 'Pulpită', desc: 'Tratamentul inflamațiilor' },
        { name: 'Periostită', desc: 'Tratamentul complicațiilor' },
        { name: 'Extracție', desc: 'Extracție fără durere' },
        { name: 'Curățare profesională', desc: 'Igienă orală' },
        { name: 'Profilaxie', desc: 'Fluorizare și sigilare' },
      ],
    },
    process: {
      title: 'Cum decurge vizita',
      steps: [
        { step: 1, title: 'Cunoaștere', desc: 'Copilul se familiarizează cu cabinetul și instrumentele' },
        { step: 2, title: 'Joc + examinare', desc: 'Efectuăm examinarea în formă de joc' },
        { step: 3, title: 'Tratament atent', desc: 'Efectuăm tratamentul moale și calm' },
      ],
    },
    about: {
      title: 'Despre medic',
      text: 'Dentist pediatru cu experiență de peste 3 ani. Știu să găsesc o abordare chiar și pentru cei mai anxioși copii. Lucrez moale, calm și explic fiecare pas copilului. Pentru mine este important ca copilul să plece cu zâmbetul și să se întoarcă fără frică.',
    },
    contact: {
      title: 'Contacte',
      address: 'Bender, str. Kalinina 15, cab. 16',
      clinic: 'Stomatologie pediatrică',
      schedule: {
        odd: 'Zile impare: 8:00 – 13:00',
        even: 'Zile pare: 13:00 – 18:00',
      },
      call: 'Sună',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      instagram: 'Instagram',
    },
    nav: {
      home: 'Acasă',
      services: 'Servicii',
      about: 'Despre medic',
      contact: 'Contacte',
    },
  },
} as const

export type Translations = typeof translations
export type TranslationKey = keyof Translations[Language]
