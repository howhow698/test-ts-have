import React from 'react'

export interface IApp {
  appName: string;
  lang: string;
}

function App({ appName, lang }: IApp) {
  return (
    <>
      <h1> Hellooooo~~~~ </h1>
      <h2>{appName}</h2>
      <h3>{lang}</h3>
    </>
  )
}

export default App