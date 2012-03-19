/* Jison generated parser */
var harmony_parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"Program":3,"ProgramNext":4,"ProgramElement":5,"ModuleDeclaration":6,"ImportDeclaration":7,"ExportDeclaration":8,"EOF":9,"ModuleSpecifier":10,"Path":11,"String":12,"module":13,"Id":14,"at":15,"SEMICOLON":16,"IS":17,"ImportSource":18,"OPEN_BRACE":19,"ModuleBody":20,"CLOSE_BRACE":21,"from":22,"import":23,"ImportSpecifierSet":24,"WILDCARD":25,"ImportSpecifier":26,"ImportSpecifierNext":27,"COMMA":28,"COLON":29,"export":30,"ExportSpecifierSet":31,"ExportSpecifierSetNext":32,"ExportSpecifier":33,"ExportSpecifierNext":34,"ModuleElement":35,"PERIOD":36,"$accept":0,"$end":1},
terminals_: {2:"error",9:"EOF",12:"String",13:"module",14:"Id",15:"at",16:"SEMICOLON",17:"IS",19:"OPEN_BRACE",21:"CLOSE_BRACE",22:"from",23:"import",25:"WILDCARD",28:"COMMA",29:"COLON",30:"export",36:"PERIOD"},
productions_: [0,[3,1],[4,1],[4,2],[5,1],[5,1],[5,1],[5,1],[10,1],[10,1],[6,5],[6,5],[6,5],[18,1],[18,3],[7,5],[24,1],[24,1],[24,4],[27,3],[27,0],[26,1],[26,3],[8,4],[32,3],[32,0],[31,4],[31,1],[31,1],[31,3],[33,1],[33,3],[34,3],[34,0],[20,2],[20,2],[20,2],[20,0],[35,1],[35,1],[11,1],[11,3]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:return $$[$0];
break;
case 2:this.$ = $$[$0]
break;
case 3:this.$ = ($$[$0].length ? $$[$0-1].concat($$[$0]) : $$[$0-1]);
break;
case 4:this.$ = [{type: 'module', decl: $$[$0]}];
break;
case 5:this.$ = [{type: 'import', decl: $$[$0]}];
break;
case 6:this.$ = [{type: 'export', decl: $$[$0]}];
break;
case 7:this.$ = []
break;
case 8:this.$ = {type: 'module', path: $$[$0]}
break;
case 9:this.$ = {type: 'uri', path: $$[$0].replace(/^['"]/, '').replace(/['"]$/, '')}
break;
case 10:this.$ = {id: $$[$0-3], path: $$[$0-1]}
break;
case 11:this.$ = {id: $$[$0-3], src: $$[$0-1]}
break;
case 12:this.$ = {id: $$[$0-3], expressions: $$[$0-1]}
break;
case 13:this.$ = $$[$0]
break;
case 14:var out = {id: $$[$0-2]}; out[$$[$0].type] = $$[$0].path; this.$ = out;
break;
case 15:this.$ = {from: $$[$0-1], vars: $$[$0-3]};
break;
case 16:this.$ = [$$[$0]]
break;
case 17:this.$ = [$$[$0]]
break;
case 18: this.$ = [$$[$0-2]].concat($$[$0-1])
break;
case 19:this.$ = (typeof $$[$0] != 'undefined' ? [$$[$0-1]].concat($$[$0]) : $$[$0-1]);
break;
case 21:this.$ = $$[$0]
break;
case 22:this.$ = {remote: $$[$0-2], local: $$[$0]}
break;
case 23:this.$ = (typeof $$[$0-1] != 'undefined' ? $$[$0-2].concat($$[$0-1]) : $$[$0-2]);
break;
case 24:this.$ = (typeof $$[$0] != 'undefined' ? $$[$0-1].concat($$[$0]) : $$[$0-1]);
break;
case 26:this.$ = (typeof $$[$0-1] != 'undefined' ? [$$[$0-2]].concat($$[$0-1]) : [$$[$0-2]]);
break;
case 27:this.$ = [$$[$0]];
break;
case 28:this.$ = [$$[$0]];
break;
case 29:this.$ = [{from: $$[$0]}];
break;
case 30:this.$ = $$[$0];
break;
case 31:this.$ = {local: $$[$0-2], remote: $$[$0]};
break;
case 32:this.$ = (typeof $$[$0] != 'undefined' ? [$$[$0-1]].concat($$[$0]) : [$$[$0-1]]);
break;
case 34: this.$ = [{type: 'module', decl : $$[$0-1]}].concat($$[$0])
break;
case 35: this.$ = [{type: 'import', decl : $$[$0-1]}].concat($$[$0])
break;
case 36: this.$ = [{type: 'export', decl : $$[$0-1]}].concat($$[$0])
break;
case 37:this.$ = []
break;
case 38:this.$ = $$[$0]
break;
case 39:this.$ = $$[$0]
break;
case 40:this.$ = $$[$0]
break;
case 41:this.$ = $$[$0-2] + '.' + $$[$0]
break;
}
},
table: [{3:1,4:2,5:3,6:4,7:5,8:6,9:[1,7],13:[1,8],23:[1,9],30:[1,10]},{1:[3]},{1:[2,1]},{1:[2,2],4:11,5:3,6:4,7:5,8:6,9:[1,7],13:[1,8],23:[1,9],30:[1,10]},{1:[2,4],9:[2,4],13:[2,4],23:[2,4],30:[2,4]},{1:[2,5],9:[2,5],13:[2,5],23:[2,5],30:[2,5]},{1:[2,6],9:[2,6],13:[2,6],23:[2,6],30:[2,6]},{1:[2,7],9:[2,7],13:[2,7],23:[2,7],30:[2,7]},{14:[1,12]},{14:[1,14],19:[1,16],24:13,25:[1,15]},{14:[1,19],19:[1,18],25:[1,20],31:17},{1:[2,3]},{15:[1,21],17:[1,22],19:[1,23]},{22:[1,24]},{22:[2,16]},{22:[2,17]},{14:[1,26],26:25},{16:[2,25],28:[1,28],32:27},{14:[1,30],33:29},{16:[2,27],28:[2,27]},{16:[2,28],22:[1,31],28:[2,28]},{12:[1,32]},{14:[1,34],18:33},{6:36,7:37,8:38,13:[1,8],20:35,21:[2,37],23:[1,9],30:[1,10]},{10:39,11:40,12:[1,41],14:[1,42]},{21:[2,20],27:43,28:[1,44]},{21:[2,21],28:[2,21],29:[1,45]},{16:[1,46]},{14:[1,19],19:[1,18],25:[1,20],31:47},{21:[2,33],28:[1,49],34:48},{21:[2,30],28:[2,30],29:[1,50]},{11:51,14:[1,42]},{16:[1,52]},{16:[1,53]},{16:[2,13],22:[1,54]},{21:[1,55]},{6:36,7:37,8:38,13:[1,8],20:56,21:[2,37],23:[1,9],30:[1,10]},{6:36,7:37,8:38,13:[1,8],20:57,21:[2,37],23:[1,9],30:[1,10]},{6:36,7:37,8:38,13:[1,8],20:58,21:[2,37],23:[1,9],30:[1,10]},{16:[1,59]},{16:[2,8]},{16:[2,9]},{16:[2,40],21:[2,40],28:[2,40],36:[1,60]},{21:[1,61]},{14:[1,26],26:62},{11:63,14:[1,42]},{1:[2,23],9:[2,23],13:[2,23],21:[2,23],23:[2,23],30:[2,23]},{16:[2,25],28:[1,28],32:64},{21:[1,65]},{14:[1,30],33:66},{11:67,14:[1,42]},{16:[2,29],28:[2,29]},{1:[2,10],9:[2,10],13:[2,10],21:[2,10],23:[2,10],30:[2,10]},{1:[2,11],9:[2,11],13:[2,11],21:[2,11],23:[2,11],30:[2,11]},{10:68,11:40,12:[1,41],14:[1,42]},{1:[2,12],9:[2,12],13:[2,12],21:[2,12],23:[2,12],30:[2,12]},{21:[2,34]},{21:[2,35]},{21:[2,36]},{1:[2,15],9:[2,15],13:[2,15],21:[2,15],23:[2,15],30:[2,15]},{11:69,14:[1,42]},{22:[2,18]},{21:[2,20],27:70,28:[1,44]},{21:[2,22],28:[2,22]},{16:[2,24]},{16:[2,26],28:[2,26]},{21:[2,33],28:[1,49],34:71},{21:[2,31],28:[2,31]},{16:[2,14]},{16:[2,41],21:[2,41],28:[2,41]},{21:[2,19]},{21:[2,32]}],
defaultActions: {2:[2,1],11:[2,3],14:[2,16],15:[2,17],40:[2,8],41:[2,9],56:[2,34],57:[2,35],58:[2,36],61:[2,18],64:[2,24],68:[2,14],70:[2,19],71:[2,32]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + this.terminals_[symbol]+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/\n.*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
            this.yytext += match[0];
            this.match += match[0];
            this.yyleng = this.yytext.length;
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:
break;
case 1:
break;
case 2:
break;
case 3:return "SEMICOLON";
break;
case 4:return "COLON";
break;
case 5:return "OPEN_BRACE";
break;
case 6:return "CLOSE_BRACE";
break;
case 7:return "module";
break;
case 8:return "import";
break;
case 9:return "export";
break;
case 10:return 15;
break;
case 11:return 17;
break;
case 12:return 22;
break;
case 13:return "WILDCARD";
break;
case 14:return 28;
break;
case 15:return 36;
break;
case 16:return "Id";
break;
case 17:return "String";
break;
case 18:return "String";
break;
case 19:return 9;
break;
}
};
lexer.rules = [/^\n+/,/^\s+/,/^\t+/,/^;/,/^:/,/^\{/,/^\}/,/^module\b/,/^import\b/,/^export\b/,/^at\b/,/^is\b/,/^from\b/,/^\*/,/^,/,/^\./,/^[a-zA-Z_$][0-9a-zA-Z_$]*/,/^'[^\']+'/,/^"[^\"]+"/,/^$/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = harmony_parser;
exports.parse = function () { return harmony_parser.parse.apply(harmony_parser, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}