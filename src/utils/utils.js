// 工具文件 对文件的操作

import FontFaceObserver from 'fontfaceobserver'

export function getImgStr(file) {
    return new Promise((resolve, reject) => {
        try {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                resolve(reader.result)
            }
        } catch (error) {
            reject(error)
        }
    })
}

// 根据json模板下载字体
export function downFontByJSON(str) {
    const skipFonts = ['arial', 'Microsoft YaHei']
    const fontFamilys = JSON.parse(str).objects.filter(item => {
        return (item.type.includes('text') && skipFonts.includes(item.fontFamilys))
    }).map(item => item.fontFamily)
    const fontFamilysAll = fontFamilys.map(fontName => {
        const font = new FontFaceObserver(fontName);
        return font.load(null, 150000)
    })
    return Promise.all(fontFamilysAll)
}
