'use client';

import { useClientTranslation } from '@/platform/hooks/useClientTranslation';
import Link from 'next/link';
import { useState } from 'react';

export default function CounterPage() {
  const { t } = useClientTranslation('client');
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{t('title')}</h1>
      <p>{t('counter', { count: counter })}</p>
      <div>
        <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
        <button onClick={() => setCounter(Math.min(100, counter + 1))}>
          +
        </button>
      </div>
      <Link href={`/`}>
        <button type='button'>{t('back-to-home')}</button>
      </Link>
    </>
  );
}
