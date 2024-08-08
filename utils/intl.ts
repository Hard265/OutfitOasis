export function pluralize(text: string, count: number) {
  const formater = new Intl.PluralRules('en-US', { type: 'cardinal' })
  const pluralForm = formater.select(count)
  return text
    .replace('{count}', count.toString())
    .replace('{plural}', pluralForm)
}
