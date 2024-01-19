import React from 'react';
import styles from './not-active-label.module.css';

type NotActiveLabelProp = { children: React.ReactNode };

export default function NotActiveLabel({ children }: NotActiveLabelProp) {
  return <span className={styles.label}>{children}</span>;
}
