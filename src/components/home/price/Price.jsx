import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Thiết kế - Thi công trọn gói' subtitle='Bảng giá đầy đủ các phần nội thất khi thiết kế thi công trọn gói cho ngôi nhà, căn hộ, văn phòng công ty' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
