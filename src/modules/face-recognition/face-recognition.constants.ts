

export const DIRECTIONS = ['front', 'left', 'right', 'up', 'down'] as const


export const ERROR_MESSAGES = {
    ERR_USER_NOT_FOUND : 'User not found',
    ERR_INVALID_IMAGE : 'Invalid image format',
    ERR_MISSING_USER_OR_GROUP_ID : 'Missing user or group ID',
    ERR_NO_FACE : 'No face detected',
    ERR_MULTIPLE_FACES : 'Multiple faces detected',
    ERR_FAILED_TO_CREATE_USER : 'Failed to create user',
    ERR_INVALID_METADATA_FORMAT : 'Invalid metadata format'
} as const