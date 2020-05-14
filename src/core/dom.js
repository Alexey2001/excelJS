class Dom {
    constructor(selector) {
        // #app
        this.$el = typeof selector === 'string'
            // если строка то делаем  document.querySelector
            ? document.querySelector(selector)
            : selector
// если дом нода то просто присваиваем селектор в this.$el
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html
            return this // в this есть метод clear
        } // мы это используем как сеттер в том случае если мы передаем string
        return this.$el.outerHTML.trim() // трим удаляет лишние пробелы
    }

    text(text) {
        if (typeof text === 'string') {
            this.$el.textContent = text
            return this
        }
        if (this.$el.tagName.toLowerCase() === 'input') {
            return this.$el.value.trim()
        }
        return this.$el.textContent.trim()
    }

    clear() {
        this.html('')
        return this
    }

    on(eventType, callback) {
        // этот объект мы не будем инициализировать и пишем по этой причине так
        this.$el.addEventListener(eventType, callback)
    }

    // eventType - input click mouseDown mouseMove

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
    }

    find(selector) {
        return $(this.$el.querySelector(selector))
    }

    // Element = node
    append(node) {
        if (node instanceof Dom) {
// если нативный элемент будет то пройдет
            node = node.$el
        }
        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
        return this
    }

    get data() {
        return this.$el.dataset
    }

    closest(selector) {
        return $(this.$el.closest(selector))
    }

    getCoords() {
        return this.$el.getBoundingClientRect()
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector)
    }

    css(styles = {}) {
        Object
            .keys(styles)
            .forEach(key => {
            this.$el.style[key] = styles[key]
        })
    }

    id(parse) {
        if (parse) {
            const parsed = this.id().split(':')
            return {
                row: +parsed[0],
                col: +parsed[1]
            }
        }
        return this.data.id
    }

    focus() {
        this.$el.focus()
        return this
    }

    addClass(className) {
        this.$el.classList.add(className)
        return this
    }

    removeClass(className) {
        this.$el.classList.remove(className)
        return this
    }
}

$('div').html('<h1>Test</h1>').clear()


export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if (classes) {
        el.classList.add(classes)
    }
    return $(el)
}
