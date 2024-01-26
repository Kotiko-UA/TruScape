import React from 'react';

interface CompaniMainPageProps {
  params: { manyId: String[] };
}

export default function CompaniMainPage({ params }: CompaniMainPageProps) {
  return <div>CompaniMultiPage ({params.manyId.toString()})</div>;
}
