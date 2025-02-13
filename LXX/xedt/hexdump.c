
#include <stdio.h>
#include <string.h>
#include <stdlib.h>


static unsigned char a2e[256] = {
        0,  1,  2,  3, 55, 45, 46, 47, 22,  5, 37, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 60, 61, 50, 38, 24, 25, 63, 39, 28, 29, 30, 31,
        64, 79,127,123, 91,108, 80,125, 77, 93, 92, 78,107, 96, 75, 97,
        240,241,242,243,244,245,246,247,248,249,122, 94, 76,126,110,111,
        124,193,194,195,196,197,198,199,200,201,209,210,211,212,213,214,
        215,216,217,226,227,228,229,230,231,232,233, 74,224, 90, 95,109,
        121,129,130,131,132,133,134,135,136,137,145,146,147,148,149,150,
        151,152,153,162,163,164,165,166,167,168,169,192,106,208,161,  7,
        32, 33, 34, 35, 36, 21,  6, 23, 40, 41, 42, 43, 44,  9, 10, 27,
        48, 49, 26, 51, 52, 53, 54,  8, 56, 57, 58, 59,  4, 20, 62,225,
        65, 66, 67, 68, 69, 70, 71, 72, 73, 81, 82, 83, 84, 85, 86, 87,
        88, 89, 98, 99,100,101,102,103,104,105,112,113,114,115,116,117,
        118,119,120,128,138,139,140,141,142,143,144,154,155,156,157,158,
        159,160,170,171,172,173,174,175,176,177,178,179,180,181,182,183,
        184,185,186,187,188,189,190,191,202,203,204,205,206,207,218,219,
        220,221,222,223,234,235,236,237,238,239,250,251,252,253,254,255
};

static unsigned char e2a[256] = {
        0,  1,  2,  3,156,  9,134,127,151,141,142, 11, 12, 13, 14, 15,
        16, 17, 18, 19,157,133,  8,135, 24, 25,146,143, 28, 29, 30, 31,
        128,129,130,131,132, 10, 23, 27,136,137,138,139,140,  5,  6,  7,
        144,145, 22,147,148,149,150,  4,152,153,154,155, 20, 21,158, 26,
        32,160,161,162,163,164,165,166,167,168, 91, 46, 60, 40, 43, 33,
        38,169,170,171,172,173,174,175,176,177, 93, 36, 42, 41, 59, 94,
        45, 47,178,179,180,181,182,183,184,185,124, 44, 37, 95, 62, 63,
        186,187,188,189,190,191,192,193,194, 96, 58, 35, 64, 39, 61, 34,
        195, 97, 98, 99,100,101,102,103,104,105,196,197,198,199,200,201,
        202,106,107,108,109,110,111,112,113,114,203,204,205,206,207,208,
        209,126,115,116,117,118,119,120,121,122,210,211,212,213,214,215,
        216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,
        123, 65, 66, 67, 68, 69, 70, 71, 72, 73,232,233,234,235,236,237,
        125, 74, 75, 76, 77, 78, 79, 80, 81, 82,238,239,240,241,242,243,
        92,159, 83, 84, 85, 86, 87, 88, 89, 90,244,245,246,247,248,249,
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57,250,251,252,253,254,255
};

#define USAGE \
"usage: hexdump -i=stdin | -f [filename] \n" \
"               -c [columns=16 default] \n" \
"              [-a=ascii(default)|-e=ebcdic]\n" \
"               -b=[bad char check]\n" \
"               -n=[show line numbers]\n"

#define LINE_CHUNK 1024

int binary_hexdump( FILE* in, FILE* out, int cols, int ascii ) 
{
   unsigned char* buf = NULL;
   char* outbuf = NULL;
        int i=0, j=0, bufread=0, count=0;

   buf = (unsigned char*)malloc( cols+1 );
   outbuf = (unsigned char*)malloc( 13+(3*cols)+3+cols+1 );
   
   memset( buf, 0, cols );

   for( ; bufread = fread( buf, 1, cols, in ); count += cols )
   {
      sprintf( outbuf, "0x%08x : ", count );
  
      for( i=0; i < bufread; i++ )
         sprintf( &outbuf[13+i*3], "%02x ", buf[i] );
   
      for( j=0; j < bufread; j++ )
      {
         if( ascii == 1 )
         {
            if( buf[j] >= 32 && buf[j] <= 126 )
               outbuf[13+i*3+j] = buf[j];
            else
               outbuf[13+i*3+j] = '.';
         }
         else
         {
            if( e2a[buf[j]] >= 32 && e2a[buf[j]] <= 126 )
               outbuf[13+i*3+j] = e2a[buf[j]];
            else
               outbuf[13+i*3+j] = '.';
         }
      }

      outbuf[13+i*3+j] = '\0';
   
      printf( "%s\n", outbuf );
   }
      
   free(buf);
   free(outbuf);

        return 0;
}

int bad_char_dump( FILE* in, FILE* out, int ascii, int showline )
{
   int i=0, j=0, bufread=0, count=0, cols=16, badchar, linecount=0;

        char buf[LINE_CHUNK];
        char outbuf[LINE_CHUNK];
        int places[LINE_CHUNK]; 
 
   memset( buf, 0, cols );

        

        while( !feof(in) )
        {
                linecount++;
                badchar=0;


           for( count = 0; 
                        (bufread = fread( &buf[count], 1, 1, in )) > 0 && 
                        count < (sizeof(buf)-1) && 
                        buf[count] != '\n'; 
                                count += bufread )
                {
                        if( ascii != 0 )
                        {
                                places[count] = ((buf[count] >= 32 && buf[count] <= 126) /* || buf[count] == '\t' */) ? -1 : buf[count]; 
                        }
                        else
                        {
                                places[count] = ((e2a[buf[count]] >= 32 && e2a[buf[count]] <= 126) /* || e2a[buf[count]] == '\t' */) ? -1 : e2a[buf[count]];
                        }

                        if( places[count] > -1 ) 
                                badchar = 1;

                        outbuf[count] = (places[count] == -1) ? buf[count] : ' ';
                } 

                if( count >= (LINE_CHUNK-1) )
                {
                        fprintf( stderr, "Too many chars on one line\n" );
                        return 3;
                }

                if( badchar == 1 )
                {
                        if( showline != 0 )
                                fprintf( out, "%d:\n", linecount );

                        outbuf[count] = '\0';

                        fprintf( out, "%s\n", outbuf );

                        for( j=0; j < count; j++ )
                        {
                                if( buf[j] == '\t' )
                                {
                                        fprintf( out, "%c", '\t'); 
                                }
                                else
                                {
                                        fprintf( out, "%c", (places[j] >= 0) ? '^' : ' ');
                                }
                        }

                        fprintf( out, "\n" );
                }
        }

        return 0;
}



int main( int argc, char **argv )
{
        FILE* fp = stdin;
        unsigned char* buf = NULL;
        char* outbuf = NULL;
        int i=0, j=0, bufread=0, count=0, cols=16, verify_chars=0, ret=0, showlinenum=0;
        int arg=1;
        int ascii = 1;  /* ascii by default */

        if( argc <= 1 )
        {
                printf( USAGE );
                return 1;
        }

        /* go through args */
        for( i=arg; i < argc; i++ )
        {
                if( !strcmp( argv[i], "-c" ) )
                {
                        if( argc > i )
                                cols = atoi(argv[++i]);
                }
                else if( !strcmp( argv[i], "-e" ) )
                {
                        ascii = 0;
                }
                else if( !strcmp( argv[i], "-n" ) )
                {
                        showlinenum = 1;
                }
                else if( !strcmp( argv[i], "-i" ) )
                {
                        fp = stdin;
                }
                else if( !strcmp( argv[i], "-b" ) )
                {
                        verify_chars = 1;
                }
                else if( !strcmp( argv[i], "-f" ) )
                {
                        if( argc > i )
                        {
                                fp = fopen( argv[++i], "rb" );
                        } else {
                                printf("The -f option requires a filename\n");
                                return 2;
                        }

                        if( fp == NULL )
                        {
                                printf("Could not open file\n");
                                return 1;
                        }
                }
                else if( argv[i][0] != '-' )
                {
                        printf( USAGE );
                        return 1;
                }
                else
                {
                        printf( USAGE );
                        return 1;
                }
        }


        if( verify_chars != 0 )
        {
                ret = bad_char_dump( fp, stdout, ascii, showlinenum );
        }
        else
        {
                ret = binary_hexdump( fp, stdout, cols, ascii );
        }


        if( fp != NULL && fp != stdin )
                fclose( fp );

        return ret;
}


