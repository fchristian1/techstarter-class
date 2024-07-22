#!/usr/bin/python3
import sys
import regex as re

def extrakt_emails(text):
    emails = re.findall(r"[\w.-]+@[\w.-]+\.\w+", text)
    return emails

def list_to_file(list, filename):
    f = open(filename, "a")
    for i in list:
        f.write(i + "\n")
    f.close()

def word_len(text):
    return len(text.rsplit(" "))

def replace_digit_to_num(text):
    text = re.sub(r"[0-9]","num", text)
    return text

def main():
    text = ""
    if len(sys.argv) == 1:
        text = """Hello, you can contact us at support@example.com or sales@example.com. Our office number is 123-456-7890 and we have been operational since 2020. Visit our website at http://example.com for more information."""
    else:
        with open(sys.argv[1], "r") as f:
            text = f.read()

    list_to_file(extrakt_emails(text),"emails.txt")
    print(f"Die anzahle der worte im text: {word_len(text)}\n")
    print("Text ohne Zahlen:")
    print(replace_digit_to_num(text))

main()
