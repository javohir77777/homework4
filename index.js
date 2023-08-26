// 1
let sort = [1, 7, 2, 8, 3, 4, 5, 0, 9]

for (let i = 1; i < sort.length; i++)
    for (let j = 0; j < i; j++)
        if (sort[i] < sort[j]) {
            let x = sort[i]
            sort[i] = sort[j]
            sort[j] = x
        }

console.log(sort)


// 2
let bubbleSort = (arr) => {
    let sorted;
  
    do {
      sorted = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [myArray[i], myArray[i + 1]] = [myArray[i + 1], myArray[i]];
          sorted = true;
        }
      }
    } while (sorted);
  
    return arr;
  };
  
  let myArray = [1, 7, 2, 8, 3, 4, 5, 0, 9];
  console.log(bubbleSort(myArray));