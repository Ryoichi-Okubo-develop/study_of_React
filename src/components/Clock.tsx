import React, { useState, useEffect, useLayoutEffect } from 'react'

const UPDATE_CYCLE = 1000

const KEY_LOCAL = 'KEY_LOCAL'

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US
    case Locale.JP:
      return Locale.JP
    default:
      return Locale.US
  }
}

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.US)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useLayoutEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCAL)
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  },[])

  useEffect(() => {
    localStorage.setItem(KEY_LOCAL, locale)
  }, [locale])

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
          <option value={Locale.US}>US</option>
          <option value={Locale.JP}>JP</option>
        </select>
      </p>
    </div>
  )

}

