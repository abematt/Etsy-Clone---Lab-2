import styled from "styled-components"
// import { currencyOptions } from "../data";

const Container = styled.div`
    display: flex;
    background-color: #1d456e;
    padding: 20px 0px;
    color: white;
`;

const CurrencyInfo = styled.div`
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Center = styled.div`
    flex: 3;    
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <p>United States</p>
            <p>|</p>
            <p>English (US)</p>
            <p>|</p>
            {/* <CurrencyInfo>
                 <select>
                    {currencyOptions.map(item=>(
                     <option key={item.id} value={item.currencyNotation}>{item.currency}({item.currencyNotation})</option>
                    ))}
                 </select>
                 
            </CurrencyInfo> */}
        </Left>
        <Center></Center>
        <Right>
            <p>© 2022 Etsy, Inc.</p>
            <p>Terms Of Use</p>
            <p>Privacy</p>
            <p>Internet-based ads</p>
        </Right>
    </Container>
  )
}

export default Footer;