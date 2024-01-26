import React from 'react';

interface CompaniMainPageProps {
  params: { id: String };
}

export default function CompaniMainPage({ params }: CompaniMainPageProps) {
  return <div>CompaniSinglePage ({params.id})</div>;
}
