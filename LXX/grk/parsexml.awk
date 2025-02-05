BEGIN { FS=" |<|=|\""; }
{
	if( /cnumber/ )
		if( NF == 10 )
			if( chp != $9 )
			{
				if( $9 == "1" )
					printf( "\n\t[ //%s - %s\n", booknum, $9 );
				else
					printf( "\n\t\t]\n\t],\n\t[ //%s - %s\n", booknum, $9 );
				chp=$9;
				
			}

	if( /vnumber/ )
		if( NF == 12 )
		{
			if( ver != $11 )
			{
				if( $11 == "1" )
					printf( "\n\t\t[ //%s - %s:%s\n\t\t\t", booknum, chp, $11 );
				else
					printf( "\n\t\t],\n\t\t[ //%s - %s:%s\n\t\t\t", booknum, chp, $11 );
				ver=$11;
			}
		}

	if( /gr str/ )
	{
		if( NF > 20 )
			print  "\n" FNR " : " NF "********************************";
		#printf( "\t\t\t" );

		#for( i=1; i <= NF; i++ )
		printf( "['%s','%s','%s'], ", substr($10, 2, length($10)), $5,$9 );
		#printf( "\n" );
	}

	if( /bnumber/ )
	{
		booknum=($7)-39;
	}
}
