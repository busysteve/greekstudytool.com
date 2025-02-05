
var book_index = [ 
	    [ 'Genesis', 50, './lxx-xmls/01.Gen.mlxx.xml', './lxx-brenton/01.gen.lxx.brenton.xml' ],
	    [ 'Exodus', 40, './lxx-xmls/03.Exod.mlxx.xml', './lxx-brenton/02.exo.lxx.brenton.xml' ],
	    [ 'Leviticus', 27, './lxx-xmls/04.Lev.mlxx.xml', './lxx-brenton/03.lev.lxx.brenton.xml' ],
	    [ 'Numbers', 36, './lxx-xmls/05.Num.mlxx.xml', './lxx-brenton/04.num.lxx.brenton.xml' ],
	    [ 'Deuteronomy', 34, './lxx-xmls/06.Deut.mlxx.xml', './lxx-brenton/05.deu.lxx.brenton.xml' ]
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

var fontsz= [ '16px', '18px', '20px', '24px', '32px', '38px', '44px', '52px' ];


var g_accent=null;
var g_background=null;
var ch = 0;
var audio_path = './mp_full/';
var last_clicked=null;
var g_fontstyle=true;



var xmlhttp, xmlDoc, engXmlDoc;

function lxx_open_book( lxx_book_to_open )
{
    if( lxx_book_to_open == null )
        lxx_book_to_open = g_last_book;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", book_index[lxx_book_to_open][2], false);
    xmlhttp.send();

    xmlDoc = xmlhttp.responseXML;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", book_index[lxx_book_to_open][3], false);
    xmlhttp.send();

    engXmlDoc = xmlhttp.responseXML;

}

var lxx_chapter = 0;

function lxx_print( chapter )
{
    if( chapter != null )
        lxx_chapter = chapter;

    var node;

    var books = xmlDoc.getElementsByTagName("book");
    var engBooks = engXmlDoc.getElementsByTagName("book");

    var output_html = 'greektext';

    var chps = books[0].getElementsByTagName('ch');
    var engChps = engBooks[0].getElementsByTagName('c');

    //var verses;// = chps[lxx_chapter].getElementsByTagName('ver');

    var output = "";

    document.getElementById('book_title').innerHTML = book_index[g_last_book][0];

    // nodes = verses[15].childNodes;

    //for( c=0; c < chps.length; c++ )
    c=lxx_chapter;
    {
        document.getElementById(output_html).innerHTML = "";

        if(chps[c].nodeType !== Node.TEXT_NODE)
        {
            var verses = chps[c].childNodes;
            var engVerses = engChps[c].childNodes;

            for( v=0; v < verses.length; v++ )
            {

                if(verses[v].nodeType !== Node.TEXT_NODE)
                {

                    //document.getElementById(output_html).innerHTML += '<b>'+ verses[v].attributes[0].nodeValue +'</b> ';
                    output += '<vn>'+ verses[v].attributes[0].nodeValue +'</vn> ';

                    words = verses[v].childNodes;

                    for( w=0; w < words.length; w++ )
                    {

                        if(words[w].nodeType !== Node.TEXT_NODE)
                        {

                            //document.getElementById(output_html).innerHTML += 
                            //node + '<br>';
                            output += '<is title="'+ doStrongsWord( words[w].childNodes[4].textContent )+'">' + words[w].childNodes[0].textContent + '</is> ';  
                            //output += '<is title="'+ doWord( words[w].childNodes[4].textContent )+'">' + words[w].childNodes[0].textContent + '</is> ';  
                            //output += '<br><eng>' +  + '</eng>'; 
                        }

                    }

                    try
                    {
                        output += '<br><eng>' + engVerses[v].textContent + '</eng><br><br>'; 
                    } catch( e )
                    {
					    console.log( e );
					    console.log( 'ordinal='+v+ ' | verse=' + verses[v].attributes[0].nodeValue  );
                    }
                }

            }
            

        }

        document.getElementById(output_html).innerHTML = output;
    }
}



function display(val)
{
	var v = document.getElementById('chaps');
	var b = document.getElementById('books');
	var vers = document.getElementById('verse');

	vers.innerHTML = "";
	
	setCookie( 'lxx_book', b.value, 365 );
	opt = b.options;
	sel = b.selectedIndex;

	document.getElementById('book_title').innerHTML = book_index[sel][0];

	if( sel >= 0 )
	{
		itm = opt.item(sel);
	
		if( itm.value != g_last_book )
		{
			g_last_book = b.options[b.selectedIndex].value;
		
			v.selectedIndex=0;
		
			setCookie( 'lxx_chapt', '0', 365 );
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

            lxx_open_book( sel );
		}

		else
		{
			//v.selectedIndex=ch;
			ch = v.options[v.selectedIndex].value;
			setCookie( 'lxx_chapt', ch, 365 );
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


		lxx_print(ch);	
	}

	g_background = getCookie( 'lxx_background' );

	if( g_background == 0 )
	{
		document.getElementById('myTable').style.background="#f0dca0 url('./lxx_paper_background.png')";
	}
	else
	{
		document.getElementById('myTable').style.background="#f0dca0";
	}
	
}



function buildSelect()
{
	var chap = getCookie( 'lxx_chapt' );
	var book = getCookie( 'lxx_book' );
	var fnt = getCookie( 'lxx_font' );
	var fntz = getCookie( 'lxx_fontsize' );
	g_fontstyle = getCookie( 'lxx_fontstyle' );

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



var lxx_workscript_loaded = 1;

