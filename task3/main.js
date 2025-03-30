function isCorrectBracketSeq(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

// Примеры использования:
console.log(isCorrectBracketSeq("()"));      // true [[5]]
console.log(isCorrectBracketSeq("()[]{}"));  // true [[2]]
console.log(isCorrectBracketSeq("{(]}"));      // false [[3]]
console.log(isCorrectBracketSeq("([)]{}"));    // false [[5]]
console.log(isCorrectBracketSeq("({[]})"));    // true [[4]]