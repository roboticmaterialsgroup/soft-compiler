import boolean


expr = "(B & C) | (A) | (A & C) | (A & B & C)"
# expr = "A&C"
parser = boolean.BooleanAlgebra()
parsedExpr = parser.parse(expr)
simplifiedExpr = parsedExpr.simplify()

myString = str(simplifiedExpr)
print(myString)
