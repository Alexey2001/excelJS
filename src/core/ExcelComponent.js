import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubscribers = []

        console.log(options)


        // Настраиваем наш компонент до init
        this.prepare()
    }

    prepare() {
        console.log('prepare')
    }
    // Возвращает шаблон компонента
    toHTML() {
        return ''
    }
    // Уведомляем слушателей про событие event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // Подписываемся на событие event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    // Инициализируем компонент
    // добавляем DOM слушателей
    init() {
        this.initDOMListeners()
    }

    // удаляем компонент
    // Чистим слушатели
    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub)
    }
}
