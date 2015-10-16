
/**
 *  This function returns an array of the specified size
 *  filled with random numbers in the given range [low, high]
 */
function getRandomArray(size, min, max) {
    var arr = [];
    for(var i=0; i<size; i++) {
      arr.push(Math.random() * (max - min) + min);
    }
    return arr;
}

/**
 * An implementation of the infamous bubble sort algorithm.
 */
function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

/**
 * A straightforward implementation of selection sort.
 */
function selectionSort(arr) {
  for(var i=0; i<arr.length-1; i++) {
    var minIndex = i;
    for(var j=i+1; j<arr.length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //swap a[i] and a[minIndex]
    var t = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = t;
  }
}

/**
 * An implementation of the insertion sort algorithm.
 */
function insertionSort (a) {
    for (var i = 0; i < a.length; i++) {
        var k = a[i];
        for (var j = i; j > 0 && k < a[j - 1]; j--)
            a[j] = a[j - 1];
        a[j] = k;
    }
    return a;
}

/**
 * An implenetation of quicksort
 */
function quicksort(arr)
{
  //if array is empty
  if (arr.length === 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  //go through each element in array
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
         left.push(arr[i]);
      } else {
         right.push(arr[i]);
      }
  }
  return quicksort(left).concat(pivot, quicksort(right));
}

function testSortAlgorithm(size, algo) {
    var arr = getRandomArray(size, -100, 100);
    var start = Date.now();
    if(!algo) {
      arr.sort(function(a, b) {
        return (a - b);
      });
    } else {
      algo(arr);
    }
    var end = Date.now();
    var seconds = (end - start) / 1000;

    $("#results").hide().text("Results: " + size + " elements, runtime: " + seconds + " seconds").fadeIn("slow");
}

function runTest() {

    $("#results").hide().text("Running...").show(function() {
        var size = $("#size").val();
        var algo = $("#algo").val();
        algo = ( (algo==="default") ? null : algo );
        algo = window[algo];
        setTimeout(testSortAlgorithm(size, algo), 0);
    });
}

