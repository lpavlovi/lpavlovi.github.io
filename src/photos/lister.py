import sys

import PIL
from PIL import Image


def _get_file_names():
    for i in xrange(1,7):
        original_img_name = "./santorini_boats/{}.JPG".format(i)
        new_img_name = "./santorini_boats/{}_s.JPG".format(i)
        yield original_img_name, new_img_name
    # with open

if __name__ == '__main__':
    print "hi"
    # _get_file_names()
    for original_img, new_img in _get_file_names():
        with Image.open(original_img) as img:
            smaller_image = img.resize((600,400), Image.ANTIALIAS)
            smaller_image.save((new_img), optimize=True, quality=95)
