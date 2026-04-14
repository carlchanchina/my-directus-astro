'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface LanguageSwitcherProps {
  currentLang: 'en' | 'zh';
  currentPath: string;
}

export default function LanguageSwitcher({ currentLang, currentPath }: LanguageSwitcherProps) {
  const getLocalizedPath = (lang: string) => {
    // Remove current language prefix
    let path = currentPath;
    if (path.startsWith('/en/')) {
      path = path.slice(3);
    } else if (path.startsWith('/zh/')) {
      path = path.slice(3);
    }

    // Add new language prefix
    if (lang === 'en') {
      return `/en${path}` || '/en';
    } else {
      return `/zh${path}` || '/zh';
    }
  };

  const handleLanguageChange = (lang: string) => {
    window.location.href = getLocalizedPath(lang);
  };

  return (
    <Select defaultValue={currentLang} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-32">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="zh">中文</SelectItem>
      </SelectContent>
    </Select>
  );
}
