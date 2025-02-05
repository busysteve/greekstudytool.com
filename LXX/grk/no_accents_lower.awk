BEGIN {
	weepers="αβγδεζηθικλμνξοπρσςτυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΣΤΥΦΧΨΩ []{};:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'\"-0123456789";
	keepers="αβγδεζηθικλμνξοπρσςτυφχψωαβγδεζηθικλμνξοπρσςτυφχψω []{};:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'\"-0123456789";
	
}
{
	klen = length(keepers);
	len  = length($0);

	for( i=1; i <= len; i++ )
	{
		for( u=1; u<= klen; u++ )
		{
			if( substr($0, i, 1 ) == substr(weepers, u, 1 ) )
			{
				printf( "%s", substr(keepers, u, 1 ) );	
				break;
			}
		}

	}			
	printf( "\n" );
}

