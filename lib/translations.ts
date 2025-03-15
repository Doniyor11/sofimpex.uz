type TranslationType = {
  [key: string]: {
    [key: string]: string
  }
}

export const translations: TranslationType = {
  ru: {
    // Header
    track_package: "Отслеживать посылку",
    our_services: "Наши услуги",
    about_us: "О нас",
    our_partners: "Наши партнеры",
    contacts: "Контакты",

    // Hero Section
    hero_title: "Ваш надежный курьерский партнер",
    hero_description:
      "Мы - динамично развивающаяся компания, предоставляющая профессиональные услуги в сфере грузоперевозок, туризма и консалтинга. Наша цель - предложить надежные решения, ориентированные на потребности наших клиентов.",

    // Tracking Section
    tracking_title: "Отслеживайте свою посылка",
    tracking_description:
      "Отслеживайте статус и местоположение вашей посылки в режиме реального времени. Введите номер отслеживания и получите актуальную информацию о местонахождении вашего груза.",
    tracking_support:
      "Для получения дополнительной информации о вашей посылке, пожалуйста, свяжитесь с нашей службой поддержки.",
    enter_tracking: "Введите номер отслеживания",
    track: "Отследить",
    loading: "Загрузка",

    // Services Section
    services_title: "Наши услуги",
    services_description: "Мы предлагаем широкий спектр профессиональных услуг для частных лиц и бизнеса",

    // Service Items
    cargo_title: "Грузоперевозки",
    cargo_description: "Надежная и быстрая доставка грузов по всему миру с полным отслеживанием.",
    customs_title: "Таможенное оформление",
    customs_description: "Профессиональное оформление всех необходимых таможенных документов.",
    tours_title: "Туры",
    tours_description: "Организация туристических поездок и экскурсий для частных лиц и групп.",
    business_title: "Бизнес-услуги",
    business_description: "Комплексные решения для бизнеса, включая консалтинг и логистику.",

    // About Section
    about_title: "О нас",
    about_subtitle: "Ваш надежный партнер в логистике",
    about_description:
      "Мы - динамично развивающаяся компания, предоставляющая профессиональные услуги в сфере грузоперевозок, туризма и консалтинга. Наша цель - предложить надежные решения, ориентированные на потребности наших клиентов.",

    // About Features
    experience_title: "Опыт и профессионализм",
    experience_description:
      "Наша команда состоит из опытных специалистов, которые обеспечивают высокое качество всех предоставляемых услуг.",
    approach_title: "Индивидуальный подход",
    approach_description: "Мы разрабатываем решения, учитывая специфику и потребности каждого клиента.",
    reliability_title: "Надежность и безопасность",
    reliability_description: "Мы гарантируем сохранность ваших грузов и конфиденциальность информации.",
    technology_title: "Современные технологии",
    technology_description:
      "Мы используем передовые технологии для оптимизации процессов и повышения качества обслуживания.",

    // Partners Section
    partners_title: "Наши партнеры",
    partners_description:
      "Мы гордимся сотрудничеством с ведущими компаниями в сфере логистики и международных перевозок",

    // Contact Form
    contact_title: "Свяжитесь с нами",
    contact_description: "Заполните форму ниже, и наши специалисты свяжутся с вами в ближайшее время",
    name: "Ваше имя",
    email: "Email",
    phone: "Телефон",
    message: "Сообщение",
    send_message: "Отправить сообщение",
    sending: "Отправка...",
    success_title: "Сообщение отправлено!",
    success_description: "Спасибо за обращение. Наши специалисты свяжутся с вами в ближайшее время.",
    send_another: "Отправить еще сообщение",

    // Tracking Statuses
    status_packaging: "На упаковке",
    status_sent: "Посылка отправлено",
    status_customs: "Таможенном оформлении",
    status_warehouse: "На складе",
    status_delivery: "На доставке",
    status_delivered: "Доставлено",
    status_pending: "Ожидается",

    // Footer
    rights_reserved: "Все права защищены.",

    // Common
    information: "Информация",
    weight: "Вес",
    cost: "Стоимость",
    sender: "Отправитель",
    recipient: "Получатель",
    tracking_number: "Трек-номер",
    status: "Статус",
    delivery_status: "Статус доставки",
  },
  uz: {
    // Header
    track_package: "Yukni kuzatish",
    our_services: "Bizning xizmatlar",
    about_us: "Biz haqimizda",
    our_partners: "Hamkorlarimiz",
    contacts: "Kontaktlar",

    // Hero Section
    hero_title: "Ishonchli kuryer hamkoringiz",
    hero_description:
      "Biz yuk tashish, turizm va konsalting sohasida professional xizmatlar ko'rsatuvchi dinamik rivojlanayotgan kompaniyamiz. Bizning maqsadimiz - mijozlarimiz ehtiyojlariga yo'naltirilgan ishonchli yechimlarni taklif etish.",

    // Tracking Section
    tracking_title: "Yukingizni kuzating",
    tracking_description:
      "Yukingizning holati va joylashuvini real vaqt rejimida kuzating. Kuzatish raqamini kiriting va yukingizning joriy joylashuvi haqida ma'lumot oling.",
    tracking_support:
      "Yukingiz haqida qo'shimcha ma'lumot olish uchun bizning qo'llab-quvvatlash xizmatimiz bilan bog'laning.",
    enter_tracking: "Kuzatish raqamini kiriting",
    track: "Kuzatish",
    loading: "Yuklanmoqda",

    // Services Section
    services_title: "Bizning xizmatlar",
    services_description: "Biz jismoniy va yuridik shaxslar uchun keng ko'lamli professional xizmatlarni taklif etamiz",

    // Service Items
    cargo_title: "Yuk tashish",
    cargo_description:
      "Butun dunyo bo'ylab yuklarni ishonchli va tez yetkazib berish, to'liq kuzatish imkoniyati bilan.",
    customs_title: "Bojxona rasmiylashtiruvi",
    customs_description: "Barcha zarur bojxona hujjatlarini professional rasmiylashtirish.",
    tours_title: "Turlar",
    tours_description: "Jismoniy shaxslar va guruhlar uchun sayohat va ekskursiyalarni tashkil etish.",
    business_title: "Biznes xizmatlari",
    business_description: "Konsalting va logistikani o'z ichiga olgan kompleks biznes yechimlari.",

    // About Section
    about_title: "Biz haqimizda",
    about_subtitle: "Logistikada ishonchli hamkoringiz",
    about_description:
      "Biz yuk tashish, turizm va konsalting sohasida professional xizmatlar ko'rsatuvchi dinamik rivojlanayotgan kompaniyamiz. Bizning maqsadimiz - mijozlarimiz ehtiyojlariga yo'naltirilgan ishonchli yechimlarni taklif etish.",

    // About Features
    experience_title: "Tajriba va professionallik",
    experience_description:
      "Bizning jamoamiz barcha ko'rsatilayotgan xizmatlarning yuqori sifatini ta'minlovchi tajribali mutaxassislardan iborat.",
    approach_title: "Individual yondashuv",
    approach_description:
      "Biz har bir mijozning o'ziga xos xususiyatlari va ehtiyojlarini hisobga olgan holda yechimlar ishlab chiqamiz.",
    reliability_title: "Ishonchlilik va xavfsizlik",
    reliability_description: "Biz yuklaringiz xavfsizligi va ma'lumotlar maxfiyligini kafolatlaymiz.",
    technology_title: "Zamonaviy texnologiyalar",
    technology_description:
      "Biz jarayonlarni optimallashtirishva xizmat ko'rsatish sifatini oshirish uchun ilg'or texnologiyalardan foydalanamiz.",

    // Partners Section
    partners_title: "Hamkorlarimiz",
    partners_description:
      "Biz logistika va xalqaro tashish sohasidagi yetakchi kompaniyalar bilan hamkorligimizdan faxrlanamiz",

    // Contact Form
    contact_title: "Biz bilan bog'laning",
    contact_description: "Quyidagi shaklni to'ldiring va mutaxassislarimiz siz bilan tez orada bog'lanishadi",
    name: "Ismingiz",
    email: "Email",
    phone: "Telefon",
    message: "Xabar",
    send_message: "Xabar yuborish",
    sending: "Yuborilmoqda...",
    success_title: "Xabar yuborildi!",
    success_description: "Murojaat uchun rahmat. Mutaxassislarimiz siz bilan tez orada bog'lanishadi.",
    send_another: "Yana xabar yuborish",

    // Tracking Statuses
    status_packaging: "Qadoqlashda",
    status_sent: "Yuk jo'natildi",
    status_customs: "Bojxona rasmiylashtiruvi",
    status_warehouse: "Omborxonada",
    status_delivery: "Yetkazib berishda",
    status_delivered: "Yetkazib berildi",
    status_pending: "Kutilmoqda",

    // Footer
    rights_reserved: "Barcha huquqlar himoyalangan.",

    // Common
    information: "Ma'lumot",
    weight: "Og'irligi",
    cost: "Narxi",
    sender: "Yuboruvchi",
    recipient: "Qabul qiluvchi",
    tracking_number: "Kuzatish raqami",
    status: "Holat",
    delivery_status: "Yetkazib berish holati",
  },
}

