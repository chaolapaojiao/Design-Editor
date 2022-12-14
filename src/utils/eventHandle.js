// 对事件进行封装
import EventEmitter from 'events'

class EventHandle extends EventEmitter {
    // 初始化绑定事件
    init(handler) {
        this.handler = handler
        this.handler.on("selection:created", (e) => this._selected(e))
        this.handler.on("selection:updated", (e) => this._selected(e))
        this.handler.on("selection:cleared", (e) => this._selected(e))
    }
    // 暴露多选事件
    _selected(e) {
        // getActiveObjects()拿到选中的元素
        const actives = this.handler.getActiveObjects()
        if (actives && actives.length === 1) {
            // 触发选中事件
            this.emit('selectOne', actives)
        } else if (actives && actives.length > 1) {
            this.mSelectMode = 'multiple'
            this.emit('selectMultiple', actives)
        } else {
            this.emit('selectCancel')
        }
    }
}

export default EventHandle