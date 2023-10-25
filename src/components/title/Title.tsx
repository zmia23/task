export enum titleSizes {
  large = 'large',
  larger = 'larger',
  xlarge = 'x-large',
  xxlarge = 'xx-large',
}

type titleProps = {
  text: string, 
  size: titleSizes, 
  weight: number 
}

/**
 * @typedef { Object } titleProps
 * @property { string } text - Text displayes as a title.
 * @property { titleSizes } size - String inidactor of the title size. Limites to options available in titleSizes.
 * @property { number } weight - Ineger that indicates weight (boldness) of the font.
 */

/**
 * 
 * @param { titleProps } props: - Title properties.
 * @returns 
 */
export const Title = (props: titleProps) => {
  const { text, size, weight } = props

  const fontSize = size || titleSizes.xlarge
  const fontWeight = weight || 400

  const style = {
    fontSize,
    fontWeight,
    padding: '10px'
  }

  return (
    <div style={ style }>
      {text}
    </div>
  )
}