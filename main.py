import re

class Token:
    def __init__(self, value, token_type):
        self.value = value
        self.token_type = token_type

    def __str__(self):
        return f"{self.token_type}: {self.value}"

def tokenize(source_code):
    keywords = ["if", "else", "while"]
    operators = ["+", "-", "*", "/"]
    separators = ["(", ")", "{", "}", ",", ";"]

    tokens = []
    pattern = re.compile(r"\b(?:{})\b|\d+|\w+|.".format("|".join(map(re.escape, operators + separators + keywords))))

    for match in pattern.finditer(source_code):
        token_value = match.group()
        token_type = classify_token(token_value, keywords, operators, separators)
        tokens.append(Token(token_value, token_type))

    return tokens

def classify_token(value, keywords, operators, separators):
    if value in keywords:
        return "Keyword"
    elif value in operators:
        return "Operator"
    elif value in separators:
        return "Separator"
    elif value.isdigit():
        return "Number"
    elif re.match(r"^[a-zA-Z_]\w*$", value):
        return "Identifier"
    else:
        return "Unknown"

# Example usage
source_code = """
if x > 5:
    y = x + 2
else:
    y = x - 2
"""

tokens = tokenize(source_code)

for token in tokens:
    print(token)
