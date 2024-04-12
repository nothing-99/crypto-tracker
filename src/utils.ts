export function transformDate(date: number) {
  const [year, month, day] =
    new Date(date * 1000)
      .toLocaleString()
      .match(/[0-9]*\./g)
      ?.map((v) => v.replace(/\./, "")) ?? [];
  return `${year}-${month}-${day}`;
}
