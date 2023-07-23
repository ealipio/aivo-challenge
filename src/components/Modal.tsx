type Props = { isOpen: boolean; onCloseModal: () => void };

export default function Modal({ isOpen, onCloseModal }: Props) {
  console.log(isOpen, onCloseModal);

  return <div className="hidden">Modal</div>;
}
