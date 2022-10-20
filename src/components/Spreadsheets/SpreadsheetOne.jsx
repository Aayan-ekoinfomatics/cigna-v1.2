import React from 'react'
import { Grid, Input, Select } from 'react-spreadsheet-grid'
import '../../index.css'
import GraphOne from '../Graphs/GraphOne';
import GraphTwo from '../Graphs/GraphTwo';

const rows = [
  { id: 'user7', name: 'Micheal Scott', positionId: '7', position: 'center', place: 'Kormangla', City: 'Bangalore', district: 'Bengaluru-Urban', state: 'Karnataka', region: 'Southern India', country: 'India', continent: 'Asia' },
  { id: 'user2', name: 'Susan Catlim', positionId: '2', position: 'back', place: 'Kormangla', City: 'Bangalore', district: 'Bengaluru-Urban', state: 'Karnataka', region: 'Southern India', country: 'India', continent: 'Asia' },
  { id: 'user5', name: 'Christian Doelly', positionId: '5', position: 'front', place: 'Kormangla', City: 'Bangalore', district: 'Bengaluru-Urban', state: 'Karnataka', region: 'Southern India', country: 'India', continent: 'Asia' },
  { id: 'user6', name: 'Dwight Shrute', positionId: '6', position: 'center', place: 'Kormangla', City: 'Bangalore', district: 'Bengaluru-Urban', state: 'Karnataka', region: 'Southern India', country: 'India', continent: 'Asia' },
  { id: 'user10', name: 'Kevin Malone', positionId: '10', position: 'back', place: 'Kormangla', City: 'Bangalore', district: 'Bengaluru-Urban', state: 'Karnataka', region: 'Southern India', country: 'India', continent: 'Asia' },
  { id: 'user1', name: 'John Doe', positionId: '1', position: 'center', place: 'Kormangla', City: 'Bangalore', district: 'Bengaluru-Urban', state: 'Karnataka', region: 'Southern India', country: 'India', continent: 'Asia' },
  { id: 'user8', name: 'Pamela Beasly', positionId: '8', position: 'front', place: 'Kormangla', City: 'Bangalore', district: 'Bengaluru-Urban', state: 'Karnataka', region: 'Southern India', country: 'India', continent: 'Asia' },
  { id: 'use118', name: 'Oscar Martinex', positionId: '11', position: 'center', place: 'Kormangla', City: 'Bangalore', district: 'Bengaluru-Urban', state: 'Karnataka', region: 'Southern India', country: 'India', continent: 'Asia' },
  { id: 'user3', name: 'Charls Gray', positionId: '3', position: 'back', place: 'Kormangla', City: 'Bangalore', district: 'Bengaluru-Urban', state: 'Karnataka', region: 'Southern India', country: 'India', continent: 'Asia' },
  { id: 'user9', name: 'Toby Flenderson', positionId: '9', position: 'center', place: 'Kormangla', City: 'Bangalore', district: 'Bengaluru-Urban', state: 'Karnataka', region: 'Southern India', country: 'India', continent: 'Asia' },
  { id: 'user4', name: 'Joana Jonson', positionId: '4', position: 'front', place: 'Kormangla', City: 'Bangalore', district: 'Bengaluru-Urban', state: 'Karnataka', region: 'Southern India', country: 'India', continent: 'Asia' },
];

const SpreadsheetOne = () => {
  return (
    <div className="mx-10 my-10 ">
      <Grid
        columns={[
          {
            title: () => 'Unique-id',
            value: (row, { focus }) => {
              return (
                <Input
                  value={row.id}
                  focus={focus}
                />
              );
            }
          }, {
            title: () => 'Name',
            value: (row, { focus }) => {
              return (
                <Input
                  value={row.name}
                  isOpen={focus}
                // items={somePositions}
                />
              );
            }
          }, {
            title: () => 'Position ID',
            value: (row, { focus }) => {
              return (
                <Input
                  value={row.positionId}
                  isOpen={focus}
                // items={somePositions}
                />
              );
            }
          }, {
            title: () => 'Position',
            value: (row, { focus }) => {
              return (
                <Input
                  value={row.position}
                  isOpen={focus}
                // items={somePositions}
                />
              );
            }
          }, {
            title: () => 'Place',
            value: (row, { focus }) => {
              return (
                <Input
                  value={row.place}
                  isOpen={focus}
                // items={somePositions}
                />
              );
            }
          }, {
            title: () => 'City',
            value: (row, { focus }) => {
              return (
                <Input
                  value={row.City}
                  isOpen={focus}
                // items={somePositions}
                />
              );
            }
          }, {
            title: () => 'District',
            value: (row, { focus }) => {
              return (
                <Input
                  value={row.district}
                  isOpen={focus}
                // items={somePositions}
                />
              );
            }
          }, {
            title: () => 'State',
            value: (row, { focus }) => {
              return (
                <Input
                  value={row.state}
                  isOpen={focus}
                // items={somePositions}
                />
              );
            }
          }, {
            title: () => 'Region',
            value: (row, { focus }) => {
              return (
                <Input
                  value={row.region}
                  isOpen={focus}
                // items={somePositions}
                />
              );
            }
          }, {
            title: () => 'County',
            value: (row, { focus }) => {
              return (
                <Input
                  value={row.country}
                  isOpen={focus}
                // items={somePositions}
                />
              );
            }
          }, {
            title: () => 'Continent',
            value: (row, { focus }) => {
              return (
                <Input
                  value={row.continent}
                  isOpen={focus}
                // items={somePositions}
                />
              );
            }
          }
        ]}
        rows={rows}
        getRowKey={row => row.id}
      />
      <div className='w-full grid grid-rows-2 grid-cols-2 gap-5 md:gap-10 lg:gap-14 mt-20'>
        <GraphOne />
        <GraphTwo />
        <GraphTwo />
        <GraphOne />
      </div>
    </div>
  )
}

export default SpreadsheetOne