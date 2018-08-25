import PIL
from PIL import Image


if __name__ == '__main__':
    print "hi"
    with Image.open('church.JPG') as img:
        smaller_image = img.resize((600,400), Image.ANTIALIAS)
        smaller_image.save(('small_church.PNG'), optimize=True, quality=95)
