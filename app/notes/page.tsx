"use client"

import React from 'react'
import Header from '@/components/Header'
import { useSearchParams } from 'next/navigation';
import SearchBox from '@/components/SearchBox';

export default function Page() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  return (
    <div className='space-y-5'>
      <Header back="/home" />
      <SearchBox />
      Notes {search}
    </div>
  );
}
