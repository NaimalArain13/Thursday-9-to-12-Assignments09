import { useEffect } from "react";

interface PopupProps {
  message: string;
  onClose: () => void;
}

export default function Popup({ message, onClose }: PopupProps) {
  // Automatically close the popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white border-4 border-spacing-6 border-green-300 shadow-lg rounded-lg p-4 z-50 text-center">
      <p className="text-lg font-medium">{message}</p>
      </div>

  )}