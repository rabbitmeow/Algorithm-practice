function displayPage(list, size) {
	list = list.map(el => ({hostId: el.split(',')[0], el})).reverse()
	const ret = []
	while (list.length) {
		const page = [], rest = []
		const set = new Set()
		
		for (let i = 0; i < size && list.length > 0; ) {
			const {hostId, el} = list.pop()
			if (set.has(hostId)) {
				rest.push({hostId, el})
				continue
			}
			set.add(hostId)
			page.push(el)
			i++
		}
		ret.push(page)
		list = list.concat(rest.reverse())
	}
	return ret
}

const list = [
	"1,28,300.1,SanFrancisco",
	"4,5,209.1,SanFrancisco",
	"20,7,208.1,SanFrancisco",
	"23,8,207.1,SanFrancisco",
	"16,10,206.1,Oakland",
	"1,16,205.1,SanFrancisco",
	"6,29,204.1,SanFrancisco",
	"7,20,203.1,SanFrancisco",
	"8,21,202.1,SanFrancisco",
	"2,18,201.1,SanFrancisco",
	"2,30,200.1,SanFrancisco",
	"15,27,109.1,Oakland",
	"10,13,108.1,Oakland",
	"11,26,107.1,Oakland",
	"12,9,106.1,Oakland",
	"13,1,105.1,Oakland",
	"22,17,104.1,Oakland",
	"1,2,103.1,Oakland",
	"28,24,102.1,Oakland",
	"18,14,11.1,SanJose",
	"6,25,10.1,Oakland",
	"19,15,9.1,SanJose",
	"3,19,8.1,SanJose",
	"3,11,7.1,Oakland",
	"27,12,6.1,Oakland",
	"1,3,5.1,Oakland",
	"25,4,4.1,SanJose",
	"5,6,3.1,SanJose",
	"29,22,2.1,SanJose",
	"30,23,1.1,SanJose"
]

displayPage(list, 12)