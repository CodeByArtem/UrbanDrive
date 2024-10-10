import css from "./Message.module.css";

const Message = ({ children }) => {
  return <h2 className={css.title}>{children}</h2>;
};

export default Message;