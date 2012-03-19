/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 *
 * @version
 * 2.1.364 (October 15 2009)
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 *
 * @license
 * This file is part of SyntaxHighlighter.
 * 
 * SyntaxHighlighter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * SyntaxHighlighter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with SyntaxHighlighter.  If not, see <http://www.gnu.org/copyleft/lesser.html>.
 */
SyntaxHighlighter.brushes.Web2py = function()
{
	// Contributed by Gheorghe Milas and Ahmad Sherif
	
	var keywords =  'and assert break class continue def del elif else ' +
					'except exec finally for from global if import in is ' +
					'lambda not or pass print raise return try yield while' +
					'request response session service redirect cache' +
					'{{ }} extend include';

	var funcs = '__import__ abs all any apply basestring bin bool buffer callable ' +
				'chr classmethod cmp coerce compile complex delattr dict dir ' +
				'divmod enumerate eval execfile file filter float format frozenset ' +
				'getattr globals hasattr hash help hex id input int intern ' +
				'isinstance issubclass iter len list locals long map max min next ' +
				'object oct open ord pow print property range raw_input reduce ' +
				'reload repr reversed round set setattr slice sorted staticmethod ' +
				'str sum super tuple type type unichr unicode vars xrange zip' +
				'URL DAL Field Cookie T A B BEAUTIFY BODY BR BUTTON CENTER CAT' + 
				'CODE COL COLGROUP DIV EM EMBED FIELDSET FORM H1 H2 H3 H4 H5 H6' + 
				'HEAD HR HTML I IFRAME IMG INPUT LABEL LEGEND LI LINK OL UL MARKMIN' + 
				'MENU META OBJECT ON OPTION P PRE SCRIPT OPTGROUP SELECT SPAN STYLE' + 
				'TABLE TAG TD TEXTAREA TH THEAD TBODY TFOOT TITLE TR TT URL XHTML XML' + 
				'xmlescape embed64 CLEANUP CRYPT IS_ALPHANUMERIC IS_DATE_IN_RANGE IS_DATE' + 
				'IS_DATETIME_IN_RANGE IS_DATETIME IS_DECIMAL_IN_RANGE IS_EMAIL IS_EMPTY_OR' + 
				'IS_EXPR IS_FLOAT_IN_RANGE IS_IMAGE IS_IN_DB IS_IN_SET IS_INT_IN_RANGE IS_IPV4' + 
				'IS_LENGTH IS_LIST_OF IS_LOWER IS_MATCH IS_EQUAL_TO IS_NOT_EMPTY IS_NOT_IN_DB IS_NULL_OR'+ 
				'IS_SLUG IS_STRONG IS_TIME IS_UPLOAD_FILENAME IS_UPPER IS_URL SQLFORM SQLTABLE LOAD' + 
				'ajax db crud mail service auth prettydate plugins AppConfig';

	var special =  'None True False self cls class_ current define_table commit rollback render process accepted accepts';

	this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },
			{ regex: /^\s*@\w+/gm, 										css: 'decorator' },
			{ regex: /(['\"]{3})([^\1])*?\1/gm, 						css: 'comments' },
			{ regex: /"(?!")(?:\.|\\\"|[^\""\n])*"/gm, 					css: 'string' },
			{ regex: /'(?!')(?:\.|(\\\')|[^\''\n])*'/gm, 				css: 'string' },
			{ regex: /\+|\-|\*|\/|\%|=|==/gm, 							css: 'keyword' },
			{ regex: /\b\d+\.?\w*/g, 									css: 'value' },
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),		css: 'functions' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'), 		css: 'keyword' },
			{ regex: new RegExp(this.getKeywords(special), 'gm'), 		css: 'color1' }
			];
			
	this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};

SyntaxHighlighter.brushes.Web2py.prototype  = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Web2py.aliases    = ['w2p', 'web2py'];
