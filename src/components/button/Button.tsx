
import { SyntheticEvent } from 'react';
import {Button as ButtonComponent} from 'baseui/button';


export enum btnShapes {
  circle = 'circle',
  default = 'default',
  pill = 'pill',
  round = 'round',
  square = 'square'
}

export enum btnColors {
  light = 'light',
  dark = 'dark',
  magenta = '#b30074',
  grey = 'grey',
  transparent = 'transparent',
  white='white'
}

type ComplementaryColors = {
  [key in btnColors]: btnColors
};

const complementaryColor: ComplementaryColors = {
  light: btnColors.dark,
  dark: btnColors.white,
  '#b30074': btnColors.white,
  grey: btnColors.white,
  transparent: btnColors.grey,
  white: btnColors.dark
};

// This method generates override object for style customatization  in baseui components.
const getOverride = (color: btnColors) => {
  return {
    BaseButton: {
      style: () => ({
        backgroundColor: color,
        color: complementaryColor[color]
      })
    }
  }
}

interface buttonProps {
  shape: btnShapes,
  title: string,
  children: React.ReactNode,
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void,
  color: btnColors,
  disabled?: boolean
}

/**
 * @typedef { Object } btnProps
 * @property { string } title - Title of the button. Appreas on Hover event as a smal box/tooltip.
 * @property { React.ReactNode } children - Elements that are displayed on the button.
 * @property { event } onClick - Function that determines the proccess after Click event.
 * @property { btnColors } color - String value that determines the color. It is limited to the theme and values available in btnColors.
 * @property { boolean } disabled - Optional value to disable events on the component.
 */

/**
 * 
 * @param { buttonProps } props: - Button properties.
 * @returns 
 */
export const Button = (props: buttonProps) => {
  const { children, color, title, onClick, disabled } = props

  const overrides = getOverride(color)

  return (
    <ButtonComponent  title={ title } onClick={ onClick } disabled={ disabled } overrides={ overrides }>{ children }</ButtonComponent>
  );
}