const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validateEmail = (email) => {
    const reasons = []

    if (!email || !EMAIL_REGEX.test(email)){
        reasons.push('Invalide Email Format.')
        return {
            valid: false,
            reasons
        }
    }

    return {
        valid: reasons.length === 0,
        reasons
    }
}

export default validateEmail;