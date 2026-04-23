export const PASSWORD_MIN_LENGTH = 8

export const HELP_CONTACT = '09123456789'

export const PICKERS_SELECT_PAGE_SIZE = 100 // Use for Selects or Pickers with Filter/Pagination fetching
export const predefinedSuffixes = [
    'Jr.',
    'Sr.',
    'I',
    'II',
    'III',
    'IV',
    'Ph.D.',
    'M.D.',
    'Esq.',
] as const

export const FEEDBACK_TYPE = ['bug', 'feature', 'general'] as const

export const SEX = ['male', 'female', 'n/a'] as const

export type TSex = (typeof SEX)[number]

export const GENERAL_STATUS = [
    'pending',
    'for review',
    'verified',
    'not allowed',
] as const

export const CIVIL_STATUS = [
    'married',
    'single',
    // 'widowed',
    // 'divorced',
    'separated',
    // 'civil partnership',
] as const

export const USER_ORG_APPLICATION_STATUS = [
    'pending',
    'reported',
    'accepted',
    'ban',
] as const

export const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

export const HTTP_STATUS = {
    OK: 200,
    OK_NO_CONTENT: 204,
    CREATED: 201,
    PAYMENT_REQUIRED: 402,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    SERVER_ERROR: 500,
    TOO_MANY_REQUESTS: 429,
    FORBIDDEN: 403,
} as const