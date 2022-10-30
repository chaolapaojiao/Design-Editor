import hotkeys from "hotkeys-js";
export default function (canvas) {
    hotkeys('left,right,down,up', function (event, handler) {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
            console.log(handler.key)
            switch (handler.key) {
                case 'left':
                    activeObject.set('left', activeObject.left - 1)
                    break;
                case 'right':
                    activeObject.set('right', activeObject.left + 1)
                    break;
                case 'down':
                    activeObject.set('top', activeObject.top - 1)
                    break;
                case 'top': activeObject.set('top', activeObject.top + 1)
                    break;
                default:
            }
            canvas.renderAll()
        }
    })
    hotkeys('backspace', function (event, handler) {
        const activeObject = canvas.getActiveObjects();
        if (activeObject) {
            activeObject.map(item => canvas.remove(item))
            canvas.requestRenderAll()
            canvas.discardActiveObject()
        }
    });
}