import styled from "styled-components";


export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
display: -webkit-flex;
display: -moz-flex;
display: flex;
-webkit-flex-flow: row nowrap;
-moz-flex-flow: row nowrap;
flex-flow: row nowrap;

`;

export const FlexItem = styled.div`
margin: 5px;
flex: 1 1 auto;
display: flex;
flex-flow: column wrap;
justify-content: space-between;
padding-left: 20px;
`;
export const ImgBox = styled.div`
max-width: 600px;
`;

export const AddInfo = styled.div`
margin-top: 20px;
  max-width: 960px;
 padding-top: 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const Img = styled.img`
max-width: 100%;
max-hight: 100%;
overflow:auto;
 object-fit: cover;
`;
 // если хотите, чтобы чтобы изображение масштабировалась пропорционально






