export interface RegisterData {
  fullName: string
  email: string
  password: string
  phone: string
  dni: string
  birthdate: string
  role: string
  specialty?: string
  clinic?: string
  notifications?: boolean
}

export interface User {
  id: string
  role: string
  name: string
}

export const loginRequest = async (_email: string, _password: string) => {
  // TODO: connect to API
  void _email
  void _password
  return { token: 'fake-token', role: 'admin' }
}

export const register = async (data: RegisterData): Promise<User> => {
  const users = JSON.parse(localStorage.getItem('users') || '[]') as RegisterData[]
  if (users.some((u) => u.email === data.email)) {
    throw new Error('Email ya registrado')
  }

  const user = { ...data, id: Date.now().toString() }
  users.push(user)
  localStorage.setItem('users', JSON.stringify(users))

  return { id: user.id, role: data.role, name: data.fullName }
}
