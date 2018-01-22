#!/usr/bin/env python
# Filter the lines we want in a CSV
import sys
import argparse
import re
import string
import doctest
import csv

def main(args):
    """ 
        """
    fn = 'zillow-zipcode-median.csv'
    zips = []
    fields = []
    with open(fn, 'rU') as f:
        reader = csv.DictReader(f, delimiter=',')
        for line in reader:
            # line looks something like
            # {'City': 'Apache Junction', 'Metro': 'Phoenix', 'SizeRank': '12674', 'CountyName': 'Pinal', 'RegionID': '94815', 'State': 'AZ', '2017-01': '117', 'RegionName': '85220'}
            print line
  

def build_parser(args):
    """ This method allows us to test the args.
        >>> args = build_parser(['--verbose'])
        >>> print args.verbose
        True
        """
    parser = argparse.ArgumentParser(usage='$ python munger.py',
                                     description='.',
                                     epilog='Examply use: python munger.py')
    parser.add_argument("-v", "--verbose", dest="verbose", default=False, action="store_true")
    args = parser.parse_args(args)
    return args

if __name__ == '__main__':
    args = build_parser(sys.argv[1:])

    if args.verbose == True:
        doctest.testmod(verbose=args.verbose)
    main(args)
