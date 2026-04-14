// Translation data for the application
export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      blog: 'Blog',
      products: 'Products',
      about: 'About',
      contact: 'Contact',
    },
    // Products page
    products: {
      title: 'Our Products',
      description: 'Discover our range of high-quality products designed to meet your needs.',
      allProducts: 'All Products',
      category: 'Category',
      price: 'Price',
      view: 'View',
      addToCart: 'Add to Cart',
      saveForLater: 'Save for Later',
      relatedProducts: 'Related Products',
      freeShipping: 'Free Shipping',
      freeShippingDesc: 'On orders over $100',
      warranty: '1-Year Warranty',
      warrantyDesc: 'Hassle-free coverage',
      support: '24/7 Support',
      supportDesc: 'Always here to help',
    },
    // Blog page
    blog: {
      title: 'Blog',
      description: 'Read our latest articles and insights.',
      readMore: 'Read More',
      publishedOn: 'Published on',
      by: 'by',
      relatedPosts: 'Related Posts',
    },
    // Common
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      notFound: 'Not found',
      back: 'Back',
      share: 'Share',
      language: 'Language',
      english: 'English',
      chinese: '中文',
    },
  },
  zh: {
    // Navigation
    nav: {
      home: '首页',
      blog: '博客',
      products: '产品',
      about: '关于',
      contact: '联系',
    },
    // Products page
    products: {
      title: '我们的产品',
      description: '发现我们的高质量产品系列，为您的需求而设计。',
      allProducts: '全部产品',
      category: '分类',
      price: '价格',
      view: '查看',
      addToCart: '加入购物车',
      saveForLater: '保存以供稍后使用',
      relatedProducts: '相关产品',
      freeShipping: '免费送货',
      freeShippingDesc: '订单满$100',
      warranty: '1年保修',
      warrantyDesc: '无忧覆盖',
      support: '24/7 支持',
      supportDesc: '随时准备帮助',
    },
    // Blog page
    blog: {
      title: '博客',
      description: '阅读我们最新的文章和见解。',
      readMore: '阅读更多',
      publishedOn: '发布于',
      by: '作者',
      relatedPosts: '相关文章',
    },
    // Common
    common: {
      loading: '加载中...',
      error: '发生错误',
      notFound: '未找到',
      back: '返回',
      share: '分享',
      language: '语言',
      english: 'English',
      chinese: '中文',
    },
  },
};

export type Language = keyof typeof translations;

export function getTranslation(lang: Language, path: string): string {
  const keys = path.split('.');
  let value: any = translations[lang];

  for (const key of keys) {
    value = value?.[key];
  }

  return value || path;
}

export function t(lang: Language, key: string): string {
  return getTranslation(lang, key);
}
