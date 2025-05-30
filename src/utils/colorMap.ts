type Color = "black" | "blue" | "brown" | "gray" | "green" | "pink" | "purple" | "red" | "white" | "yellow";

export const colorMap: Record<Color, string> = {
  black: "linear-gradient(135deg, #000000, #434343)",
  blue: "linear-gradient(135deg, #2193b0, #6dd5ed)",
  brown: "linear-gradient(135deg, #654321, #d2b48c)",
  gray: "linear-gradient(135deg, #757F9A, #D7DDE8)",
  green: "linear-gradient(135deg, #56ab2f, #a8e063)",
  pink: "linear-gradient(135deg, #ff758c, #ff7eb3)",
  purple: "linear-gradient(135deg, #7b4397, #dc2430)",
  red: "linear-gradient(135deg, #cb2d3e, #ef473a)",
  white: "linear-gradient(135deg, #ffffff, #e0e0e0)",
  yellow: "linear-gradient(135deg, #f7971e, #ffd200)",
 
};

export const getColor = (color:string) => {
    return colorMap[color  as Color] || "linear-gradient(135deg, #bdc3c7, #2c3e50)"
}



console.log(getColor("black"))