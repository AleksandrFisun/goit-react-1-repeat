import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapperLabelInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  margin: 5px;
  border-radius: 4px;
  border: none;
  background-color: white;
`;
export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  width: 220px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 20px 10px;
  font-family: Montserrat, sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: rgb(82, 79, 78);
  background: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 15px;
  transition: all 0.3s ease 0s;
  border: none;
  cursor: pointer;
`;
