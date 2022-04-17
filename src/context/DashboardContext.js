import React,{createContext,useState} from 'react'
import fulldata from './fulldata'

export const DashboardContext = createContext()

const DashboardContextProvider = (props) => {
  const [dataChart,setDataChart] = useState(fulldata['2020'])
  const [yearData,setYearData] = useState('2020')

  // change the year and the data that are linked to the year
  const changeYear = el => {
      setDataChart(fulldata[el.target.value])
      setYearData(el.target.value)
  }
  
  return (
    <DashboardContext.Provider value={{changeYear,dataChart,yearData}}>
      {props.children}
    </DashboardContext.Provider>
  )
}

export default DashboardContextProvider
