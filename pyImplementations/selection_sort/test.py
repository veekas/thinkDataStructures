import unittest
from index import selection_sort


class SelectionSortTestCase(unittest.TestCase):
    def test_sorts_list_unique_values(self):
        self.assertListEqual(selection_sort([4, 7, 2, 8, 0, 1]), [0, 1, 2, 4, 7, 8])

    def test_sorts_empty_list(self):
        self.assertListEqual(selection_sort([]), [])

    def test_sorts_list_repeated_values(self):
        self.assertListEqual(selection_sort([4, 0, 0, 8, 0, 1]), [0, 0, 0, 1, 4, 8])

    def test_ahndles_non_list_input(self):
        with self.assertRaises(TypeError):
            selection_sort({})


if __name__ == '__main__':
    unittest.main()