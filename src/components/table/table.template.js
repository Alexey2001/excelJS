const CODES = {
    A: 65,
    Z: 90
}

function toCell() {
    return `
<div class="cell" contenteditable=""></div>

    `
}

function toColumn(col) {
    return `
    <div class="column">${col}
</div>
    `
}

function createRow(index, content) {
    return `
    <div class="row">
    <div class="row-info">${index ? index : ''}</div>
    <div class="row-data">${content}</div>
</div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

// логика с таблицей
export function createTable(rowsCount = 35) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []
    // делаем массив а длинна массива это наше значение
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('') // все получаем и соединяем в строчку
    rows.push(createRow(null, cols))
    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')
        rows.push(createRow(i + 1, cells))
        // первым передаем индекс вторым все столбцы и строчки
    }
    return rows.join('')
}
