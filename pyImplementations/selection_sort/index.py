def selection_sort(input_list):
    if not isinstance(input_list, list):
        raise TypeError('input needs to be a list')

    def find_lowest_value_index(start_index):
        lowest_value_index = start_index
        for i, x in enumerate(input_list[start_index:]):
            if x < input_list[lowest_value_index]:
                lowest_value_index = start_index + i
        return lowest_value_index

    def swap_indices_in_place(i, j):
        temp = input_list[i]
        input_list[i] = input_list[j]
        input_list[j] = temp

    for k, x in enumerate(input_list):
        lowest_value_index_in_input = find_lowest_value_index(k)
        if input_list[lowest_value_index_in_input] < x:
            swap_indices_in_place(lowest_value_index_in_input, k)

    return input_list
