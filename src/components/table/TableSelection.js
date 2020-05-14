 export class TableSelection {
    static className = 'selected'
    constructor() {
        this.group = []
        this.current = null
    }
    // $el instanceof DOM === true
    select($el) {
        this.clear()
        $el.focus().addClass(TableSelection.className)
        this.group.push($el)
        this.current = $el
    }

    clear() {
        this.group.forEach($el => $el.removeClass(TableSelection.className))
        // пробегаемся по нашему массиву и выделяем
        this.group = [] // приводим к пустому массиву каждый раз
    }

    selectGroup($group = []) {
    this.clear()

        this.group = $group
        this.group.forEach($el => $el.addClass(TableSelection.className))
    }
}