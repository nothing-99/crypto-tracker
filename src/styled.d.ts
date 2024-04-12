// import original module declarations (index.d.ts)
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    shadowColor: string;
  }
}
