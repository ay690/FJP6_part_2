import { useContext } from "react";
import { ThemeContext } from "./ThemeChange";


function Footer(){
    return(<>
        <div>Footer</div>
        <FooterText></FooterText>
    </>)
}

function FooterText(){
    let CTheme = useContext(ThemeContext);
    return(
        <div className={CTheme == 'light'?'ligth':'dark'}>
            FooterText
        </div>
    )
}

export default Footer;