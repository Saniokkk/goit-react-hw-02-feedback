export const Button = ({ name, handleBtn }) => {
  return (
    <button className={'safari'} name={name} onClick={handleBtn}>
      {name}
    </button>
  );
};
