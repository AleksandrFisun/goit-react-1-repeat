import React from 'react';
import {
  ListContactWrapper,
  List,
  Item,
  Span,
  ButtonDel,
} from './ListContact.styled';
export const ListContact = ({ contacts, onClick }) => {
  return (
    <ListContactWrapper>
      <h2>List Contacts</h2>
      {contacts.map(({ id, name, number }) => (
        <List key={id}>
          <Item>
            <Span>{name}</Span>
          </Item>
          <Item>
            <Span>{number}</Span>
          </Item>
          <Item>
            <div>
              <ButtonDel onClick={()=> onClick(id)}> Delete</ButtonDel>
            </div>
          </Item>
        </List>
      ))}
    </ListContactWrapper>
  );
};
