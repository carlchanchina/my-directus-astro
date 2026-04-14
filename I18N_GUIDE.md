# 国际化 (i18n) 指南

本项目已配置完整的国际化支持，支持英文 (EN) 和中文 (ZH)。

## 目录结构

```
src/
├── pages/
│   ├── [lang]/                    # 语言路由
│   │   ├── index.astro            # 首页
│   │   ├── blog/
│   │   │   └── [slug].astro       # 博客详情页
│   │   └── products/
│   │       ├── index.astro        # 产品列表页
│   │       └── [slug].astro       # 产品详情页
├── lib/
│   └── i18n.ts                    # 翻译数据和工具函数
├── middleware.ts                  # 语言路由中间件
└── components/
    └── ui/
        └── LanguageSwitcher.tsx   # 语言切换器组件
```

## URL 结构

- 英文: `/en/*` (例如: `/en/products`, `/en/blog`)
- 中文: `/zh/*` (例如: `/zh/products`, `/zh/blog`)

## 使用翻译

### 在 Astro 组件中

```astro
---
import { translations, type Language } from '@/lib/i18n';

const lang = Astro.params.lang as Language;

const t = (key: string) => {
  const keys = key.split('.');
  let value: any = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
};
---

<h1>{t('products.title')}</h1>
```

### 在 React 组件中

```tsx
'use client';

import { translations, type Language } from '@/lib/i18n';

interface MyComponentProps {
  lang: Language;
}

export default function MyComponent({ lang }: MyComponentProps) {
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return <h1>{t('products.title')}</h1>;
}
```

## 添加新的翻译

编辑 `src/lib/i18n.ts` 中的 `translations` 对象：

```typescript
export const translations = {
  en: {
    myFeature: {
      label: 'My Feature',
      description: 'Feature description in English',
    },
  },
  zh: {
    myFeature: {
      label: '我的功能',
      description: '中文功能描述',
    },
  },
};
```

然后在组件中使用:
```tsx
{t('myFeature.label')}
{t('myFeature.description')}
```

## 语言切换器

使用 `LanguageSwitcher` 组件在导航栏中添加语言切换：

```tsx
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function MyComponent() {
  const currentLang = Astro.params.lang as Language;
  return (
    <LanguageSwitcher 
      currentLang={currentLang}
      currentPath={Astro.url.pathname}
    />
  );
}
```

## 路由配置

在 `astro.config.ts` 中配置：

```typescript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'zh'],
  routing: {
    prefixDefaultLocale: true,  // 默认语言也使用前缀
  },
},
```

## SEO 优化

每个页面都应该包含 `lang` 属性和适当的 og:url 来标识语言版本：

```astro
---
const lang = Astro.params.lang as Language;
const productUrl = `${siteURL}/${lang}/products/${slug}`;

const metadata = {
  title: product.name,
  openGraph: {
    url: productUrl,  // 包含语言前缀
  },
};
---
<Layout metadata={metadata}>
  ...
</Layout>
```

## 扩展支持更多语言

要添加新语言（例如日语），只需：

1. 在 `astro.config.ts` 中添加语言代码:
```typescript
locales: ['en', 'zh', 'ja'],
```

2. 在 `src/lib/i18n.ts` 中添加翻译:
```typescript
export const translations = {
  en: { ... },
  zh: { ... },
  ja: { ... },  // 新增日语翻译
};
```

3. 在 `middleware.ts` 中确保支持新语言的路由（通常自动支持）

## 注意事项

- 所有路由都必须通过 `[lang]` 参数，确保语言前缀一致
- 使用 `getStaticPaths()` 为每种语言生成静态页面
- 在 React 客户端组件中传递 `lang` prop 以支持翻译
- 确保所有链接都包含正确的语言前缀（例如 `/${lang}/products`）
