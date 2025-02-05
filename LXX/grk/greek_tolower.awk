BEGIN {
	upper="ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΣΤΥΦΧΨΩ []";
	lower="αβγδεζηθικλμνξοπρσςτυφχψω []";
}
{

	for( i=1; i <= length($0); i++ )
	{
		for( u=1; u<= length(upper); u++ )
		{
			if( substr($0, i, 1 ) == substr(upper, u, 1 ) )
			{
				if( nongreek == 1 )
					printf( " " );

				if( substr( lower, u, 1) == "σ" || substr( lower, u, 1) == "ς" )
				{
					if( substr($0, i+1, 1 ) == " " || i == length($0) ) 
						printf( "ς" );
					else
						printf( "σ" );
				}
				else
				{
					printf( "%s", substr( lower, u, 1) );	
				}

				nongreek = 0;	

				break;
			}
		}
		if( u > length(upper) )
		{
			if( nongreek == 0 )
			{
				printf( "\n" );
				nongreek = 1;
			}

			printf( "%s", substr($0, i, 1 ) );
		}
	}			
	printf( "\n" );
}

