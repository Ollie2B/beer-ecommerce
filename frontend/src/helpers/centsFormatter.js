export default function centsFormatter (priceInCents) {
  return `$${(priceInCents/100).toFixed(2)}`
}
