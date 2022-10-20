import React from "react";
import GraphOne from "../Graphs/GraphOne";
import GraphTwo from "../Graphs/GraphTwo";

const rows = [
  {
    id: "user7",
    name: "Micheal Scott",
    positionId: "7",
    position: "center",
    place: "Kormangla",
    City: "Bangalore",
    district: "Bengaluru-Urban",
    state: "Karnataka",
    region: "Southern India",
    country: "India",
    continent: "Asia",
  },
  {
    id: "user2",
    name: "Susan Catlim",
    positionId: "2",
    position: "back",
    place: "Kormangla",
    City: "Bangalore",
    district: "Bengaluru-Urban",
    state: "Karnataka",
    region: "Southern India",
    country: "India",
    continent: "Asia",
  },
  {
    id: "user5",
    name: "Christian Doelly",
    positionId: "5",
    position: "front",
    place: "Kormangla",
    City: "Bangalore",
    district: "Bengaluru-Urban",
    state: "Karnataka",
    region: "Southern India",
    country: "India",
    continent: "Asia",
  },
  {
    id: "user6",
    name: "Dwight Shrute",
    positionId: "6",
    position: "center",
    place: "Kormangla",
    City: "Bangalore",
    district: "Bengaluru-Urban",
    state: "Karnataka",
    region: "Southern India",
    country: "India",
    continent: "Asia",
  },
  {
    id: "user10",
    name: "Kevin Malone",
    positionId: "10",
    position: "back",
    place: "Kormangla",
    City: "Bangalore",
    district: "Bengaluru-Urban",
    state: "Karnataka",
    region: "Southern India",
    country: "India",
    continent: "Asia",
  },
  {
    id: "user1",
    name: "John Doe",
    positionId: "1",
    position: "center",
    place: "Kormangla",
    City: "Bangalore",
    district: "Bengaluru-Urban",
    state: "Karnataka",
    region: "Southern India",
    country: "India",
    continent: "Asia",
  },
  {
    id: "user8",
    name: "Pamela Beasly",
    positionId: "8",
    position: "front",
    place: "Kormangla",
    City: "Bangalore",
    district: "Bengaluru-Urban",
    state: "Karnataka",
    region: "Southern India",
    country: "India",
    continent: "Asia",
  },
  {
    id: "use118",
    name: "Oscar Martinex",
    positionId: "11",
    position: "center",
    place: "Kormangla",
    City: "Bangalore",
    district: "Bengaluru-Urban",
    state: "Karnataka",
    region: "Southern India",
    country: "India",
    continent: "Asia",
  },
  {
    id: "user3",
    name: "Charls Gray",
    positionId: "3",
    position: "back",
    place: "Kormangla",
    City: "Bangalore",
    district: "Bengaluru-Urban",
    state: "Karnataka",
    region: "Southern India",
    country: "India",
    continent: "Asia",
  },
  {
    id: "user9",
    name: "Toby Flenderson",
    positionId: "9",
    position: "center",
    place: "Kormangla",
    City: "Bangalore",
    district: "Bengaluru-Urban",
    state: "Karnataka",
    region: "Southern India",
    country: "India",
    continent: "Asia",
  },
  {
    id: "user4",
    name: "Joana Jonson",
    positionId: "4",
    position: "front",
    place: "Kormangla",
    City: "Bangalore",
    district: "Bengaluru-Urban",
    state: "Karnataka",
    region: "Southern India",
    country: "India",
    continent: "Asia",
  },
];

const CustomSpreadsheetOne = () => {
  return (
    <div>
      <div className="p-4">
        <div className="border-2 border-gray-300 rounded-lg p-1">
          <div className="grid grid-cols-11 grid-rows-1">
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[18px] font-bold">
              id
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[18px] font-bold">
              name
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[18px] font-bold">
              positionId
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[18px] font-bold">
              position
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[18px] font-bold">
              place
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[18px] font-bold">
              City
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[18px] font-bold">
              district
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[18px] font-bold">
              state
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[18px] font-bold">
              region
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[18px] font-bold">
              country
            </div>
            <div className="border border-gray-300 bg-[#2a63ffb4] text-white text-center p-2 text-[18px] font-bold">
              continent
            </div>
          </div>
          <div className=" grid grid-cols-11">
            {rows.map((data, index) => (
              // <div>
              <>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] font- text-center p-2">
                  {data.id}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data.name}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data.positionId}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data.position}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data.place}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data.City}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data.district}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data.state}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data.region}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data.country}
                </div>
                <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                  {data.continent}
                </div>
              </>
              // </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-[98%] mx-auto gap-4">
      <GraphOne />
      <GraphTwo />
      <GraphTwo />
      <GraphOne />
      </div>
    </div>
  );
};

export default CustomSpreadsheetOne;
