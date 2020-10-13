export default function toPrettyName(value: string) {
  return value
    .split("-")
    .map((f) => f.split(""))
    .flatMap(([f, ...rest]) => [f.toUpperCase(), ...rest])
    .join("");
}
