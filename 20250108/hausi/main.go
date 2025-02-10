package main

import (
	"fmt"
	"reflect"
)

func findMinMax(arr []int) (int, int) {
	min := arr[0]
	max := arr[0]
	for _, v := range arr {
		if v > max {
			max = v
		}
		if v < min {
			min = v
		}
	}
	return min, max
}
func flattenArray(arr []interface{}) []int {
	var result []int
	for _, v := range arr {
		switch v.(type) {
		case int:
			result = append(result, v.(int))
		case []int:
			result = append(result, v.([]int)...)
		case []interface{}:
			result = append(result, flattenArray(v.([]interface{}))...)
		}
	}
	return result
}
func removeDuplicates(arr []int) []int {
	var result []int
	for _, v := range arr {
		if !contains(result, v) {
			result = append(result, v)
		}
	}
	return result
}

func contains(s []int, str int) bool {
	for _, v := range s {
		if v == str {
			return true
		}
	}

	return false
}
func sortByAttribute(arr []map[string]interface{}, attribute string) (error, []map[string]interface{}) {
	err := fmt.Errorf("Attribute %s not found", attribute)
	for i := 0; i < len(arr); i++ {
		for j := i + 1; j < len(arr); j++ {
			if reflect.TypeOf(arr[i][attribute]).Kind() == reflect.Int {
				if arr[i][attribute].(int) > arr[j][attribute].(int) {
					arr[i], arr[j] = arr[j], arr[i]
				}
			} else if reflect.TypeOf(arr[i][attribute]).Kind() == reflect.String {
				if arr[i][attribute].(string) > arr[j][attribute].(string) {
					arr[i], arr[j] = arr[j], arr[i]
				}
			} else {
				return err, nil
			}

		}
	}
	return nil, arr
}
func main() {
	array1 := []int{5, 3, 8, 1, 2}
	array2 := []interface{}{
		1,
		[]interface{}{
			2,
			[]int{3, 4},
		},
		5,
		[]interface{}{
			6,
			[]int{7},
		},
	}
	array3 := []int{1, 2, 2, 3, 4, 4, 5}
	array4 := []map[string]interface{}{
		{"name": "John", "age": 30},
		{"name": "Jane", "age": 25},
		{"name": "Mike", "age": 35},
	}
	min, max := findMinMax(array1)
	fmt.Printf("Min: %d, Max: %d\n", min, max)
	fmt.Printf("Flatten Array: %v\n", flattenArray(array2))
	fmt.Printf("Remove Duplicates: %v\n", removeDuplicates(array3))
	err, result := sortByAttribute(array4, "age")
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Printf("Sort By Attribute: %v\n", result)
}
