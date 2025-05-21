import { MdClose } from "react-icons/md";

interface Props {
  children: React.ReactNode;
  closeFunction: () => void;
}

const ModalComponent = ({ children, closeFunction }: Props) => {
  return (
    <div className="container-modal">
      <button
        type="button"
        onClick={closeFunction}
        className="top-2 right-2 absolute"
      >
        <MdClose size={30} />
      </button>
      {children}
    </div>
  );
};

export default ModalComponent;
