function mergeSort(array){
    if(array.length <= 1 ){
        return array
    }else{
        const mid = Math.floor(array.length / 2)
        const left = array.slice(0,mid) 
        const right = array.slice(mid) 
        
        const sortedLeft = mergeSort(left)
        const sortedRight = mergeSort(right)

        return merge(sortedLeft,sortedRight)
    }
}

function merge(sortedLeft,sortedRight){
    let result = []
    let leftIndex = 0 
    let rightIndex = 0 

    while(leftIndex < sortedLeft.length && rightIndex < sortedRight.length){
        if(sortedLeft[leftIndex] < sortedRight[rightIndex] ){
            result.push(sortedLeft[leftIndex])
            leftIndex ++
        }else{
            result.push(sortedRight[rightIndex])
            rightIndex++
        }
    }
    result = result.concat(sortedLeft.slice(leftIndex))
    result = result.concat(sortedRight.slice(rightIndex))
    return result;
}



module.exports = mergeSort