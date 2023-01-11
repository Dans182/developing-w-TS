//.model en TS no significa nada, es una forma visual para indicar que ese archivo tiene modelado modular
//.service en TS es una forma visual para indicar que trata datos

type sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
type product = { title: string; createdAd: Date; stock: number; size?: sizes };
