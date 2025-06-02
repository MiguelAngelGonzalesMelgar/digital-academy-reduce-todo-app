import { useEffect, useRef } from "react";

interface MyDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const MyDialog = ({ isOpen, onClose}: MyDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement >(null);
  
  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  },[isOpen])

  return (
    <dialog ref={dialogRef} onCancel={onClose}>
      <h2>Hi! I'm a dialog!</h2>
      <p>Can you tell the difference with a modal?</p>
      <button onClick={onClose}>Close</button>
    </dialog>
  )
}

export default MyDialog;
