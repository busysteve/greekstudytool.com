BEGIN {
	book_num = 0;
	book = "";
	printf("\t//[");
}
{
	if( $1 != book )
	{
		book_num++;
		book = $1;
		ch = "";
	}	

	split( $2, ver, ":" );

	if( ver[1] != ch )
	{
		ch = ver[1];
		print( "\t],\n\t[\n" );		
	}


	printf( "\t\t['%02d%s_%02d-%02d.mp3', '%s', '%s'],\n", book_num, $1, ver[1], ver[2], var[1], substr($0, index($0, $3), length($0) )  ); 
}
END{
	printf( "\t],\n" );
}

