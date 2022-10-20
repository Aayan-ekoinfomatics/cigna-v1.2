import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer
} from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 590,
//     pv: 800,
//     amt: 1400,
//     cnt: 490
//   },
//   {
//     name: "Page B",
//     uv: 868,
//     pv: 967,
//     amt: 1506,
//     cnt: 590
//   },
//   {
//     name: "Page C",
//     uv: 1397,
//     pv: 1098,
//     amt: 989,
//     cnt: 350
//   },
//   {
//     name: "Page D",
//     uv: 1480,
//     pv: 1200,
//     amt: 1228,
//     cnt: 480
//   },
//   {
//     name: "Page E",
//     uv: 1520,
//     pv: 1108,
//     amt: 1100,
//     cnt: 460
//   },
//   {
//     name: "Page F",
//     uv: 1400,
//     pv: 680,
//     amt: 1700,
//     cnt: 380
//   }
// ];

const GraphTwo = () => {

  const [data1, setData1] = useState()

  const baseURL = 'http://192.168.1.4:8000/'

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData1(response.data.graph)
    })
  }, [])



  return (
    <div className='border-2 border-gray-300 rounded-lg pt-3 w-full pr-3'>
      <h1 className='text-center pb-2 text-xl text-gray-400'>LIFT CURVE FOR CHOICE 1A MODEL</h1>
      <ResponsiveContainer width='100%' height={300}>
        <ComposedChart
          //   width={700}
          //   height={300}
          data={data1}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis dataKey='Cumm_conversion' orientation='left'/>
          <YAxis dataKey='Cumm_Test' orientation='left'/>
          <YAxis dataKey='Cumm_Control' orientation='left'/>
          <Tooltip />
          <Legend />
          <Line type="" dataKey="Cumm_conversion" stroke="#FF5733" />
          <Line type="" dataKey="Cumm_Test" stroke="#3398FF" />
          <Line type="" dataKey="Cumm_Control" stroke="#F979ED" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default GraphTwo