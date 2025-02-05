BEGIN { FS="',"; }
{

	if( NF < 3 )
	{
		print $0;
	}
	else
	{
		printf( "%s',%s',", $1, $2 );
		
		split( $3, vws, " " );

		w=1;
		l=length(vws)
		for( w=1; w < l; w++ )
		{
			if( w == 1 )
				printf( "%s ',", vws[w] );
			else if( w == (l-1) )
				printf( "'%s ' ", vws[w] );
			else
				printf( "'%s ',", vws[w] );
		}
		printf( "],\n" );
	}
}
