import { useEffect } from "react";

export default function useShowWarning(warningAmount, setShowWarning) {
  useEffect(() => {
    setShowWarning(warningAmount > 0);
  }, [warningAmount, setShowWarning]);
}
