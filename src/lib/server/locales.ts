import { JSDOM } from 'jsdom'
const xml = await fetch(
  'https://raw.githubusercontent.com/new-world-tools/localization/main/javelindata_craftingcategories.loc.xml',
).then((res) => res.text())

const { document } = new JSDOM(xml).window
const strings = document.querySelectorAll('string')
export const craftingLocales: { [k: string]: string | null } = {}
strings.forEach((ele) => {
  const key = ele.getAttribute('key')
  if (key) craftingLocales[key.toLowerCase()] = ele.textContent
})