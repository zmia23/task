export const SlashIf = (param?: string) => param ? `/${param}`: '' 

export const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;