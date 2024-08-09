export function pluralize(text: string, count: number) {
  const formater = new Intl.PluralRules('en-US', { type: 'cardinal' })
  const pluralForm = formater.select(count)
  return text
    .replace('{count}', count.toString())
    .replace('{plural}', pluralForm)
}

export function formatCurreny(value: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'MWK',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  return formatter.format(value)
}
