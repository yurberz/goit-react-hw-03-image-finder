import Btn from "./ButtonStyled";

function Button({ onLoadMore }) {
  return <Btn onClick={onLoadMore}>Load more</Btn>;
}

export default Button;
