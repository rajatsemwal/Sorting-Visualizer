import Heap from 'heap-js'

export function getMergeSortAnimations(array) {

    const animations = []
    if(array.length <= 1) return array

    const tempArray = array.slice()
    mergeSortHelper(array, 0, array.length - 1, tempArray, animations)
    return animations
}

function mergeSortHelper(mainArray, startIdx, endIdx, tempArray, animations) {

    if(startIdx === endIdx) return

    const middleIdx = Math.floor((startIdx + endIdx)/2)
    mergeSortHelper(tempArray, startIdx, middleIdx, mainArray, animations)
    mergeSortHelper(tempArray, middleIdx + 1, endIdx, mainArray, animations)
    doMerge(mainArray, startIdx, middleIdx, endIdx, tempArray, animations)
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, tempArray, animations) {

    let i = startIdx, k = startIdx, j = middleIdx + 1
    
    while(i <= middleIdx && j <= endIdx) {

        animations.push([i, j])
        animations.push([i, j])
    
        if(tempArray[i] <= tempArray[j]) {
            animations.push([k, tempArray[i]]) 
            mainArray[k++] = tempArray[i++]
        }
        else {
            animations.push([k, tempArray[j]])
            mainArray[k++] = tempArray[j++]
        }
    }

    while(i <= middleIdx) {
        animations.push([i, i])
        animations.push([i, i])

        animations.push([k, tempArray[i]])
        mainArray[k++] = tempArray[i++]
        }

    while(j <= endIdx) {
        animations.push([j, j])
        animations.push([j, j])
        animations.push([k, tempArray[j]])
        mainArray[k++] = tempArray[j++]
    }
}

export function getBubbleSortAnimations(array) {

    const animations = []
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - i - 1; j++) {
            animations.push([j, j+1])
            animations.push([j, j+1])
            if(array[j] > array[j+1]) {
                
                animations.push([j, j+1, array[j], array[j+1]])
                let temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp
            }
            else {
                animations.push([j, array[j]])
            }
        }
    }
    return animations
}

export function getHeapSortAnimations(array) {
    
    const animations = []
    let count = 0
    const maxHeap = new Heap(Heap.maxComparator)
    
    for (let i = 0; i<array.length-1; i++) {
    
        animations.push([i,i+1])
        count += 1
        maxHeap.push(array[i])
    }

    maxHeap.push(array[array.length-1])
    animations.push([array.length-1, array.length-1])
    count += 1
    
    for (let i = array.length - 1; i >= 0; i--){
    
        array[i] = maxHeap.pop();
        animations.push([i,i])
        animations.push([i,i])
        animations.push([i, array[i]])
    
    }
    return [animations, count]
}


export function getInsertionSortAnimations(array){
       
    const animations = []
    
    for (let i = 1; i < array.length;i++){

        let j = i-1
      
        let key = array[i]
        
        while (j >= 0 && key < array[j]){
            
            animations.push([j+1,j])
            animations.push([j+1,j])
            animations.push([j+1,array[j]])
            array[j+1] = array[j]
            j -= 1
        }
        
        animations.push([i,j+1])
        animations.push([i,j+1])
        animations.push([j+1,key])
        array[j+1] = key
        }
  
    return animations;
}