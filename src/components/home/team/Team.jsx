import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Nhân viên tư vấn' subtitle='Giúp bạn chọn được mẫu thiết kế nội thất phù hợp cho ngôi nhà và tư vấn các gói thiết kế thi công nội thất gia đình,những mẫu thiết kế mới, hiện đại.' />

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <button >{val.list} - Zalo</button>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className='button flex'>
                    <button className='btn3'>
                      <i className='fa fa-envelope'></i>
                      Email
                    </button>
                    <button className='btn4'>
                      <i className='fa fa-phone-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
