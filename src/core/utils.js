// Pure funcktions
export function capitalize(string) {
 if (typeof string !== 'string') {
     return ''
 } // charAt() возвращает символ по заданному индексу внутри строки
 return string.charAt(0).toUpperCase() + string.slice(1)
}