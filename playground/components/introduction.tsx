import React from 'react'
import styles from './introduction.module.css'

interface IProps {
  onClose: React.MouseEventHandler<HTMLButtonElement>
}

export default function Introduction({ onClose }: IProps) {
  return (
    <div className={styles.container}>
      <p>👋 Welcome to the Azhn OG Image playground!</p>
      <p style={{ flex: 1 }}>
        You can use this tool to test and preview OG image cards generated with{' '}
        <code>@azhn/og</code>.{' '}
        <a
          href='https://github.com/ekjotsinghmakhija/azhn'
          target='_blank'
          rel='noreferrer'
        >
          Show your love ❤️, give a Star ⭐
        </a>
        . Made with love ❤️ by{' '}
        <a
          href='https://github.com/ekjotsinghmakhija'
          target='_blank'
          rel='noreferrer'
        >
          <code>Ekjot Singh</code>
        </a>
        .
      </p>
      <button onClick={onClose}>Okay!</button>
    </div>
  )
}
