import React from 'react'


const AppLoader = ({ loaderType }) => {
 function getImg() {
  const url = `./../assets/images/${loaderType}.gif`
  return new URL(url, import.meta.url).href
 }

 if (!loaderType) return
 return (
  <section className={`app-loader grid ${loaderType}`}>
   <img src={getImg()} alt={loaderType} />
  </section>
 )
}

export default AppLoader