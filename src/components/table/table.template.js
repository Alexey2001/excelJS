const CODES = {
    A: 65,
    Z: 90
}

function toCell(_, col) {
    console.log(col)
    return `
<div class="cell" contenteditable="" data-col="${col}"></div>
    `
}

function toColumn(col, index) {
    return `
    <div class="column" data-type="resizable" data-col="${index}">
    ${col}
    <div class="col-resize " data-resize="col"></div>
    </div>
    `
}

function createRow(index, content) {
    const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
    return `
    <div class="row" data-type="resizable">
    <div class="row-info">${index ? index : ''}
    ${resize}
    </div>
    <div class="row-data">${content}</div>
</div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

// логика с таблицей
export function createTable(rowsCount) {
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
