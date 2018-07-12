import csv
from entry.models import entry


with open('words.csv') as words:
    reader = csv.reader(words)
    for row in reader:
        entry.objects.create(english=row[0], bhutia=row[1], tibetan=row[2], category=row[3])







