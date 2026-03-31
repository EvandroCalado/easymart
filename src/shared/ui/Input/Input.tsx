import { type ComponentProps, type ReactNode, useState } from 'react';

import HideIcon from '@/shared/assets/icons/Hide.svg?react';
import ShowIcon from '@/shared/assets/icons/Show.svg?react';
import { cn } from '@/shared/lib';

import styles from './input.module.scss';

interface InputProps extends ComponentProps<'input'> {
  rounded?: boolean;
  icon?: ReactNode;
}

export const Input = ({ rounded = false, icon, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = () => setShowPassword(prev => !prev);

  return (
    <div className={cn(styles['input-container'])}>
      {icon}
      <input
        {...props}
        className={cn(styles.input, { [styles.rounded]: rounded })}
        type={showPassword && props.type === 'password' ? 'text' : props.type}
      />
      {props.type === 'password' && (
        <button onClick={togglePassword} className={styles['input-button']}>
          {showPassword ? <ShowIcon /> : <HideIcon />}
        </button>
      )}
    </div>
  );
};
