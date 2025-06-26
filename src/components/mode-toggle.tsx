import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? <Moon /> : <Sun className="text-white" />}
      </Button>
    </div>
  );
}
