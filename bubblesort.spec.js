describe('Bubble Sort', function () {
  it('handles an empty array', function () {
    expect(bubbleSort([13, 4, 89, 26, 57, 10, 31])).toEqual([4, 10, 13, 26, 31, 57, 89]);
    expect(bubbleSort([2, 6, 1, 15, 4, 12, 9])).toEqual([1, 2, 4, 6, 9, 12, 15]);
  });
});
