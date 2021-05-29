#file name is a joke with dutch friend luuk. dikke fiets = fat bikes
# the above comment doesnt make sense unless you knew that the file was previously called dikke_fiets.py

import glob


fat_bikes = {}

ep_num = 1


for i in range(1,32):
    a = glob.glob(r"A:\BobRoss\S" + str(i) + r"\*.ogv")

    for x in a:
        x = x[11:]

        xcomp = ""
        xsplit = list(x)

        for item in xsplit:
            if item == "\\": 
                item = "/"
            xcomp = xcomp + str(item)

        x = "http://bildsben.hopto.org:8080/" + xcomp

        print(x)

        fat_bikes[ep_num] = x
        ep_num += 1
            

open("items.dict.json", "w").write(str(fat_bikes))
