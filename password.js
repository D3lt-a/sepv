const scorePassword = (password) => {
    const configs = {
        minLength: 8,
        requireUpperCase: true,
        requireDigits: true,
        requireSpecial: true
    }

    const passedRules = []
    const suggestions = []

    const DigEx = /\d/
    const UppEx = /[A-Z]/
    const SpecEx = /[^A-Za-z0-9]/

    if (password.length >= configs.minLength) {
        passedRules.push('minLength')
    } else {
        suggestions.push(`Password must be ${configs.minLength} characters long.`)
    }

    if (!configs.requireUpperCase || UppEx.test(password)) {
        passedRules.push("uppercase");
    } else {
        suggestions.push("Add at least one uppercase letter.");
    }

    if (!configs.requireDigits || DigEx.test(password)) {
        passedRules.push("digits");
    } else {
        suggestions.push("Add at least one digit.");
    }

    if (!configs.requireSpecial || SpecEx.test(password)) {
        passedRules.push("special");
    } else {
        suggestions.push("Add at least one special character.");
    }
    
    const score = passedRules.length;

    return {
        score, // 0 = Too weal and 4 = strong
        passedRules,
        suggestions
    };
}

export default scorePassword;