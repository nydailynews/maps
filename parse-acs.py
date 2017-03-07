#!/usr/bin/env python
# Get data from an ACS table
import sys
import argparse
import re
import string
import doctest
import csv
import json

def get_vertical_fields(fn, *args):
    """ Return data for an ACS table flipped vertically.
        PUT EXAMPLE CSV HERE
        """
    with open(fn, 'rU') as f:
        reader = csv.reader(f, delimiter=',')
        output = {}
        current_subject = ''
        for i, row in enumerate(reader):
            row = [x.strip(' ') for x in row]
            if i == 0:
                key = row
                continue

            # Eliminate empty values from the dict
            d = dict((k, v) for k, v in zip(key, row) if v)
            if 'Subject' in d:
                current_subject = d['Subject']
            # Unfortunately, the name of the key for the measurement column is ''.
            if '' in d:
                if d[''] == 'Percent':
                    output[current_subject] = d
    return output

def transpose_csv(from_fn, to_fn):
    """ Flip a CSV's fields so horizontal tables become vertical.
        """
    with open(to_fn, 'wb') as csvfile:
        writer = csv.writer(csvfile, delimiter=',', quotechar='"')
        with open(from_fn, 'rU') as f:
            reader = csv.reader(f, delimiter=',')
            items = [row for row in reader]

        for x in zip(*items):
            writer.writerow(x)

def format_location(value):
    """ Return a dict of location pieces.
        """
    has_quotes = 0
    d = {}
    if '"' in value:
        has_quotes = 1
    d['borough'], d['cd_name'] = value.split(': ')[1].split('--')
    d['puma'] = value.split(':')[0]
    if has_quotes == 1:
        d['puma'] = d['puma'].replace('"', '')
        d['cd_name'] = '"' + d['cd_name']
    return [d['puma'], d['borough'], d['cd_name']]
    
def output_csv(output, fields):
    """ Take a list of fields that correspond with the field names in the table
        we ingested and loop through the table output.
        """
    csvfile = open('output.csv', 'wb')
    writer = csv.writer(csvfile, delimiter=',', quotechar='"')
    header =  list(['PUMA','BOROUGH', 'CD', 'CD NAME']) + list(fields)
    print header
    #header.insert(0, ['PUMA','BOROUGH', 'CD', 'CD NAME'])
    writer.writerow(header)
    for row in output.iteritems():
        # Aaaaaugh case-specific formatting. Need to turn this into a class and subclass it.
        x = format_location(row[0])
        for item in fields:
            x.append(row[1][item])
        writer.writerow(x)

def main(args):
    """ 
        """
    if len(args.filename[0]) > 0:
        fn = args.filename[0][0]
    transpose_csv(fn, 'new.csv')
    output = get_vertical_fields('new.csv')
    fields = ['Hispanic or Latino (of any race)', 'White', 'Black or African American', 'Asian', 'Some other race']
    output_csv(output, fields)

def build_parser(args):
    """ This method allows us to test the args.
        >>> args = build_parser(['--verbose'])
        >>> print args.verbose
        True
        """
    parser = argparse.ArgumentParser(usage='$ python get-field.py',
                                     description='.',
                                     epilog='Examply use: python get-field.py')
    parser.add_argument("-v", "--verbose", dest="verbose", default=False, action="store_true")
    parser.add_argument("filename", action="append", nargs="*")
    args = parser.parse_args(args)
    return args

if __name__ == '__main__':
    args = build_parser(sys.argv[1:])

    if args.verbose == True:
        doctest.testmod(verbose=args.verbose)
    main(args)
