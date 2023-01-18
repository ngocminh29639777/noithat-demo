import React from "react"
import { price } from "../../data/Data"

const PriceCard = () => {
  return (
    <>
      <div className='content flex mtop'>
        {price.map((item, index) => (
          <div className='box shadow' key={index}>
            <div className='topbtn'>
              <button className='btn4'>{item.best}</button>
            </div>
            <h3>{item.plan}</h3>
            <h1>
              {item.price}
              <span>/VND</span>
            </h1>
            <p>{item.ptext}</p>

            <ul>
              {item.list.map((val) => {
                const { icon, text, change } = val
                return (
                  <li>
                    <label
                      style={{
                        background: change === "color" ? "#8e101c" : "#fab716",
                        color: change === "color" ? "#fab716" : "#8e101c",
                      }}
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                  </li>
                )
              })}
            </ul>
            <button
              className='btn5'
              style={{
                background: item.plan === "Phòng ngủ" ? "#fab716" : "#fff",
                color: item.plan === "Phòng ngủ" ? "#fff" : "#fab716",
              }}
            >
              Nội Thất {item.plan}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default PriceCard
