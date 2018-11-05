function bubbleSort(arr) {
  // forEach implementation
  // let sorted = true;
  // while (sorted) {
  //   sorted = false;

  //   arr.forEach(function (element, index) {
  //     if (arr[index] > arr[index + 1]) {
  //       swap(arr, index, index + 1);
  //       sorted = true;
  //     }
  //   });
  // }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j);
      }
    }
  }

  return arr;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
