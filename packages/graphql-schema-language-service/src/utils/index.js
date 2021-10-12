export function dedentString(string) {
    const trimmedStr = string
        .replace(/^\n*/m, '') //  remove leading newline
        .replace(/[ \t\n]*$/, ''); // remove trailing spaces and tabs
    // fixes indentation by removing leading spaces and tabs from each line
    let indent = '';
    for (const char of trimmedStr) {
        if (char !== ' ' && char !== '\t') {
            break;
        }
        indent += char;
    }
    return trimmedStr.replace(RegExp('^' + indent, 'mg'), ''); // remove indent
}
export function dedent(strings, ...values) {
    let str = strings[0];
    for (let i = 1; i < strings.length; ++i) {
        str += values[i - 1] + strings[i]; // interpolation
    }
    return dedentString(str);
}
export function typeNode(name, loc) {
    return {
        kind: 'NamedType',
        name: nameNode(name, loc),
        loc
    };
}
export function nameNode(name, loc) {
    return {
        kind: 'Name',
        value: name,
        loc
    };
}
export function fieldNode(name, type, loc) {
    return fieldNodeWithArgs(name, type, [], loc);
}
export function fieldNodeWithArgs(name, type, args, loc) {
    return {
        kind: 'FieldDefinition',
        description: undefined,
        name,
        arguments: args,
        type,
        directives: [],
        loc
    };
}
