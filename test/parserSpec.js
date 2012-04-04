/**
 * Missing:
 * ========
 *  
 *  * Multiple declarations
 */

var parser = require('../harmony_parser.js');

describe ('ECMAScript:Harmony module definition parser', function () {
    it('should accept null requests', function () {
        expect(parser.parse('')).toEqual([]);
    });

    it('should accept module reference', function () {
        expect(parser.parse('module M at "http://code.jquery.com/latest.js";')[0].type).toBe('module');
        expect(parser.parse('module M at "http://code.jquery.com/latest.js";')[0].decl.id).toBe('M');
        expect(parser.parse('module M at "http://code.jquery.com/latest.js";')[0].decl.path).toBe('http://code.jquery.com/latest.js');
    });
    
    it('should accept local renaming', function () {
        expect(parser.parse('module $ is c from a.b;')[0].type).toBe('module');
        expect(parser.parse('module $ is c from a.b;')[0].decl.id).toBe('$');
        expect(parser.parse('module $ is c from a.b;')[0].decl.src.id).toBe('c');
        expect(parser.parse('module $ is c from a.b;')[0].decl.src.module).toBe('a.b');
        
        expect(parser.parse('module $ is c from "http://example.com/a/b.js";')[0].type).toBe('module');
        expect(parser.parse('module $ is c from "http://example.com/a/b.js";')[0].decl.id).toBe('$');
        expect(parser.parse('module $ is c from "http://example.com/a/b.js";')[0].decl.src.id).toBe('c');
        expect(parser.parse('module $ is c from "http://example.com/a/b.js";')[0].decl.src.uri).toBe('http://example.com/a/b.js');
    });
    
    it('should accept empty module deinitions', function () {
        expect(parser.parse('module myMod {}')[0].type).toBe('module');
        expect(parser.parse('module myMod {}')[0].decl.id).toBe('myMod');
        expect(parser.parse('module myMod {}')[0].decl.expressions.length).toBe(0);
    });
    
    it('should accept module definitions with a body', function () {});
    
});

describe ('import definition parser', function () {
    it('should allow to import a single identifier from a path/URI', function () {
        expect(parser.parse('import X from "/modules/x.js";')[0].type).toBe('import');
        expect(parser.parse('import X from "/modules/x.js";')[0].decl.vars).toEqual(['X']);
        expect(parser.parse('import X from "/modules/x.js";')[0].decl.from).toEqual({type: 'uri', path: '/modules/x.js'});
    });
    
    it('should allow to import a single identifier from a module reference', function () {
        expect(parser.parse('import X from a.b.c;')[0].type).toBe('import');
        expect(parser.parse('import X from a.b.c;')[0].decl.vars).toEqual(['X']);
        expect(parser.parse('import X from a.b.c;')[0].decl.from).toEqual({type: 'module', path: 'a.b.c'});
    });
    
    it('should allow to import all the entries of a module', function () {
        expect(parser.parse('import * from a.b.c;')[0].type).toBe('import');
        expect(parser.parse('import * from a.b.c;')[0].decl.vars).toEqual(['*']);
        expect(parser.parse('import * from a.b.c;')[0].decl.from).toEqual({type: 'module', path: 'a.b.c'});
    });
    
    it('should allow to import a subset of the entries of a module', function () {
        expect(parser.parse('import {x, y, z} from "a/b/c.js";')[0].type).toBe('import');
        expect(parser.parse('import {x, y, z} from "a/b/c.js";')[0].decl.vars).toEqual(['x', 'y', 'z']);
        expect(parser.parse('import {x, y, z} from "a/b/c.js";')[0].decl.from).toEqual({type: 'uri', path: 'a/b/c.js'});
    });
    
    it('should allow to import a subset of the entries of a module, with local renaming', function () {
        expect(parser.parse('import {x: A, y: B, z: C} from a.b.c;')[0].type).toBe('import');
        expect(parser.parse('import {x: A, y: B, z: C} from a.b.c;')[0].decl.vars[0].remote).toBe('x');
        expect(parser.parse('import {x: A, y: B, z: C} from a.b.c;')[0].decl.vars[1].remote).toBe('y');
        expect(parser.parse('import {x: A, y: B, z: C} from a.b.c;')[0].decl.vars[2].remote).toBe('z');
        expect(parser.parse('import {x: A, y: B, z: C} from a.b.c;')[0].decl.vars[0].local).toBe('A');
        expect(parser.parse('import {x: A, y: B, z: C} from a.b.c;')[0].decl.vars[1].local).toBe('B');
        expect(parser.parse('import {x: A, y: B, z: C} from a.b.c;')[0].decl.vars[2].local).toBe('C');
        expect(parser.parse('import {x: A, y: B, z: C} from a.b.c;')[0].decl.from).toEqual({type: 'module', path: 'a.b.c'});
    });
});

describe ('export definition parser', function () {
    it('should allow to export a single identifier', function () {
        expect(parser.parse('export xyz;')[0].type).toBe('export');
        expect(parser.parse('export xyz;')[0].decl.length).toBe(1);
        expect(parser.parse('export xyz;')[0].decl[0]).toBe('xyz');
        expect(parser.parse('export {x};')[0].type).toBe('export');
        expect(parser.parse('export {x};')[0].decl.length).toBe(1);
        expect(parser.parse('export {xyz};')[0].decl[0]).toBe('xyz');
    });

    it('should allow to export a list of references', function () {
        expect(parser.parse('export x, y, z;')[0].type).toBe('export');
        expect(parser.parse('export x, y, z;')[0].decl.length).toBe(3);
        expect(parser.parse('export x, y, z;')[0].decl).not.toBe('xyz');
        expect(parser.parse('export x, y, z;')[0].decl).toEqual(['x', 'y', 'z']);
        
        expect(parser.parse('export {x, y, z};')[0].type).toBe('export');
        expect(parser.parse('export {x, y, t};')[0].decl.length).toBe(3);
        expect(parser.parse('export {x, y, z};')[0].decl).not.toBe('xyz');
        expect(parser.parse('export {x, y, z};')[0].decl).toEqual(['x', 'y', 'z']);
    });

    it('should allow to export *', function () {
        expect(parser.parse('export *;')[0].type).toBe('export');
        expect(parser.parse('export *;')[0].decl.length).toBe(1);
        expect(parser.parse('export *;')[0].decl[0]).toBe('*');
    });

    it('should allow to export * from a specific module', function () {
        expect(parser.parse('export * from a.b.c;')[0].type).toBe('export');
        expect(parser.parse('export * from a.b.c;')[0].decl.length).toBe(1);
        expect(parser.parse('export * from a.b.c;')[0].decl[0]).toEqual({from: 'a.b.c'});
    });

    it('should allow to export with renaming', function () {
        expect(parser.parse('export {local: remote};')[0].type).toBe('export');
        expect(parser.parse('export {local: remote};')[0].decl.length).toBe(1);
        expect(parser.parse('export {local: remote};')[0].decl[0]).toEqual({local: 'local', remote: 'remote'});
    });

    it('should allow to export multiple vars with renaming', function () {
        expect(parser.parse('export {local: remote, local2: remote2};')[0].type).toBe('export');
        expect(parser.parse('export {local: remote, local2: remote2};')[0].decl.length).toBe(2);
        expect(parser.parse('export {local: remote, local2: remote2};')[0].decl[0]).toEqual({local: 'local', remote: 'remote'});
        expect(parser.parse('export {local: remote, local2: remote2};')[0].decl[1]).toEqual({local: 'local2', remote: 'remote2'});
    });
});

describe ('export definition parser', function () {
    it('should allow a module to define imports', function () {
        expect(parser.parse('module myMod {import a from b.c;}')[0].type).toBe('module');
        expect(parser.parse('module myMod {import a from b.c;}')[0].decl.id).toBe('myMod');
        expect(parser.parse('module myMod {import a from b.c;}')[0].decl.expressions[0].type).toEqual('import');
        expect(parser.parse('module myMod {import a from b.c;}')[0].decl.expressions[0].decl.vars).toEqual(['a']);
        expect(parser.parse('module myMod {import a from b.c;}')[0].decl.expressions[0].decl.from).toEqual({type: 'module', path: 'b.c'});
    });
    it('should allow a module to be defined with multiple expressions', function () {
        expect(parser.parse('module myMod {import a from b.c; export Z;}')[0].type).toBe('module');
        expect(parser.parse('module myMod {import a from b.c; export Z;}')[0].decl.id).toBe('myMod');
        expect(parser.parse('module myMod {import a from b.c; export Z;}')[0].decl.expressions[0].type).toEqual('import');
        expect(parser.parse('module myMod {import a from b.c; export Z;}')[0].decl.expressions[0].decl.vars).toEqual(['a']);
        expect(parser.parse('module myMod {import a from b.c; export Z;}')[0].decl.expressions[0].decl.from).toEqual({type: 'module', path: 'b.c'});
        expect(parser.parse('module myMod {import a from b.c; export Z;}')[0].decl.expressions[1].type).toEqual('export');
        expect(parser.parse('module myMod {import a from b.c; export Z;}')[0].decl.expressions[1].decl).toEqual(['Z']);
    });
});

describe('parsing multiple declarations in a row', function () {
    it('should allow multiple declarations', function () {
        var decl = "import jQuery from '../libs/jquery-1.7.1.min.js';import rebound from './animation.js';export {a, b: d, c};";
        expect(parser.parse(decl).length).toEqual(3);
        expect(parser.parse(decl)[0].type).toBe('import');
        expect(parser.parse(decl)[0].decl).toEqual({vars: ['jQuery'], from: {'type' : 'uri', path: '../libs/jquery-1.7.1.min.js'}});
        expect(parser.parse(decl)[1].type).toBe('import');
        expect(parser.parse(decl)[1].decl).toEqual({vars: ['rebound'], from: {'type' : 'uri', path: './animation.js'}});
        expect(parser.parse(decl)[2].type).toBe('export');
        expect(parser.parse(decl)[2].decl).toEqual(['a', {local: 'b', remote: 'd'}, 'c']);
    });
});

describe('parsing modules with multiple declarations', function () {
    it('should be able to split bodies with multiple import from URi', function () {
        var decl = "module app {import jQuery from '../libs/jquery-1.7.1.min.js';import rebound from './animation.js';import gear from './gear.js';}";
        expect(parser.parse(decl)[0].decl).not.toBe(null);
        expect(parser.parse(decl)[0].decl.expressions.length).toBe(3);
    });
});