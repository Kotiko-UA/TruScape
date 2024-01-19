import React from 'react';
import styles from './active-label.module.css';

type ActiveLabelProp = { children: React.ReactNode };

export default function ActiveLabel({ children }: ActiveLabelProp) {
  return <span className={styles.label}>{children}</span>;
}
