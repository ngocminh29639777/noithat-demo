import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Sản Phẩm Xem Nhiều Nhất' subtitle='Kiến trúc nội thất đề cao sự bố trí hài hòa các hình khối không gian đơn giản.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
