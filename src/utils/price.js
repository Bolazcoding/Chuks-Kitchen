export function parsePrice(price = "") {
  if (typeof price === "number") {
    return price;
  }

  if (typeof price !== "string") {
    return 0;
  }

  const numeric = price.replace(/[^0-9.-]/g, "");
  return Number(numeric) || 0;
}

export function formatPrice(value) {
  const amount = Number(value) || 0;
  return `#${amount.toLocaleString("en-US")}`;
}
