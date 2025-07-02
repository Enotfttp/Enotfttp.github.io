export function uid(): string {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, '');
}

export function additionalHover<T>(arr?: T[]): T[] | [] {
  return arr?.length ? arr.map((item) => ({ ...item, hover: true })) : [];
}

export function isDateInRange(target: string, start: string, end: string): boolean {
  const parse = (dateStr: string) => {
    const [day, month, year] = dateStr.split('.').map(Number);
    return new Date(year, month - 1, day);
  };

  const targetDate = parse(target);
  const startDate = parse(start);
  const endDate = parse(end);

  return targetDate >= startDate && targetDate <= endDate;
}
