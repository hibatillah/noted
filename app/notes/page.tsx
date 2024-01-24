"use client"

import React from 'react'
import Header from '@/components/Header'
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  return (
    <div>
      <Header back="/home" />
      Notes {search}
    </div>
  )
}
