type classValue = string | Record<string, boolean> | undefined | null;

export const classNames = (...classes: classValue[]): string => {
  return classes
    .flatMap(classes => {
      if (!classes) return [];

      if (typeof classes === 'string') return [classes];

      if (typeof classes === 'object') {
        return Object.entries(classes)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }

      return [];
    })
    .join(' ');
};
