type ProductPriceProps = {
  amount: string | number;
  currencyCode?: string;
  className?: string;
  minimumFractionDigits?: number;
};

export default function ProductPrice({ amount, currencyCode = "USD", className = "", minimumFractionDigits }: ProductPriceProps) {
  const value = typeof amount === "string" ? parseFloat(amount) : amount;
  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits,
  });

  return <span className={className}>{formatter.format(isFinite(value) ? value : 0)}</span>;
}
