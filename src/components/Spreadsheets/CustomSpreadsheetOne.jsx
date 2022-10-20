import axios from "axios";
import React, { useEffect, useState } from "react";
import GraphFour from "../Graphs/GraphFour";
import GraphOne from "../Graphs/GraphOne";
import GraphThree from "../Graphs/GraphThree";
import GraphTwo from "../Graphs/GraphTwo";

// const rows = [
//   {
//     id: "user7",
//     name: "Micheal Scott",
//     positionId: "7",
//     position: "center",
//     place: "Kormangla",
//     City: "Bangalore",
//     district: "Bengaluru-Urban",
//     state: "Karnataka",
//     region: "Southern India",
//     country: "India",
//     continent: "Asia",
//   },
//   {
//     id: "user2",
//     name: "Susan Catlim",
//     positionId: "2",
//     position: "back",
//     place: "Kormangla",
//     City: "Bangalore",
//     district: "Bengaluru-Urban",
//     state: "Karnataka",
//     region: "Southern India",
//     country: "India",
//     continent: "Asia",
//   },
//   {
//     id: "user5",
//     name: "Christian Doelly",
//     positionId: "5",
//     position: "front",
//     place: "Kormangla",
//     City: "Bangalore",
//     district: "Bengaluru-Urban",
//     state: "Karnataka",
//     region: "Southern India",
//     country: "India",
//     continent: "Asia",
//   },
//   {
//     id: "user6",
//     name: "Dwight Shrute",
//     positionId: "6",
//     position: "center",
//     place: "Kormangla",
//     City: "Bangalore",
//     district: "Bengaluru-Urban",
//     state: "Karnataka",
//     region: "Southern India",
//     country: "India",
//     continent: "Asia",
//   },
//   {
//     id: "user10",
//     name: "Kevin Malone",
//     positionId: "10",
//     position: "back",
//     place: "Kormangla",
//     City: "Bangalore",
//     district: "Bengaluru-Urban",
//     state: "Karnataka",
//     region: "Southern India",
//     country: "India",
//     continent: "Asia",
//   },
//   {
//     id: "user1",
//     name: "John Doe",
//     positionId: "1",
//     position: "center",
//     place: "Kormangla",
//     City: "Bangalore",
//     district: "Bengaluru-Urban",
//     state: "Karnataka",
//     region: "Southern India",
//     country: "India",
//     continent: "Asia",
//   },
//   {
//     id: "user8",
//     name: "Pamela Beasly",
//     positionId: "8",
//     position: "front",
//     place: "Kormangla",
//     City: "Bangalore",
//     district: "Bengaluru-Urban",
//     state: "Karnataka",
//     region: "Southern India",
//     country: "India",
//     continent: "Asia",
//   },
//   {
//     id: "use118",
//     name: "Oscar Martinex",
//     positionId: "11",
//     position: "center",
//     place: "Kormangla",
//     City: "Bangalore",
//     district: "Bengaluru-Urban",
//     state: "Karnataka",
//     region: "Southern India",
//     country: "India",
//     continent: "Asia",
//   },
//   {
//     id: "user3",
//     name: "Charls Gray",
//     positionId: "3",
//     position: "back",
//     place: "Kormangla",
//     City: "Bangalore",
//     district: "Bengaluru-Urban",
//     state: "Karnataka",
//     region: "Southern India",
//     country: "India",
//     continent: "Asia",
//   },
//   {
//     id: "user9",
//     name: "Toby Flenderson",
//     positionId: "9",
//     position: "center",
//     place: "Kormangla",
//     City: "Bangalore",
//     district: "Bengaluru-Urban",
//     state: "Karnataka",
//     region: "Southern India",
//     country: "India",
//     continent: "Asia",
//   },
//   {
//     id: "user4",
//     name: "Joana Jonson",
//     positionId: "4",
//     position: "front",
//     place: "Kormangla",
//     City: "Bangalore",
//     district: "Bengaluru-Urban",
//     state: "Karnataka",
//     region: "Southern India",
//     country: "India",
//     continent: "Asia",
//   },
// ];

const CustomSpreadsheetOne = () => {

  const [data1, setData1] = useState()

  const baseURL = 'http://192.168.1.4:8000/'

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData1(response.data.data)
    })
  }, [])


  return (
    <div>
      <div className="p-4 -mb-[8px] w-full">
        <div className="border-2 border-gray-300 rounded-lg p-1">
          <div className="grid grid-cols-10 grid-rows-1">
            <div className="border border-gray-300 rounded-tl-md bg-[#2a63ffb4] text-white text-center p-2 text-[16px] flex justify-center items-center font-bold">
              Choice1A Decile
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[16px] flex justify-center items-center font-bold break-word">
              No of Test
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[16px] flex justify-center items-center font-bold break-word">
              No of Control
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[16px] flex justify-center items-center font-bold break-word">
            No of prospect Test
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[16px] flex justify-center items-center font-bold break-word">
            No of prospect Control
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[16px] flex justify-center items-center font-bold break-word">
            Value counts
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[16px] flex justify-center items-center font-bold break-word">
            Total sum of new coustmer match
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[16px] flex justify-center items-center font-bold break-word">
            Conversion rate test
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[16px] flex justify-center items-center font-bold break-word">
            Conversion rate control
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[16px] flex justify-center items-center font-bold break-word">
            Lift
            </div>
            {/* <div className="border border-gray-300 rounded-tr-md bg-[#2a63ffb4] text-white text-center p-2 text-[14px] font-bold">
              Continent
            </div> */}
          </div>
          <div className=" grid grid-cols-10">
            { data1 ? 
            data1?.map((data) => (
              // <div>
              <>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] font- text-center p-2">
                  {data?.Choice1A_Decile}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data?.no_of_Test}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data?.no_of_Control}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data?.no_of_prospect_Test}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data?.no_of_prospect_Control}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data?.Value_counts}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data?.Total_sum_of_new_coustmer_match}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data?.Conversion_rate_test}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data?.Conversion_rate_control}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data?.Lift}
                </div>
                {/* <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data.continent}
                </div> */}
              </>
              // </div>
            ))
            : 
            'Loading...'}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-[98%] mx-auto gap-2 mb-4">
      <GraphThree />
      <GraphOne />
      <GraphTwo />
      <GraphFour />
      </div>
    </div>
  );
};

export default CustomSpreadsheetOne;
