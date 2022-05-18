import useSecretCode from './useSecretCode';

const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  // 'KeyB',
  // 'KeyA',
];
console.log(konamiCode);

const useKonamiCode = () => {
  const success = useSecretCode(konamiCode);
  return success;
};

export default useKonamiCode;
