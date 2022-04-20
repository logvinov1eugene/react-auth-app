export function emailValidation (value) {
  if (!value) return { isValid: false, errorLabel: '' }
  const emailPattern = /.+@.+\..+/i
  if (!emailPattern.test(value)) return { isValid: false, errorLabel: 'Email should contain "@" and "."' }
  return { isValid: true }
}

export function existValidation (value) {
  if (!value) return { isValid: false, errorLabel: 'Input can not be empty' }
  return { isValid: true }
}
