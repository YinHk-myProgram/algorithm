def selection_sort(numbers):
    for i in range(len(numbers) - 1):
        min_index = i

        # 搵出未排序部分最細嘅數
        for j in range(i + 1, len(numbers)):
            if numbers[j] < numbers[min_index]:
                min_index = j

        # 將最細嘅數放到位置 i
        numbers[i], numbers[min_index] = numbers[min_index], numbers[i]
