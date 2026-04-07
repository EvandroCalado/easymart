import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib';

import styles from './Button.module.scss';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
type ButtonForm = 'rounded' | 'pill' | 'circle';
type ButtonTheme = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';

interface ButtonProps extends ComponentProps<'button'> {
  size?: ButtonSize;
  form?: ButtonForm;
  theme?: ButtonTheme;
}

export const Button = ({
  size = 'sm',
  form = 'pill',
  theme = 'primary',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        styles.button,
        styles[size],
        styles[form],
        styles[theme],
        className,
      )}
    />
  );
};
