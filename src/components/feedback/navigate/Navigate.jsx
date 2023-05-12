import { ButtonFeefback, ButtonWrapper } from './Navigate.style';
export const Navigate = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <h2>Please leave feedback</h2>
      <ButtonWrapper>
        {options.map(name => (
          <ButtonFeefback key={name} onClick={() => onLeaveFeedback(name)}>
            {name}
          </ButtonFeefback>
        ))}
      </ButtonWrapper>
    </>
  );
};
