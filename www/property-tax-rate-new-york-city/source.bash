alias collate='> final.csv; for i in bronx brooklyn manhattan staten-island queens; do python get-field.py $i.csv; cat output.csv >> final.csv; done'
