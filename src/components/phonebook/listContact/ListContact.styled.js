import styled from 'styled-components';

export const ListContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding: 10px;
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  justify-content: center;
  min-width: 100px;
  align-items: center;
`;
export const Span = styled.span`
  font-size: 20px;
`;
export const ButtonDel = styled.button`
  text-decoration: none;
  display: inline-block;
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 10px 20px;
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
