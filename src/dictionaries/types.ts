export type Locale = 'ru' | 'en' | 'vi';

export interface Dictionary {
  locale: Locale;
  nav: {
    catalogue: string;
    greenCoffee: string;
    wholesale: string;
    privateLabel: string;
    about: string;
    requestQuote: string;
    mobileQuote: string;
    language: string;
    allCoffeeCatalogue: string;
    greenCoffeeLots: string;
    wholesaleB2b: string;
    privateLabelOem: string;
    aboutCenlaro: string;
  };
  footer: {
    brandDesc: string;
    tagline: string;
    colCatalogue: string;
    allProducts: string;
    greenRobustaArabica: string;
    signature7030: string;
    signature8020: string;
    signature5050: string;
    groundCoffeeRange: string;
    colBusiness: string;
    wholesaleBulk: string;
    privateLabelOem: string;
    containerShipments: string;
    exportDocs: string;
    qualityStages: string;
    colExport: string;
    exportDesc: string;
    requestPriceBtn: string;
    legalTitle: string;
    companyName: string;
    commercialBrand: string;
    taxCodeLabel: string;
    taxCodeValue: string;
    legalAddressLabel: string;
    legalAddressValue: string;
    phoneRuLabel: string;
    phoneRuValue: string;
    phoneEnViLabel: string;
    phoneEnViValue: string;
    emailLabel: string;
    emailValue: string;
    hubsTitle: string;
    hubsValue: string;
    rightsReserved: string;
  };
  quoteForm: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    productLabel: string;
    generalInquiry: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successMsg: string;
    sendAnotherBtn: string;
    directNotice: string;
    validationError: string;
  };
  home: {
    hero: {
      headline: string;
      headlineAccent: string;
      subhead: string;
      exploreBtn: string;
      quoteBtn: string;
      stats: {
        elevation: string;
        elevationLabel: string;
        screen: string;
        screenLabel: string;
        custom: string;
        customLabel: string;
        b2b: string;
        b2bLabel: string;
      };
    };
    categories: {
      greenTitle: string;
      greenDesc: string;
      greenLink: string;
      blendsTitle: string;
      blendsDesc: string;
      blendsLink: string;
      oemTitle: string;
      oemDesc: string;
      oemLink: string;
    };
    varieties: {
      badge: string;
      title: string;
      subtitle: string;
      arabica: {
        badge: string;
        title: string;
        origin: string;
        desc: string;
        notesTitle: string;
        notes: string[];
        character: string;
        link: string;
      };
      robusta: {
        badge: string;
        title: string;
        origin: string;
        desc: string;
        notesTitle: string;
        notes: string[];
        character: string;
        link: string;
      };
      blendHarmony: {
        badge: string;
        title: string;
        desc: string;
        link: string;
        items: { ratio: string; title: string; note: string }[];
      };
    };
    featured: {
      title: string;
      viewAll: string;
    };
    b2b: {
      title: string;
      desc: string;
      fclTitle: string;
      fclDesc: string;
      moqTitle: string;
      moqDesc: string;
      exploreBtn: string;
      exportStandardsTitle: string;
      stdUniformityLabel: string;
      stdUniformityDesc: string;
      stdMoistureLabel: string;
      stdMoistureDesc: string;
      stdPackagingLabel: string;
      stdPackagingDesc: string;
      stdDocsLabel: string;
      stdDocsDesc: string;
    };
  };
  about: {
    heroTitle: string;
    heroSubtitle: string;
    heroTagline: string;
    terroirsTitle: string;
    terroirsSubtitle: string;
    dalatTitle: string;
    dalatDesc: string;
    bmtTitle: string;
    bmtDesc: string;
    timelineTitle: string;
    timeline: {
      step: string;
      title: string;
      desc: string;
    }[];
    qualityTitle: string;
    qualityDesc1: string;
    qualityDesc2: string;
  };
  wholesale: {
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    pillarsTitle: string;
    pillars: {
      title: string;
      desc: string;
    }[];
    volumeTiersTitle: string;
    volumeTiers: {
      tier: string;
      desc: string;
      moq: string;
    }[];
    logisticsTitle: string;
    logistics: {
      title: string;
      desc: string;
    }[];
  };
  privateLabel: {
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    stepsTitle: string;
    steps: {
      num: string;
      title: string;
      desc: string;
    }[];
    packagingTitle: string;
    packagingDesc: string;
  };
  catalog: {
    title: string;
    subtitle: string;
    greenTitle: string;
    greenSubtitle: string;
    filterAll: string;
    filterType: string;
    filterFormat: string;
    filterRoast: string;
    filterBlend: string;
    filterOrigin: string;
    resetFilters: string;
    activeFiltersCount: string;
    noProducts: string;
    types: Record<string, string>;
    formats: Record<string, string>;
    roasts: Record<string, string>;
    origins: Record<string, string>;
    viewDetails: string;
    requestPrice: string;
  };
  productDetail: {
    backToCatalog: string;
    backToGreen: string;
    requestPrice: string;
    sampleBtn: string;
    specsTitle: string;
    origin: string;
    region: string;
    elevation: string;
    processing: string;
    screen: string;
    grade: string;
    moisture: string;
    crop: string;
    format: string;
    packaging: string;
    moq: string;
    roastLevel: string;
    sensoryTitle: string;
    body: string;
    acidity: string;
    sweetness: string;
    bitterness: string;
    intensity: string;
    flavorNotesTitle: string;
    suitableForTitle: string;
    b2bTermsTitle: string;
    b2bTermsDesc: string;
  };
}
