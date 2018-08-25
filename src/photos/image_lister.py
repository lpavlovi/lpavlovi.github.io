import PIL
from PIL import Image
import os


if __name__ == '__main__':
    print "hi"
    files = os.listdir('.')
    picture_files = [f for f in files if f.endswith('JPG') and not f.startswith('small')]
    for pic in picture_files:
        print "resizing: {}".format(pic)
        with Image.open(pic) as img:
            small_image_name = 'small_' + pic
            smaller_image = img.resize((600,400), Image.ANTIALIAS)
            smaller_image.save((small_image_name), optimize=True, quality=95)
