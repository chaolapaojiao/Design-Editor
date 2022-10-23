// 混入 canvas fabric event
export default {
    inject: ['canvas', 'fabric', 'event'],
    data() {
        return {
            mSelectMode: '', // one | multiple
            mSelectOneType: '', // i-text | group ...
            mSelectId: '', // 选择id
            mSelectIds: [], // 选择id
        }
    },
    created() {
        this.event.on('selectOne', (e) => {
            this.mSelectMode = 'one'
            this.mSelectId = e[0].id
            this.mSelectOneType = e[0].type
            this.mSelectIds = e.map(item => item.id)
        })
        this.event.on('selectMultiple', (e) => {
            this.mSelectMode = 'multiple'
            this.mSelectId = ''
            this.mSelectIds = e.map(item => item.id)
        })
        this.event.on('selectCancel', () => {
            this.mSelectId = ''
            this.mSelectIds = []
            this.mSelectMode = ''
            this.mSelectOneType = ''
        })
    },
    methods: {
        _mixinSelected({ event, selected }) {
            if (selected.length === 1) {
                const selectItem = selected[0]
                this.mSelectMode = 'one'
                this.mSelectOneType = selectItem.type
                this.mSelectId = [selectItem.id]
                this.mSelectActive = [selectItem]
            } else if (selected.length > 1) {
                this.mSelectMode = 'multiple'
                this.mSelectActive = selected
                this.mSelectId = selected.map(item => item.id)
            } else {
                this._mixinCancel()
            }
        },
        // 取消选择
        _mixinCancel(data) {
            this.mSelectMode = ''
            this.mSelectId = []
            this.mSelectActive = []
            this.mSelectOneType = ''
        },
        // 复制
        _mixinClipboard(clipboardText) {
            this.$copyText(clipboardText).then(() => {
                this.$Message.success('复制成功')
            }, () => {
                this.$Message.error('复制失败')
            })
        },

    }
}