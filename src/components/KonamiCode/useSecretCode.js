import { useEffect, useState } from 'react';
import useInputEvent from './useInputEvent';

const useSecretCode = (secretCode) => {
  const [count, setCount] = useState(0);
  const [success, setSuccess] = useState(false);
  const key = useInputEvent();

  useEffect(() => {
    // Checker si remise a 0 apres avoir ete joue 1 fois
    // setSuccess(true);
    // ignore keyup
    if (key == null) return;

    // reset if invalid key
    if (key !== secretCode[count]) {
      setCount(0);
      return;
    }

    // valid key
    setCount((state) => state + 1);

    // code complete
    if (count + 1 === secretCode.length) {
      setSuccess(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return success;
};

export default useSecretCode;
