export function capitalize(text: string | undefined | null): string {
  if (!text) {
    return "";
  }

  return text[0].toUpperCase() + text.slice(1);
}

export function getNewPrice(price: number, discount: number): number {
  if (!discount) {
    return price;
  }

  return Math.round(price * (1 - discount / 100));
}
