const getEnv = (key: string, defaultValue?: string): string => {
  const val = process.env[key] || defaultValue

  if (val === undefined) {
    return `Environment variable ${key} is not set`
  }

  return val
}

export const PORT = getEnv('PORT', '6969')
export const CLIENT_URL = getEnv('CLIENT_URL')
export const NODE_ENV = getEnv('NODE_ENV', 'development')
