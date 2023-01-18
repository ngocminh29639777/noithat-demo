import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Các Loại Sản Phẩm Nổi Bật' subtitle='Tìm kiếm các mục.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
