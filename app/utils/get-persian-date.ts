export function getPersianDate(date: Date) {
  const year = Number(
    date.toLocaleDateString("fa-IR-u-nu-latn", {
      year: "numeric",
      timeZone: "Iran",
    })
  );
  const month = Number(
    date.toLocaleDateString("fa-IR-u-nu-latn", {
      month: "numeric",
      timeZone: "Iran",
    })
  );
  const day = Number(
    date.toLocaleDateString("fa-IR-u-nu-latn", {
      day: "numeric",
      timeZone: "Iran",
    })
  );
  return { year, month, day };
}
