 export class Emitter {
    constructor() {
        this.listeners = {}
    }

    // dispatch, fire, trigger
    // Уведомляем слушателей если они есть
    // 'focus', 'formula: done'
    // table.emit('table:select', {a: 1})
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false
        }
    this.listeners[event].forEach(listener => {
        listener(...args)
    })
        return true
    }
    // on, listen
    // Подписываемся на уведомление
    // Добавляем нового слушателя
    // formula.subscribe('table:select', () => {})
    subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
        // если массив уже есть то первое если нет то второе
    this.listeners[event].push(fn)
        return () => {
        this.listeners[event] =
            this.listeners[event].filter(listener => listener !==fn)
        }
    }
}
// Example
// const emitter = new Emitter()
//
// const unsub = emitter.subscribe('alexus', data => console.log('Sub:', data))
//
// emitter.emit('ale123321xus', 18)
//
//  setTimeout(() => {
//      emitter.emit('alexus', 'After 2 seconds')
//  }, 2000)
//
//  setTimeout(() => {
//     unsub()
//  }, 3000)
//
//
//  setTimeout(() => {
//      emitter.emit('alexus', 'After 4 seconds')
//  }, 4000)
//

