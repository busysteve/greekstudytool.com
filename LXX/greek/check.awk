BEGIN { brk = 0; qt = 0; }
{
	if( /^\t\t\[/ || /^\t\t\]/ )
	{
		#brk=0; qt=0;

		len=length($0);
		for( i=1; i<=len; i++ )
		{
			if( substr( $0, i, 1 ) == "\"" )
			{
				qt = qt ? 0 : 1;
				next;
			}

			if( qt == 0 )
			{
				if( substr( $0, i, 1 ) == "[" )
				{
					if( brk == 1 )
						print FNR " -- [ bracket issue";
					brk = 1;
				}
				if( substr( $0, i, 1 ) == "]" )
				{
					if( brk == 0 )
						print FNR " -- ] bracket issue";
					brk = 0;
				}
			}
		}

		if( qt == 1 )
			print FNR " -- quote issue";
	}
}
#19652 -- [ bracket issue
#20701 -- [ bracket issue
#20922 -- [ bracket issue
#22533 -- ] bracket issue
#23200 -- [ bracket issue

