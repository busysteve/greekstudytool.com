
orig_path = './MP/';

var work_ver = 'A';

var book_index = [ 
	[ 'Matthew', 28, '01mat/', '01 Matthew/', '01Matt' ],
	[ 'Mark', 16, '02mar/', '02 Mark/', '02Mark' ],
	[ 'Luke', 24, '03luk/', '03 Luke/', '03Luke' ],
	[ 'John', 21, '04jhn/', '04 John/', '04John' ],
	[ 'Acts', 28, '05act/', '05 Acts/', '05Acts' ],
	[ 'Romans', 16, '06rom/', '06 Romans/', '06Roma' ],
	[ '1 Corinthians', 16, '07co1/', '07 1 Corinthians/', '07_1Co' ],
	[ '2 Corinthians', 13, '08co2/', '08 2 Corinthians/', '08_2Co' ],
	[ 'Galatians', 6, '09gal/', '09 Galatians/', '09Gala' ],
	[ 'Ephesians', 6, '10eph/', '10 Ephesians/', '10Ephe' ],
	[ 'Philippians', 4, '11phi/', '11 Philippians/', '11Phil' ],
	[ 'Colossians', 4, '12col/', '12 Colossians/', '12Colo' ],
	[ '1 Thessalonians', 5, '13th1/', '13 1 Thessalonians/', '13_1Th' ],
	[ '2 Thessalonians', 3, '14th2/', '14 2 Thessalonians/', '14_2Th' ],
	[ '1 Timothy', 6, '15ti1/', '15 1 Timothy/', '15_1Ti' ],
	[ '2 Timothy', 4, '16ti2/', '16 2 Timothy/', '16_2Ti' ],
	[ 'Titus', 3, '17tit/', '17 Titus/', '17Titu' ],
	[ 'Philemon', 1, '18phi/', '18 Philemon/', '18Phil' ],
	[ 'Hebrews', 13, '19heb/', '19 Hebrews/', '19Hebr' ],
	[ 'James', 5, '20jam/', '20 James/', '20Jame' ],
	[ '1 Peter', 5, '21pe1/', '21 1 Peter/', '21_1Pe' ],
	[ '2 Peter', 3, '22pe2/', '22 2 Peter/', '22_2Pe' ], 
	[ '1 John', 5, '23jo1/', '23 1 John/', '231Joh' ], 
	[ '2 John', 1, '24jo2/', '24 2 John/', '242Joh' ], 
	[ '3 John', 1,  '25jo3/', '25 3 John/', '253Joh' ],
	[ 'Jude', 1, '26jud/', '26 Jude/', '26Jude' ], 
	[ 'Revelation', 22, '27rev/', '27 Revelation/', '27Reve' ]
	];
	

var fonts = [
	'Georgia',
	'Freeserif',
	'Arial',
	'Times',
	'Courier',
	'Tahoma',
	'Helvetica'
	];

var fontsz= [ '10px', '12px', '14px', '16px', '18px', '20px', '22px' ];


var g_accent=null;
var g_background=null;
var ch = 0;
var audio_path = './mp/';
var last_clicked=null;
var g_fontstyle=true;

function playSoundMain(path, subpath, soundfile ) {

	//return playSoundMainIE(path, subpath, soundfile );

   //swfobject.embedSWF("player_mp3_mini.swf", soundfile, "200", "20", "9.0.0", "", {"mp3":"./vocab/"+soundfile}, {"bgcolor":"#085c68"} );
	var fullpath = path+subpath+soundfile;
	//var htmld = "<source src=\""+fullpath+"\" type=\"audio/mpeg\"><object class=\"playerpreview\" type=\"application/x-shockwave-flash\" data=\"./player_mp3_mini.swf\"  width=\"0\" height=\"0\" ><param name=\"FlashVars\" value=\""+fullpath+"\"/><embed href=\"./player_mp3_mini.swf\" width=\"0\" height=\"0\" flashvars=\""+fullpath+"\" /></object>";
	var htmld = "<source src=\""+fullpath+"\" type=\"audio/mpeg\" width=\"0\" height=\"0\"><object class=\"playerpreview\" type=\"application/x-shockwave-flash\" data=\"./player_mp3_mini.swf\"  width=\"0\" height=\"0\" ><param name=\"FlashVars\" value=\""+fullpath+"\"/><embed href=\"./player_mp3_mini.swf\" width=\"0\" height=\"0\" flashvars=\""+fullpath+"\" /></object></source>";
	
	var dummy = document.getElementById("dummy");
	
	dummy.innerHTML = htmld;
	dummy.load();
	dummy.play();
}


function playSoundMainIE(path, subpath, soundfile ) {
 //swfobject.embedSWF("player_mp3_mini.swf", soundfile, "200", "20", "9.0.0", "", {"mp3":"./vocab/"+soundfile}, {"bgcolor":"#085c68"} );
	var fullpath = path+subpath+soundfile;
	//var htmld = "<source src=\""+fullpath+"\" type=\"audio/mpeg\"><object class=\"playerpreview\" type=\"application/x-shockwave-flash\" data=\"./player_mp3_mini.swf\"  width=\"0\" height=\"0\" ><param name=\"FlashVars\" value=\""+fullpath+"\"/><embed href=\"./player_mp3_mini.swf\" width=\"0\" height=\"0\" flashvars=\""+fullpath+"\" /></object>";
	//var htmld = "<object class=\"playerpreview\" type=\"application/x-shockwave-flash\" data=\"./player_mp3_mini.swf\"  width=\"0\" height=\"0\" ><param name=\"FlashVars\" value=\""+fullpath+"\"/></object>";
	
	//var mp3file = document.getElementById("mp3filetoplay");
	
	//mp3file.setAttribute('value', "mp3="+fullpath );
	//dummy.load();
	var playerswf = document.getElementById("playerswf");
	playerswf.SetVariable("method:setUrl",fullpath);
	playerswf.SetVariable("method:play", "");
}


function playSoundSW(path, subpath, soundfile ) {
 
	var fullpath = path+subpath+soundfile;

 document.getElementById("mysound").innerHTML=
 "<source src=\""+fullpath+"\" type=\"audio/mpeg\"><object class=\"playerpreview\" type=\"application/x-shockwave-flash\" data=\"player_mp3_mini.swf\"  width=\"0\" height=\"0\" ><param name=\"FlashVars\" value=\"mp3="+fullpath+"\"/><embed href=\"player_mp3_mini.swf\" width=\"0\" height=\"0\" flashvars=\"mp3="+soundfile+"\" /></object>";
//document.getElementById("dummy").load();
// document.getElementById("dummy").play();
document.getElementById("mysound").load();
 document.getElementById("mysound").play();
}


function playSoundIE(path, subpath, soundfile ) {


	var fullpath = path+subpath+soundfile;
/*
	var mydoc = document.getElementById("dummy");
	
	mydoc.setAttribute

		var aud = document.createElement('OBJECT');
		aud.setAttribute('class','playerpreview');
		aud.setAttribute('type','0');
		aud.setAttribute('align','top');
		var sourc = document.createElement('SOURCE');
		sourc.setAttribute('src',fullpath);
		sourc.setAttribute('type','audio/mpeg');
		dum.applyElement( aud, 'inside' );
		aud.applyElement( sourc, 'inside' );


	.innerHTML="<source src=\""+fullpath+"\" type=\"audio/mpeg\"><object class=\"playerpreview\" type=\"application/x-shockwave-flash\" data=\"./player_mp3_mini.swf\"  width=\"0\" height=\"0\" ><param name=\"FlashVars\" value=\""+fullpath+"\"/><embed href=\"./player_mp3_mini.swf\" width=\"0\" height=\"0\" flashvars=\""+fullpath+"\" /></object>";
	document.getElementById("dummy").load();
	document.getElementById("dummy").play();

*/
	if( 	   navigator.userAgent.search('MSIE 7') >= 0 
		|| navigator.userAgent.search('MSIE 8') >= 0 
		|| navigator.userAgent.search('MSIE 9') >= 0 
		)
	{
		playSoundSW( path, subpath, soundfile );
		//playSoundMainIE( path, subpath, soundfile );
		return;

                //alert("Hi there!");

		var dum = document.getElementById("dummy3");
		dum.innerHTML = "";
		dum.innerHTML = '<bgsound scr="'+fullpath+'" autostart="true" width="0" loop="1"></bgsound>';
                return;
                var aud = document.createElement('BGSOUND');
		aud.setAttribute('scr', fullpath );
		aud.setAttribute('autostart', true );
		aud.setAttribute('width', '0' );
		aud.setAttribute('loop', '1' );
		//dum.innerHTML = "<bgsound scr=\""+fullpath+"\" autostart=\"true\" width=\"0\" loop=\"0\"></bgsound>";
                
		//dum.applyElement( aud, 'inside' );
                dum.innerHTML = aud.HTML;
	}
	else
	{
		//playSound(path, subpath, soundfile );
		//return;
		var dum = document.getElementById("dummy3");
		dum.innerHTML = "";
		//dum.innerHTML = "<audio autoplay=\"autoplay\" width=\"0\" align=top><source scr=\""+fullpath+"\" type=\"audio/mpeg\"></audio>";
		var aud = document.createElement('AUDIO');
		aud.setAttribute('autoplay','autoplay');
		aud.setAttribute('width','0');
		aud.setAttribute('align','top');
		var sourc = document.createElement('SOURCE');
		sourc.setAttribute('src',fullpath);
		sourc.setAttribute('type','audio/mpeg');
		dum.applyElement( aud, 'inside' );
		aud.applyElement( sourc, 'inside' );
	}
}


function playSound(path, subpath, soundfile ) {
	var fullpath = path+subpath+soundfile;

	var htmld = "<audio autoplay><source src=\""+fullpath+"\" type=\"audio/mpeg\" width=\"0\" height=\"0\">Your browser currently does not support this audio.</audio>";
	
	var dummy = document.getElementById("dummy");
	
	dummy.innerHTML = htmld;
	dummy.load();
	dummy.play();
}




function getCookie(c_name)
{
	if (document.cookie.length>0)
  	{
  		c_start=document.cookie.indexOf(c_name + "=");
  		if (c_start!=-1)
    		{
    			c_start=c_start + c_name.length+1;
    			c_end=document.cookie.indexOf(";",c_start);
    			if (c_end==-1) c_end=document.cookie.length;
    			return unescape(document.cookie.substring(c_start,c_end));
    		}
  	}
	return "";
}

function setCookie(c_name,value,expiredays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toUTCString());
}



function toggleAccents()
{
	if( g_accent != 1 )
		g_accent = 1;
	else
		g_accent = 0;

	setCookie('accents', g_accent, 365 );

	//alert( g_accent );
}

function toggleVersePerLine()
{
	if( g_verse_per_line != 1 )
		g_verse_per_line = 1;
	else
		g_verse_per_line = 0;

	setCookie('verse_per_line', g_verse_per_line, 365 );

	//alert( g_accent );
}

function toggleWebsterEnglishInline()
{
	if( g_eng_web_per_line != 1 )
		g_eng_web_per_line = 1;
	else
		g_eng_web_per_line = 0;

	setCookie('eng_web_per_line', g_eng_web_per_line, 365 );

	//alert( g_accent );
}

function toggleMLVEnglishInline()
{
	if( g_eng_mlv_per_line != 1 )
		g_eng_mlv_per_line = 1;
	else
		g_eng_mlv_per_line = 0;

	setCookie('eng_mlv_per_line', g_eng_mlv_per_line, 365 );

	//alert( g_accent );
}

function displayText( book, chapter)
{

	document.getElementById('book_title').innerHTML = book_index[book][0];

	if( chapter != null && chapter != "" )
		ch = chapter;
	else
		ch = '0';

	g_accent = getCookie( 'accents' );

	g_verse_per_line = getCookie( 'verse_per_line' );
	g_eng_web_per_line = getCookie( 'eng_web_per_line' );
	g_eng_mlv_per_line = getCookie( 'eng_mlv_per_line' );
	g_background = getCookie( 'background' );
	last_clicked = getCookie( 'last_clicked' );


	document.getElementById('greektext').innerHTML = "";
	//document.getElementById('greektext').innerHTML = navigator.userAgent;

	player = "";

	if( navigator.userAgent.search("Safari") >= 0 )
		player = "playSoundSW";
	else if( navigator.userAgent.search("MSIE") >= 0 )
		player = "playSound";
	else if( navigator.userAgent.search("Chrome") >= 0 )
		player = "playSound";
	else if( navigator.userAgent.search("Firefox") >= 0 )
		player = "playSound";
	else
		player = "playSound";
		
	//console.log("navigator.userAgent");
	//console.log(navigator.userAgent);

	if( accent_text[0] == null )
		return;

	var offset=0;
	for( b=0; b < book; b++ )
		offset += book_index[b][1];

	//alert( offset + ch );

	chapnum = (Number(ch)+Number(1));

	if( chapnum < 10 )
		chapnum = '0' + chapnum;

	document.getElementById('chapter').innerHTML='<i onClick="'+ player +'(\'' + orig_path + '\', \'' + book_index[g_last_book][3] + '\', \'' + book_index[g_last_book][4] + chapnum + '.mp3\')">Chapter ' + (Number(ch)+1) + '</i>';

	chp = Number(offset)+Number(ch);

	var grk_text = null;

	if( g_accent == 1 )
	{
		grk_text = accent_text;	
	}
	else
	{
		grk_text = nonaccent_text;
	}

	var ie=0;

	if( navigator.userAgent.search("MSIE") >= 0 )
		ie=1;

	var doc=document.getElementById('greektext');

	doc.innerHTML = "";
	
	var inpart="";

	for( i=0; i < grk_text[chp].length; i++ )
	{
	
		{
			if( grk_text[chp][i][2].length > 10 )
			{
				inpart += "<b style=\"color: #f04040;\" onClick=\"highlight( '" + book_index[book][0]+" "+ch+":"+grk_text[chp][i][1]+"'); " + player + "('" + audio_path + "', '" + book_index[g_last_book][2] + "', '" + grk_text[chp][i][0] + "');\">"+grk_text[chp][i][1]+"</b>";
				//doc.innerHTML += "<i id=\""+ book_index[book][0]+" "+ch+":"+grk_text[chp][i][1]+"\" > "+grk_text[chp][i][2]+" </i>";
				
				var gtext = grk_text[chp][i][2].split( ' ' );

				var len = gtext.length;
				//alert(len);
				var span = "";

				span += "<span id=\""+ book_index[book][0]+" "+ch+":"+grk_text[chp][i][1]+"\"  >";
				for( x=0; x < len; x++ )
				{
					span += "<span class=\"tooltip\" style=\"display: none;\" id=\"tt" + chp + "_" + i + "_" + x + "\" onClickXXXXX=\"clearTip(this);\"></span><i id=\"" + chp + "_" + i + "_" + x + "\" onClick=\"doTip(this,'" + ch + "','" + chp + "','" + i + "','" + x + "','" + gtext[x] + "');\" onMouseOver=\"doWord(this,'" + ch + "','" + chp + "','" + i + "','" + x + "','" + gtext[x] + "');\">" + gtext[x] + "</i> ";
					//span += "<span class=\"tooltip\" style=\"display: none;\" id=\"tt" + chp + "_" + i + "_" + x + "\" onClick=\"clearTip(this);\"></span><i id=\"" + chp + "_" + i + "_" + x + "\" onClick=\"doTip(this,'" + ch + "','" + chp + "','" + i + "','" + x + "','" + gtext[x] + "');\">" + gtext[x] + "</i> ";
				}
				span += "</span>";

				inpart += span;
			}
			else
			{
				inpart += "<b style=\"color: #999999;\"> ["+grk_text[chp][i][1]+" </b>";
				inpart += "<i style=\"color: #999999;\"> omitted</i><b style=\"color: #999999;\">] </b>";
			}	
		}

		
		if( g_eng_web_per_line == 1 )
		{	
			inpart += "<br><version style='font-size: 10px;'>Webster</version> &nbsp;" + webster[book][ch][i][0];
			//document.getElementById('greektext').innerHTML += "<br>";
		}
		
		if( g_eng_mlv_per_line == 1 )
		{	
			inpart += "<br><version style='font-size: 12px;'>MLV</version> &nbsp;" + MLV[book][ch][i][0];
			//document.getElementById('greektext').innerHTML += "<br>";
		}
		
		if( g_eng_web_per_line == 1 || g_eng_mlv_per_line == 1 )
			inpart += "<br><br>";
		
		if( g_eng_web_per_line == 0 && g_eng_mlv_per_line == 0 && g_verse_per_line == 1 )
			inpart += "<br>";
	}

	doc.innerHTML = inpart;
	
	highlight( last_clicked );

}


function showparse( px, pcode )
{
	var out = pcode + "<br/>";
	var form;
	var cas;
	var num;
	var gender;
	var suf;

	var p = pcode.split("-");

	if( p[0] == "v" )
	{
		out += "Verb";

		out += "<br/>";

		var pos = 0;
		var sec = 1;		

		// Tense

		var Tense = [ 
			["1", "C", "1st - <stx></stx>" ],
			["2", "C", "2nd - <stx></stx>" ],
			["3", "C", "3rd - <stx></stx>" ],
			["p", "B", "Present - <stx>Happening now in relation to the context or eternity.</stx>" ],
			["i", "B", "Imperfect - <stx>A past on going action.  ex: He <stxi>was healing</stxi> in the towns.</stx>" ],
			["f", "B", "Future - <stx>An action that did not occur yet in relation to the context of the writing.</stx>" ],
			["a", "B", "Aorist - <stx>An action with no writer described nature.</stx>" ],
			["r", "B", "Perfect - <stx>An action brought to completion.</stx>" ],
			["l", "B", "Pluperfect - <stx></stx>" ] 
		];


		var Voice = [ 
			["1", "C", "1st " ],
			["2", "C", "2nd " ],
			["3", "C", "3rd " ],
			["a", "B", "Active " ],
			["m", "B", "Middle " ],
			["p", "B", "Passive " ],
			["e", "B", "Either Middle or Passive " ],
			["d", "B", "Middle Deponent " ],
			["o", "B", "Passive Deponent " ], 
			["n", "B", "Middle or Passive Deponent " ], 
			["c", "B", "Contracted " ] 
		];
			

		var Mood = [ 
			["1", "C", "1st " ],
			["2", "C", "2nd " ],
			["3", "C", "3rd " ],
			["i", "B", "Indicative " ],
			["s", "B", "Subjunctive " ],
			["o", "B", "Optative " ],
			["m", "B", "iMperative " ],
			["n", "B", "iNfinitive " ],
			["p", "B", "Participle " ] 
		];

		var NumCase = [ 
			["1", "C", "1st " ],
			["2", "C", "2nd " ],
			["3", "C", "3rd " ],
			["s", "B", "Singular " ],
			["p", "B", "Plural " ],
			["n", "B", "Nominative " ],
			["v", "B", "Vocative " ],
			["g", "B", "Genitive " ],
			["d", "B", "Dative " ], 
			["a", "B", "Accusative " ], 
			["c", "B", "Contracted " ] 
		];

		var Gender = [ 
			["1", "C", "1st " ],
			["2", "C", "2nd " ],
			["3", "C", "3rd " ],
			["s", "B", "Singular " ],
			["p", "B", "Plural " ],
			["m", "B", "Masculine " ],
			["f", "B", "Feminine " ],
			["n", "B", "Neuter " ]
		];

			
		var x=0;
		var i=0;
		var tense = 0;
		var voice = 0;
		var mood = 0;

		// Tense
		for( x=0,i=0; i < Tense.length; i++ )
			if( p[sec].length > x && p[sec][x] == Tense[i][0] )
			{
				out += Tense[i][2];
				out += "<br/>";
				break;
			}
		
		// Tense
		if( Tense[i][1] == "C" )
		for( ++x,i=0; i < Tense.length; i++ )
			if( p[sec].length > x && p[sec][x] == Tense[i][0] )
			{
				out += Tense[i][2];
				out += "<br/>";
				break;
			}
		
		// Voice
		for( ++x,i=0; i < Voice.length; i++ )
			if( p[sec].length > x && p[sec][x] == Voice[i][0] )
			{
				out += Voice[i][2];
				out += "<br/>";
				break;
			}
		
		// Mood
		for( ++x,i=0; i < Mood.length; i++ )
			if( p[sec].length > x && p[sec][x] == Mood[i][0] )
			{
				out += Mood[i][2];
				out += "<br/>";
				break;
			}
		

		if( ++sec < p.length )
		{

	

			// NumCase
			for( x=0,i=0; i < NumCase.length; i++ )
				if( p[sec].length > x && p[sec][x] == NumCase[i][0] )
				{
					out += NumCase[i][2];
					out += "<br/>";
					break;
				}
		
			// NumCase
			for( ++x,i=0; i < NumCase.length; i++ )
				if( p[sec].length > x && p[sec][x] == NumCase[i][0] )
				{
					out += NumCase[i][2];
					out += "<br/>";
					break;
				}
		
			// Gender
			for( ++x,i=0; i < Gender.length; i++ )
				if( p[sec].length > x && p[sec][x] == Gender[i][0] )
				{
					out += Gender[i][2];
					out += "<br/>";
					break;
				}
		
			// Gender
			for( ++x,i=0; i < Gender.length; i++ )
				if( p[sec].length > x && p[sec][x] == Gender[i][0] )
				{
					out += Gender[i][2];
					out += "<br/>";
					break;
				}
		
		}

		var person = 0;
		var num = 0;
		var gender = 0;
		
	}
	else
	{

		switch( p[0] )
		{
		case "adv":
			out += "ADVerb or adverb and particle combined";
			break;
		case "conj":
			out += "CONJunction or conjunctive particle";
			break;
		case "cond":
			out += "CONDitional particle or conjunction";
			break;
		case "prt":
			out += "PaRTicle, disjunctive particle";
			break;
		case "prep":
			out += "PREPosition";
			break;
		case "inj":
			out += "INterJection";
			break;
		case "aram":
			out += "ARAMaic transliterated word (indeclinable)";
			break;
		case "heb":
			out += "HEBrew transliterated word (indeclinable)";
			break;
		}


		switch( p[0] )
		{
		case "n":
			out += "Noun";
			break;
		case "a":
			out += "Adjective";
			break;
		case "r":
			out += "Relative pronoun";
			break;
		case "c":
			out += "reCiprocal pronoun";
			break;
		case "d":
			out += "Demonstrative pronoun";
			break;
		case "t":
			out += "definite arTicle";
			break;
		case "k":
			out += "correlative pronoun";
			break;
		case "i":
			out += "Interrogative pronoun";
			break;
		case "x":
			out += "indefinite pronoun";
			break;
		case "q":
			out += "correlative or interrogative pronoun";
			break;
		case "f":
			out += "Reflexive pronoun";
			break;
		case "s":
			out += "Possessive pronoun";
			break;
		case "p":
			out += "Personal pronoun";
			break;
		
		}

		out += "<br/>";

		switch( p[1] )
		{
		case "pri":
			out += "Indeclinable Proper Noun";
			break;
		case "nui":
			out += "Indeclinable Numeral";
			break;
		case "li":
			out += "Indeclinable Letter";
			break;
		case "oi":
			out += "Indeclinable Noun";
			break;
		}


		
		switch( p[1][0] )
		{
		case "n":
			out += "Nominative - <stx>The nominative case is the noun the sentence is about.  The one doing the verb.  It is like the subject in English.</stx>";
			break;
		case "v":
			out += "Vocative - <stx>The noun being addressed or spoken to.</stx>";
			break;
		case "g":
			out += "Genitive - <stx>The noun that has or owns the noun in the nominative case.</stx>";
			break;
		case "d":
			out += "Dative - <stx>The noun a verb is acting for, towards or against.</stx>";
			break;
		case "a":
			//out += "Accusative";
			out += "Accusative - <stx>The word in the accusitive case is the noun that is being effected by the noun in the nominative case.</stx>";
			break;
		}

		out += "<br/>";

		switch( p[1][1] )
		{
		case "s":
			out += "Singular";
			break;
		case "p":
			out += "Plural";
			break;
		}


		out += "<br/>";

		switch( p[1][2] )
		{
		case "m":
			out += "Masculine";
			break;
		case "f":
			out += "Feminine";
			break;
		case "n":
			out += "Neuter";
			break;
		}

		out += "<br/>";

		switch( p[2] )
		{
		case "s":
			out += "Superlative";
			break;
		case "c":
			out += "Comparative";
			break;
		case "abb":
			out += "ABBreviated form";
			break;
		case "i":
			out += "Interrogative";
			break;
		case "n":
			out += "Negative";
			break;
		case "k":
			out += "Kai (CONJ)";
			break;
		case "att":
			out += "ATTic Greek form";
			break;
		}
	}

	out += "<br/>";

	px.innerHTML = out;
	//alert( "Hello There this is a test" );
}

function defineSyntax(obj)
{
	obj.innerHTML="hello";
}

function syntaxTip( obj, label, content )
{
	var tip = obj;

	tip.innerHTML = "<span class=\"tooltip\" style=\"position: absolute; display: inline;\"><b>"+label+"</b><br></br>"+content+"</span>";
	//tip.setAttribute( 'style', 'position: absolute; display: inline;' );
} 

function doTip(tx, ch, chp, vers, word )
{
	var tip = document.getElementById('tt'+tx.id);

	//tip.setAttribute( 'style', 'position: absolute; top: 20px; left: 20px; opacity: 1; display: inline;' );
	tip.setAttribute( 'style', 'position: absolute; display: inline;' );
	tip.innerHTML = lookUpStrongs( ch, chp, vers, word, 1 );

	//window.setInterval(function(){ clearTip(tip); }, 15000 );

	
	//	<span id="sptooltip" class="tooltip" style="position: relative; top: 20px; left: 20px; opacity: 1; display: inline;">This is a tool tip test</span>	
}

function clearTip(tipx)
{
	var tip = document.getElementById(tipx.id);

	//tip.setAttribute( 'style', 'position: absolute; top: 20px; left: 20px; opacity: 1; display: inline;' );
	tip.setAttribute( 'style', 'display: none;' );
	tip.innerText = "";
}



function lookUpStrongs( ch, chp, vers, word, showparselink )
{
	var sen = nonaccent_text[chp][vers][2];
	var wrds= sen.split(' ');
	var wrd=wrds[word];

	//return nonaccent_text[chp][vers];
	//return strongs[chp][vers];
	//return wrds;
	//return strongs[0][chp];

	wrdr = wrd.replace('-', '' ).replace(':', '' ).replace(':', '' ).replace(';', '' ).replace('.', '' ).replace(',', '' ).replace('[', '' ).replace(']', '' ).replace('(', '' ).replace(')', '' ).replace(' ', '' ).replace(' ', '' ).replace('<', '' ).replace('>', '' );


	var ln = strongs[chp][vers].length
	for( i=0; i < ln; i++ )
	{
		if( i >= ln ) break; 
		if( strongs[chp][vers][i][0] == wrdr )
			if( showparselink == 1 )
				return "<i onclick='clearTip(this.parentNode);'>close</i><br/>" + strongs[chp][vers][i][0] + " | " + strongs[chp][vers][i][1] + " | <i onclick='showparse(this, \"" + strongs[chp][vers][i][2] + "\");'>"+ strongs[chp][vers][i][2] +"</i> | " + "\n" + strongs_list[strongs[chp][vers][i][1]];
			else
				return "\n" + strongs[chp][vers][i] + "\n" + strongs_list[strongs[chp][vers][i][1]];
	}

	vers_hold = vers;

	if( vers < strongs[chp][vers].length )
	{
		vers++;
	
		for( i=0; i < strongs[chp][vers].length; i++ )
		{
		if( strongs[chp][vers][i][0] == wrdr )
			if( showparselink == 1 )
				return "<i onclick='clearTip(this.parentNode);'>close</i><br/>" + strongs[chp][vers][i][0] + " | " + strongs[chp][vers][i][1] + " | <i onclick='showparse(this, \"" + strongs[chp][vers][i][2] + "\");'>"+ strongs[chp][vers][i][2] +"</i> | " + "\n" + strongs_list[strongs[chp][vers][i][1]];
			else
				return "\n" + strongs[chp][vers][i] + "\n" + strongs_list[strongs[chp][vers][i][1]];
		}
	}

	vers = vers_hold;

	if( vers > 0 )
	{
		vers--;
	
		for( i=0; i < strongs[chp][vers].length; i++ )
		{
		if( strongs[chp][vers][i][0] == wrdr )
			if( showparselink == 1 )
				return "<i onclick='clearTip(this.parentNode);'>close</i><br/>" + strongs[chp][vers][i][0] + " | " + strongs[chp][vers][i][1] + " | <i onclick='showparse(this, \"" + strongs[chp][vers][i][2] + "\");'>"+ strongs[chp][vers][i][2] +"</i> | " + "\n" + strongs_list[strongs[chp][vers][i][1]];
			else
				return "\n" + strongs[chp][vers][i] + "\n" + strongs_list[strongs[chp][vers][i][1]];
		}
	}

	//----------------------------------------------------------------------------------------;
/*	vers = vers_hold;
	var ln = strongs[chp][vers].length
	for( i=0; i < ln; i++ )
	{
		if( i >= ln ) break; 
		if( compareWords( strongs[chp][vers][i][0], wrdr) <= 2 )
			if( showparselink == 1 )
				return "<i onclick='clearTip(this.parentNode);'>close</i><br/>" + strongs[chp][vers][i][0] + " | " + strongs[chp][vers][i][1] + " | <i onclick='showparse(this, \"" + strongs[chp][vers][i][2] + "\");'>"+ strongs[chp][vers][i][2] +"</i> | " + "\n" + strongs_list[strongs[chp][vers][i][1]];
			else
				return "\n" + strongs[chp][vers][i] + "\n" + strongs_list[strongs[chp][vers][i][1]];
	}


	if( vers < strongs[chp][vers].length )
	{
		vers++;
	
		for( i=0; i < strongs[chp][vers].length; i++ )
		{
		if( compareWords( strongs[chp][vers][i][0], wrdr) <= 2 )
			if( showparselink == 1 )
				return "<i onclick='clearTip(this.parentNode);'>close</i><br/>" + strongs[chp][vers][i][0] + " | " + strongs[chp][vers][i][1] + " | <i onclick='showparse(this, \"" + strongs[chp][vers][i][2] + "\");'>"+ strongs[chp][vers][i][2] +"</i> | " + "\n" + strongs_list[strongs[chp][vers][i][1]];
			else
				return "\n" + strongs[chp][vers][i] + "\n" + strongs_list[strongs[chp][vers][i][1]];
		}
	}

	vers = vers_hold;

	if( vers > 0 )
	{
		vers--;
	
		for( i=0; i < strongs[chp][vers].length; i++ )
		{
		if( compareWords( strongs[chp][vers][i][0], wrdr) <= 2 )
			if( showparselink == 1 )
				return "<i onclick='clearTip(this.parentNode);'>close</i><br/>" + strongs[chp][vers][i][0] + " | " + strongs[chp][vers][i][1] + " | <i onclick='showparse(this, \"" + strongs[chp][vers][i][2] + "\");'>"+ strongs[chp][vers][i][2] +"</i> | " + "\n" + strongs_list[strongs[chp][vers][i][1]];
			else
				return "\n" + strongs[chp][vers][i] + "\n" + strongs_list[strongs[chp][vers][i][1]];
		}
	}
*/
	//alert( wrdr + " - " + " - " + strongs[chp][vers] );
	console.log( "not found" + "(" + ch + ")" + chp + ":" + vers + word + " " + showparselink );	
	return "<i onclick='clearTip(this.parentNode);'>close</i><br/>" + "'" + wrdr + "'" + " - not found";
}

function compareWords( w1, w2 )
{
	var x = w1; 
	var y = w2;
	
	if( w1.length < w2.length )
	{
		x = w2; 
		y = w1;
	}

	var r=0;

	for( i=0,j=0; i<x.length && j<y.length; )
	{
		if( x[i] == y[j] )
		{
			i++; j++;
			continue;
		}
		else if( x[i+1] == y[j] )
		{
			i++;
			r++;
			continue;
		}
		else if( x[i] == y[j+1] )
		{
			j++;
			r++;
			continue;
		}
		else
		{
			i++; j++;
			r++;
			continue;
		}
	}

	//alert( r + " " + w1 + " " + w2 );

	return r;
		
}

function doWord(val, ch, chap, vers, idx, word)
{
	var str = word + " - ";
	str += lookUpStrongs( ch, chap, vers, idx, word ); 
	//val.setAttribute('title', word );
	val.setAttribute('title', str );
}

function highlight(verseid)
{


	if( last_clicked != null )
	{
		var lv = document.getElementById(last_clicked);
		if( lv != null )
			lv.style.background="none";
	}
	
	var v = document.getElementById(verseid);
	if( v != null )
	{
		v.style.background="yellow";
		last_clicked=verseid;
		setCookie( 'last_clicked', verseid, 365 );
	}
		
}

function toggleBG()
{
	if( g_background != 1 )
	{
		g_background = 1;
		document.getElementById('myTable').style.background="#f0dca0";
	}
	else
	{
		g_background = 0;
		document.getElementById('myTable').style.background="#f0dca0 url('../paper_background.png')";
	}

	setCookie('background', g_background, 365 );


	//alert( g_accent );
}



function buildSelect()
{
	chap = getCookie( 'chapt' );
	book = getCookie( 'book' );
	fnt = getCookie( 'font' );
	fntz = getCookie( 'fontsize' );
	g_fontstyle = getCookie( 'fontstyle' );

	if( chap == '' || chap == null )
		chap=0;

	if( fnt == '' || fnt == null )
		fnt=0;

	if( fntz == '' || fntz == null )
		fntz=4;

	if( book == '' || book == null )
		book=0;

	var v = document.getElementById('chaps'); 
	v.innerHTML = "";

	var fn = document.getElementById('fontfam');
	fn.innerHTML = "";

	var fnz = document.getElementById('fontsiz');
	fnz.innerHTML = "";

	var itl = document.getElementById('cbitalic');
	itl.innerHTML = "";	
	
	  var i = document.createElement('OPTION');
	  i.value = 'italic';
	  i.text  = 'Italic';
	  if( g_fontstyle == 'true' || g_fontstyle == 'italic' )
	    i.selected = 1;
	  itl.add(i);
	
	  var n = document.createElement('OPTION');
	  n.value = 'normal';
	  n.text  = 'Normal';
	  if( g_fontstyle == 'false' || g_fontstyle == 'normal' )
	    n.selected = 1;
	  itl.add(n);
	
	
	
	//fnst.checked = (g_fontstyle == 'true' || g_fontstyle == 'italic' ) ? " selected='yes' "

	var bk = document.getElementById('books');
	bk.innerHTML = "";

	for( b=0; b < book_index.length; b++ )
	{	
		//bk.innerHTML += "<option value='"+b+"' " + ((book == b) ? "selected='yes' " : "") + ">" + book_index[b][0] + "</option>";
		var o = document.createElement('OPTION');
		o.value = b;
		o.text = book_index[b][0];
		if( b == book )
			o.selected = 1;
		bk.add(o);
	}

	for( c=0; c < book_index[book][1]; c++ )
	{
		var e = document.createElement('OPTION');
		e.value = c;
		e.text = "Chapter "+(c+1);
		if( c == chap )
			e.selected = 1;
		v.add(e);

	}

	for( f=0; f < fonts.length; f++ )
	{
		var r = document.createElement('OPTION');
		r.value = f;
		r.text = fonts[f];
		if( f == fnt )
			r.selected = 1;
		fn.add(r);

	}

	for( f=0; f < fontsz.length; f++ )
	{
		var r = document.createElement('OPTION');
		r.value = f;
		r.text = fontsz[f];
		if( f == fntz )
			r.selected = 1;
		fnz.add(r);

	}

	

	ch = chap;

	//alert( chap );
}

var g_last_book="";

function display(val)
{
	var v = document.getElementById('chaps');
	var b = document.getElementById('books');
	var vers = document.getElementById('verse');

	vers.innerHTML = "";
	
	setCookie( 'book', b.value, 365 );
	opt = b.options;
	sel = b.selectedIndex;
	if( sel >= 0 )
	{
		itm = opt.item(sel);
	
		if( itm.value != g_last_book )
		{
			g_last_book = b.options[b.selectedIndex].value;
		
			v.selectedIndex=0;
		
			setCookie( 'chapt', '0', 365 );
			ch = 0;

			v.innerHTML = "";

	
			for( c=0; c < book_index[g_last_book][1]; c++ )
			{
				var e = document.createElement('OPTION');
				e.value = c;
				e.text = "Chapter "+(c+1);
				if( c == Number(ch) )
					e.selected = 1;
				v.add(e);

			}
		}

		else
		{
			//v.selectedIndex=ch;
			ch = v.options[v.selectedIndex].value;
			setCookie( 'chapt', ch, 365 );
			v.innerHTML = "";
			for( c=0; c < book_index[g_last_book][1]; c++ )
			{
				var e = document.createElement('OPTION');
				e.value = c;
				e.text = "Chapter "+(c+1);
				if( c == Number(ch) )
					e.selected = 1;
				v.add(e);

			}
		}

		g_background = getCookie( 'background' );

		if( g_background == 0 )
		{
			document.getElementById('myTable').style.background="#f0dca0 url('../paper_background.png')";
		}
		else
		{
			document.getElementById('myTable').style.background="#f0dca0";
		}

		displayText( g_last_book, ch);	
	}
	
}


function setfont()
{
	//alert(val.options[val.selectedIndex].text);
	//document.getElementById('greektext').style.i. = "i{font-family:'"+val.options[val.selectedIndex].text+",serif'; color:#000000; font-size: 18px;} b{ font-family:'Tahoma'; color:#000000; font-size: 20px;} i:hover{color:#F00000;}";
	var val = document.getElementById('fontfam');
	var fnz = document.getElementById('fontsiz');
	var itl = document.getElementById('cbitalic');

	if(document.all) {  
		document.styleSheets[1]['rules'][0].style.fontSize = fnz.options[fnz.selectedIndex].text;  
		document.styleSheets[1]['rules'][0].style.fontFamily = val.options[val.selectedIndex].text;  
		document.styleSheets[1]['rules'][0].style.fontStyle = ((itl.options[itl.selectedIndex].text));  
	}  
	else
	{
		document.styleSheets[1]['cssRules'][0].style.fontSize = fnz.options[fnz.selectedIndex].text;
		document.styleSheets[1]['cssRules'][0].style.fontFamily = val.options[val.selectedIndex].text;
		document.styleSheets[1]['cssRules'][0].style.fontStyle = (itl.options[itl.selectedIndex].text);
	}
	  
	//alert(itl.checked); 

	setCookie('font', val.options[val.selectedIndex].value, 365 );
	setCookie('fontsize', fnz.options[fnz.selectedIndex].value, 365 );
	setCookie('fontstyle', itl.options[itl.selectedIndex].value, 365 );

	//alert(val.options[val.selectedIndex].text);
	
}



function checkCookies()
{
	g_accent = getCookie( 'accents' );
	g_last_book = getCookie( 'book' );
	ch = getCookie( 'chapt' );
	g_font = getCookie('font');
	g_fontstyle = getCookie('fontstyle');
	g_fontsize = getCookie('fontsize');
}


var workscript_loaded = 1;
