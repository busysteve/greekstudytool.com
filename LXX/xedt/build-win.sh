#g++ -o xedt xmltag.cpp xedt.cxx -lfltk -fpermissive 


g++ -O2 -fpermissive -mwindows -D_MT -D_WIN32 -DWIN32 -o xedt xmltag.cpp xedt.cxx -I/usr/local/include -L. -L/usr/local/lib -lfltk_images -lfltk_jpeg -lfltk_png -lz -lfltk_forms -lfltk -lole32 -lgdi32 -lwsock32 -lcomctl32 -lcomdlg32 -luuid -lpthread  -static

