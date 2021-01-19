import Btn from "./ButtonStyled";

const Button = ({ onLoadMore }) => {
  return <Btn onClick={onLoadMore}>Load more</Btn>;
};

export default Button;
