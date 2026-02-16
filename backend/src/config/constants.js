module.exports = {
  // User roles
  ROLES: {
    ADMIN: 'admin',
    PROJECT_MANAGER: 'project_manager',
    DEVELOPER: 'developer',
    VIEWER: 'viewer'
  },

  // Project statuses
  PROJECT_STATUS: {
    PLANNING: 'planning',
    ACTIVE: 'active',
    ON_HOLD: 'on_hold',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled'
  },

  // Task statuses
  TASK_STATUS: {
    TODO: 'todo',
    IN_PROGRESS: 'in_progress',
    IN_REVIEW: 'in_review',
    DONE: 'done'
  },

  // Task priorities
  TASK_PRIORITY: {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
    CRITICAL: 'critical'
  },

  // Sprint statuses
  SPRINT_STATUS: {
    PLANNING: 'planning',
    ACTIVE: 'active',
    COMPLETED: 'completed'
  },

  // Pagination defaults
  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100
  },

  // File upload limits
  FILE_UPLOAD: {
    MAX_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'text/plain']
  }
};
