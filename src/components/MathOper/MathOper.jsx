import React from 'react';
import { useState } from "react";

import { useForm } from "react-hook-form";
import "./MathOper.scss";
import configdata from "../../assets/data/configdata"
//import Greeting from '../Greeting/Greeting';
//import AddDeleteRowButtons from '../AddDeleteRowButtons/AddDeleteRowButtons';

const MathOper = props => {

  const { title } = props;

  const defaultValue = {
    operand: 0,
    operator: "+"
  };

  const [operData, setOperData] = useState([{}]);
 // const [operandlast, setOperandlast] = useState(0);
  const [showOutput,setShowOutput]=useState(false);
  const [output,setOutput]=useState(0);

  const {
    register,
     formState: { errors },
    handleSubmit,
    setValue,
 //   getValues,
   
  } = useForm();

  

  const onSubmit = data => {
   // console.log(data);
   // var operandsArr = [];
    var operandsArr = data.operData.map((oper) => {
      return oper['operand'];
    });
    operandsArr.push(data.operandlast);
   // console.log("Array: " + operandsArr);
    setShowOutput(true);
    fetch(`http://localhost:8080/add/${operandsArr}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
   .then((response) => response.json())
   .then(json1 => setOutput(json1))
   .catch(err => console.log(err))

  
  };


/*
  const addOper = async () => {
    setOperData([...operData, defaultValue]);
  };
*/
/*
  const removeOper = index => () => {
    // get values
   // const { operData } = getValues({ nest: true });

    // create a copy
    const newOperData = [...operData];

    // remove by index
    newOperData.splice(index, 1);

    // update values
    setOperData(newOperData);

    for (let i = 0; i < newOperData.length; i++) {
      setValue(`operData[${i}].operand`, newOperData[i].operand);
      setValue(`operData[${i}].operator`, newOperData[i].operator);
    }
  };
*/
  const clearOperData = (e) => {
    setOperData([0]);
    setValue(`operData[0].operand`, '');
    setValue('operandlast','');
    setShowOutput(false);
  
   
  };



  
  return (
<>
 {/*  <Greeting/>
*/}
<div className="form">
  <h2 className="form__heading">{title}</h2>
    <form className="form__body" onSubmit={handleSubmit(onSubmit)}title="form">
      {operData.map((_, index) => {
        const fieldName = `operData[${index}]`;
        const field = fieldName.operand;
        
        return (
          <fieldset className="fieldset" name={fieldName} key={fieldName}>
            <label  className="form__label">
              Number {index + 1}*:
              </label>
              <input title="operand1" name={field}  className="form__input" type="number" step="any"  {...register((`${fieldName}.operand`),{required:true})} />

             
                {errors.field  && <p>This field  is required</p>}
         
              <input className="form__operator" value="+" type="text"  name={`${fieldName}.operator`}  {...register(`${fieldName}.operator`, {
            required: "Required",
          })} />
            

            {/*configdata[0].MULTIPLEROWS_ENABLED ? 
            <span>
            <AddDeleteRowButtons removeOper={removeOper} addOper={addOper} index={index}/></span> : <p></p>*/}

          </fieldset>


        );
      })}

<label className="form__labellast">
              Number {operData.length + 1}*:
              </label> <input title="operand2" name="operandlast" className="form__input" type="number" step="any"  {...register((`operandlast`),{required:true})}  />
            
             {errors.operandlast &&  <span className="errormessage" title="requirederror">{configdata[0].REQ_FIELD_ERROR}</span> }
    
            
          
      <div className="action">
       
        <button className="action__button" type="button" onClick={clearOperData}>
          CLEAR
        </button>
        <button title="submitbutton" className="action__button" type="submit">CALCULATE</button>

      </div>
      
    </form>
  
    {showOutput ? <div title="output" className="answer">Output is: {output}</div> : <p></p>}
    </div>
 </> );
}  

export default MathOper;