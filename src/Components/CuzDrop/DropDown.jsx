import React from 'react';
import "./Drop.css"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// import { colourOptions } from '../data';
const colourOptions = [
    { value: 'red', label: 'Red', customProperty: 'some value' },
    { value: 'blue', label: 'Blue', customProperty: 'another value' },
    // ... more options
  ];

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[]}
      isMulti
      options={colourOptions}
    //   styles={{ container: (provided) => ({ ...provided, height: '60px', backgroundColor:"#fff" }) }}
    />
  );
}