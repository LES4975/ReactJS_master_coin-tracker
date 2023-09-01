// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    divColor: string;
    activeColor: string;
    accentColor: string;
    plusColor: string;
    minusColor: string;
  }
}
