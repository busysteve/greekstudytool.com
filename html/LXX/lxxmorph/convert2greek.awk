{
    if( /:/ )
    {   
        if( $2 != ch )
            printf("\n\t],\n\t[ // %s %s\n", $1, $2 );
        
        if( $3 != ch )
            printf("\n\t\t],\n\t\t[ // %s %s:%s\n\t\t\t", $1, $2, $3 );
        
        vr = $3;
        ch = $2;
    }
    else if( length($0) < 1 )
    {
        # do nothing
    }
    else
    {
        word = "";
        len = length($1);
        for( i=1; i <= len; i++ )
        {
            #if( substr( $1, i+1, 1 ) == "=" ) word = word sprintf("%c",(0x0311) ); # circumflex acc.

            switch( substr( $1, i, 1 ) )
            {
                case "A": word = word "α" ; break;
                case "B": word = word "β" ; break;
                case "G": word = word ( "γ" ); break;
                case "D": word = word ( "δ" ); break;
                case "E": word = word ( "ε" ); break;
                case "Z": word = word ( "ζ" ); break;
                case "H": word = word ( "η" ); break;
                case "Q": word = word ( "θ" ); break;
                case "I": word = word ( "ι" ); break;
                case "K": word = word ( "κ" ); break;
                case "L": word = word ( "λ" ); break;
                case "M": word = word ( "μ" ); break;
                case "N": word = word ( "ν" ); break;
                case "C": word = word ( "ξ" ); break;
                case "O": word = word ( "ο" ); break;
                case "P": word = word ( "π" ); break;
                case "R": word = word ( "ρ" ); break;
                case "J": word = word ( "ς" ); break;
                case "S": if( i == len ) word = word ( "ς" ); else word = word ( "σ" ); break;
                case "T": word = word ( "τ" ); break;
                case "U": word = word ( "υ" ); break;
                case "F": word = word ( "φ" ); break;
                case "X": word = word ( "χ" ); break;
                case "Y": word = word ( "ψ" ); break;
                case "W": word = word ( "ω" ); break;
                case "/": word = word sprintf("%c",(0x0300) ); break;  # acute accent
                case "\\": word = word sprintf("%c",(0x0301) ); break; # grave accent
                case ")": word = word sprintf("%c",(0x0313) ); break;  # smooth breathing
                case "(": word = word sprintf("%c",(0x0314) ); break;  # rough breathing
                #case "=": word = word sprintf("%c",(0x0311) ); break; # circumflex acc.    
            }
        }
        printf("[\"%s\"], ", word);
    }
}
END{ print ""; }

