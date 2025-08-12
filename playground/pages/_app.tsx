import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import '../styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Azhn OG Image Playground</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />
        <meta name='theme-color' content='#fff' />
        <meta name='title' content='Azhn OG Image Playground' />
        <meta
          name='description'
          content='Generate Open Graph images with Azhn’s Edge Function.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://og-playground.ekjotsinghmakhija.app/'
        />
        <meta property='og:title' content='Azhn OG Image Playground' />
        <meta
          property='og:description'
          content='Generate Open Graph images with Azhn’s Edge Function.'
        />
        <meta
          property='og:image'
          content='https://og-playground.ekjotsinghmakhija.app/og.png'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://og-playground.ekjotsinghmakhija.app/'
        />
        <meta property='twitter:title' content='Azhn OG Image Playground' />
        <meta
          property='twitter:description'
          content='Generate Open Graph images with Azhn’s Edge Function.'
        />
        <meta
          property='twitter:image'
          content='https://og-playground.ekjotsinghmakhija.app/og.png'
        />
        <link
          rel='preload'
          href='/inter-latin-ext-400-normal.woff'
          as='fetch'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/inter-latin-ext-700-normal.woff'
          as='fetch'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/material-icons-base-400-normal.woff'
          as='fetch'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/iaw-mono-var.woff2'
          as='fetch'
          crossOrigin='anonymous'
        />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
