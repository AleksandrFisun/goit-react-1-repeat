import {
  InputSearchContact,
  WrapperSearchContact,
} from './SearchContact.style';
import { nanoid } from 'nanoid';

export const SearchContact = ({ onChange, filter }) => {
  const idSerachContact = nanoid();
  return (
    <>
      <WrapperSearchContact>
        <label htmlFor={idSerachContact}>Find contacts by name</label>
        <InputSearchContact
          value={filter}
          onChange={onChange}
          type="text"
          id={idSerachContact}
          placeholder="Search contact"
        />
      </WrapperSearchContact>
    </>
  );
};
