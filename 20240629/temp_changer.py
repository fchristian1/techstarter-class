#!/usr/bin/python3
import os

text_menu = '''
Bitte wählen Sie eine Option zur umrechnung der Temperatur:

(1) von Celsius nach Kelvin
(2) von Celsius nach Fahrenheit 
(3) von Kelvin nach Celsius 
(4) von Kelvin nach Fahrenheit 
(5) von Fahrenheit nach Celsius 
(6) von Fahrenheit nach Kelvin
(0) Programm beenden
'''
text_option = ['0', '1', '2', '3', '4', '5', '6']
text_option_empty = ''
text_choice = 'Ihre Wahl: '
text_input_temp = 'Bitte geben Sie die Temperatur in {} ein: '
text_bad_choice = 'Ungültige Eingabe. Bitte wählen Sie eine Option zwischen 0 und 6'
text_bad_input_temp = 'Ungültige Eingabe. Bitte geben Sie eine Zahl ein'
text_bad_temp_celsius = 'Ungültige Eingabe. Die Temperatur kann nicht unter -273.15 Grad Celsius sein'
text_bad_temp_kelvin = 'Ungültige Eingabe. Die Temperatur kann nicht unter 0 Kelvin sein'
text_bad_temp_fahrenheit = 'Ungültige Eingabe. Die Temperatur kann nicht unter -459.67 Fahrenheit sein'
text_wait = 'Drücken Sie Enter um fortzufahren...'
text_result_celsius_to_kelvin = '{} Grad Celsius sind {} Kelvin'
text_result_celsius_to_fahrenheit = '{} Grad Celsius sind {} Fahrenheit'
text_result_kelvin_to_celsius = '{} Kelvin sind {} Grad Celsius'
text_result_kelvin_to_fahrenheit = '{} Kelvin sind {} Fahrenheit'
text_result_fahrenheit_to_celsius = '{} Fahrenheit sind {} Grad Celsius'
text_result_fahrenheit_to_kelvin = '{} Fahrenheit sind {} Kelvin'
text_temp_unit = ['Celsius', 'Kelvin', 'Fahrenheit']
bad_temp_condition_celsius = lambda temp: temp < -273.15
bad_temp_condition_kelvin = lambda temp: temp < 0
bad_temp_condition_fahrenheit = lambda temp: temp < -459.67
option = text_option_empty

def celsius_to_kelvin(temp):
    return temp + 273.15

def celsius_to_fahrenheit(temp):
    return temp * 9/5 + 32

def kelvin_to_celsius(temp):
    return temp - 273.15

def kelvin_to_fahrenheit(temp):
    return temp * 9/5 - 459.67

def fahrenheit_to_celsius(temp):
    return (temp - 32) * 5/9

def fahrenheit_to_kelvin(temp):
    return (temp + 459.67) * 5/9

def clear_terminal():
    os.system('cls' if os.name == 'nt' else 'clear')

def work(text_temp_unit, bad_temp_condition, text_bad_temp, text_result, function):
    clear_terminal()
    temp = input(text_input_temp.format(text_temp_unit))
    if temp == text_option_empty:
        print(text_bad_input_temp)
        input(text_wait)
        return False
    temp = float(temp)
    if bad_temp_condition(temp):
        print(text_bad_temp)
        input(text_wait)
        return False
    print(text_result.format(temp, function(temp)))
    input(text_wait)
    global option
    option = text_option_empty
    return True

argument_array_option_1 = [text_temp_unit[0], bad_temp_condition_celsius, text_bad_temp_celsius, text_result_celsius_to_kelvin, celsius_to_kelvin]
argument_array_option_2 = [text_temp_unit[0], bad_temp_condition_celsius, text_bad_temp_celsius, text_result_celsius_to_fahrenheit, celsius_to_fahrenheit]
argument_array_option_3 = [text_temp_unit[1], bad_temp_condition_kelvin, text_bad_temp_kelvin, text_result_kelvin_to_celsius, kelvin_to_celsius]
argument_array_option_4 = [text_temp_unit[1], bad_temp_condition_kelvin, text_bad_temp_kelvin, text_result_kelvin_to_fahrenheit, kelvin_to_fahrenheit]
argument_array_option_5 = [text_temp_unit[2], bad_temp_condition_fahrenheit, text_bad_temp_fahrenheit, text_result_fahrenheit_to_celsius, fahrenheit_to_celsius]
argument_array_option_6 = [text_temp_unit[2], bad_temp_condition_fahrenheit, text_bad_temp_fahrenheit, text_result_fahrenheit_to_kelvin, fahrenheit_to_kelvin]

while True:
    clear_terminal()
    print(text_menu)
    user_choice_empty = option == text_option_empty
    
    if user_choice_empty:
        option = input(text_choice)
    
    user_choice_option_0 = option == text_option[0]
    user_choice_option_1 = option == text_option[1]
    user_choice_option_2 = option == text_option[2]
    user_choice_option_3 = option == text_option[3]
    user_choice_option_4 = option == text_option[4]
    user_choice_option_5 = option == text_option[5]
    user_choice_option_6 = option == text_option[6]
    user_choice_not_a_option = option not in text_option
    
    if user_choice_not_a_option:
        print(text_bad_choice)
        input(text_wait)
        continue
    
    if user_choice_option_0:
        break
    elif user_choice_option_1:
        if not work(*argument_array_option_1):
            continue
    elif user_choice_option_2:
        if not work(*argument_array_option_2):
            continue
    elif user_choice_option_3:
        if not work(*argument_array_option_3):
            continue
    elif user_choice_option_4:
        if not work(*argument_array_option_4):
            continue
    elif user_choice_option_5:
        if not work(*argument_array_option_5):
            continue
    elif user_choice_option_6:
        if not work(*argument_array_option_6):
            continue
    clear_terminal()
    
