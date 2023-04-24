const data = [
    {
        name: 'aga',
        desid: 1
    },
    {
        name: 'aga2',
        desid: 2
    },
    {
        name: 'aga3',
        desid: 3
    },
    {
        name: 'aga4',
        desid: 4
    }
]

const cId = [
    {
        id : 1,
        desc : 'selelu bahagia1'
    },
    {
        id : 2,
        desc : 'selelu bahagia2'
    },
    {
        id : 3,
        desc : 'selelu bahagia3'
    },
    {
        id : 4,
        desc : 'selelu bahagia4'
    },
    {
        id : 5,
        desc : 'selelu bahagia5'
    }
]

const mapFilter = data.map((item) => {
    const match = cId.find((cItem) => cItem.id === item.desid)
    return {...item, ...match}
})
console.log(mapFilter)

const getResult = mapFilter.find(e => e.desid === e.id)
console.log(getResult)