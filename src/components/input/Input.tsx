import {  ChangeEvent  } from "react";
import {  Input as InputComponent  } from "baseui/input";


type inputProps = { 
  label: string, 
  value: Record<string, any>,
  propName: string,
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  placeholder: string
 }

/**
 * @typedef { Object } inputProps
 * @property { string } label - Text added to the left of the input component.
 * @property { Record<string, any> } value - Object from state with any keys.
 * @property { string } propName - String that determines which value from value record will be displayed in input.
 * @property { function } onChange - Function for determining behaviour on Change Event.
 * @property { string } placeholder - Text displayed in empty input.
 */

/**
 * 
 * @param { inputProps } props: - Input properties.
 * @returns 
 */
export const Input = (props: inputProps) => { 
  const { label, value, propName, onChange, placeholder } = props

  const inputVal = value[propName]
  return(
    <div style={{  display: "flex", flexDirection:'row', padding: '10px' }}>
      <span style={{  fontSize: '20px', paddingTop: '10px', paddingRight:'20px', minWidth:'75px' }}>{ label }</span>
      <InputComponent placeholder={ placeholder } onChange={ onChange } value={ inputVal } />
    </div>
  )
 }