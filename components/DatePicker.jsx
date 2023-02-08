import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function DatePicker() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  return (
    <>
      <p className="text-sm font-bold mt-8 mb-2">Tanggal Check-in & Check-out</p>
      <div className="my-2 px-4">
        <DateRange
          editableDateInputs
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          className="rounded-md shadow-md w-full lg:w-fit"
        />
      </div>
    </>
  );
}
