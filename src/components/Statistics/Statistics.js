import React from "react"
import s from "./Statistics.module.scss"


const StatisticsItem = ({ id, label, percentage }) => {
   return ( 
   <li key={id} className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
   )
}

const StatisticsList = ({ items }) => {
    if(items === 0) return null
    return ( 
    <ul className={s.statList}>{items.map(StatisticsItem)}</ul> 
    )
}

const Statistics = ({ items }) => {
    return (
        <section className={s.statistics}>
  <h2 className={s.title}>Upload stats</h2>

  <StatisticsList items={items} />
</section>
    )
}

export default Statistics