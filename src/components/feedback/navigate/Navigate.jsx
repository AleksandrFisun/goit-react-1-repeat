import css from './Navigate.module.css';
export const Navigate = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={css.ButtonWrapper}>
        {options.map(name => (
          <button
            className={css.ButtonFeedback}
            key={name}
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </button>
        ))}
      </div>
    </>
  );
};
