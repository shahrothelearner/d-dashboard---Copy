

const totallength = (data)=>{
    return  data.length;
}

const totalElements = (data, type, element) =>{
    return data.filter(key=> key[type] === element).length
}

const totalElementQty = (data, type, element) =>{
    return data.filter(key => key[type]===element).reduce((a,c)=> a+c )

}

export {
    totallength,
    totalElements,
    totalElementQty
}