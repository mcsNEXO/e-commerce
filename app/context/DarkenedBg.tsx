"use client";
import React from "react";
interface IDarkenedBg {
  isOpen: boolean;
  action: string;
  handleAction: (isOpen: boolean, action?: string) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkenedBg = React.createContext<IDarkenedBg | undefined>(
  undefined
);

export const DarkenedBgProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [action, setAction] = React.useState<string>("");

  const handleAction = (isOpen: boolean, action?: string) => {
    setIsOpen(isOpen);
    if (action) setAction(action);
    if (action && !isOpen) {
      setAction("");
    }
  };

  const value = {
    isOpen,
    action,
    handleAction,
    setIsOpen,
  };

  return <DarkenedBg.Provider value={value}>{children}</DarkenedBg.Provider>;
};

export const useDarkenedBg = () => React.useContext(DarkenedBg);
