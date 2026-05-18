import { validateEmail, scorePassword } from './index.js'

const testEmail = 'IvBZ2@example.com'
const testPassword = 'SecurePass123!'

const EmailResult = validateEmail(testEmail)
const PasswordResult = scorePassword(testPassword)

console.log('Email Results: ' ,EmailResult)
console.log('Password Results: ' ,PasswordResult)