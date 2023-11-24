function romanNumerals(value: number): string | void {
  type romanNum = {
    key: number;
    symbol: string;
  };
  const romanNumerals: romanNum[] = [
    { key: 1000, symbol: "M" },
    { key: 900, symbol: "CM" },
    { key: 500, symbol: "D" },
    { key: 400, symbol: "CD" },
    { key: 100, symbol: "C" },
    { key: 90, symbol: "XC" },
    { key: 50, symbol: "L" },
    { key: 40, symbol: "XL" },
    { key: 10, symbol: "X" },
    { key: 9, symbol: "IX" },
    { key: 5, symbol: "V" },
    { key: 4, symbol: "IV" },
    { key: 1, symbol: "I" },
  ];
  let gabungRomawi: string = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    while (value >= romanNumerals[i].key) {
      gabungRomawi += romanNumerals[i].symbol;
      value -= romanNumerals[i].key;
    }
  }
  return gabungRomawi;
}

console.log(romanNumerals(6)); // VI
console.log(romanNumerals(9)); // IX
console.log(romanNumerals(23)); // XXIII
console.log(romanNumerals(2021)); //MMXXI
console.log(romanNumerals(1646)); //MDCXLVI
