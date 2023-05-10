import { createRef, useEffect } from 'react'
import Input from './styles'

type TextInputProps = {
  value?: string,
  autoFocus?: boolean,
  disabled?: boolean,
  placeholder?: string,
  hasError?: boolean,
  onChangeText?(text: string): void,
}

export default function TextInput({
  value,
  autoFocus,
  disabled,
  placeholder,
  hasError,
  onChangeText,
}: TextInputProps) {
  const inputRef = createRef<HTMLTextAreaElement>()

  useEffect(() => {
    if (!disabled && autoFocus) {
      inputRef.current?.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Input
      value={value}
      ref={inputRef}
      disabled={disabled}
      placeholder={disabled ? '' : placeholder}
      hasError={hasError}
      onChange={(e) => onChangeText && onChangeText(e.target.value)}
    />
  )
}

TextInput.defaultProps = {
  value: '',
  autoFocus: false,
  disabled: false,
  placeholder: '',
  hasError: false,
  onChangeText: undefined,
}
