#!/bin/python3
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

service_object = Service('./chromedriver')
driver = webdriver.Chrome(service=service_object)
driver.get("https://www.wikipedia.de")
sleep(2)
search_bar = driver.find_element(By.ID, "txtSearch")
search_bar.send_keys("Salzburg")

button = driver.find_element(By.ID, "cmdSearch")
button.click()

article_element = driver.find_element(By.ID, "content")
article_text = article_element.text
print(article_text)

driver.quit()