
import { useContext, useMemo } from 'react';
import { ThemeContext } from '@/components/ThemeContext';

const useThemedStyles = (styles: any) => {
  const { theme } = useContext(ThemeContext);

  return useMemo(() => styles(theme), [theme]);
};

export default useThemedStyles;
