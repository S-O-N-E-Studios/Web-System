import * as Yup from 'yup';

// Login form validation
export const loginValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required')
});

// Registration form validation
export const registerValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required')
});

// Project form validation
export const projectValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Project name must be at least 2 characters')
    .max(100, 'Project name cannot exceed 100 characters')
    .required('Project name is required'),
  description: Yup.string()
    .max(2000, 'Description cannot exceed 2000 characters')
    .required('Description is required'),
  startDate: Yup.date().nullable(),
  endDate: Yup.date().nullable().min(Yup.ref('startDate'), 'End date must be after start date')
});

// Task form validation
export const taskValidationSchema = Yup.object({
  title: Yup.string()
    .min(2, 'Title must be at least 2 characters')
    .max(200, 'Title cannot exceed 200 characters')
    .required('Title is required'),
  description: Yup.string().max(5000, 'Description cannot exceed 5000 characters'),
  priority: Yup.string().oneOf(['low', 'medium', 'high', 'critical']),
  dueDate: Yup.date().nullable(),
  estimatedHours: Yup.number().min(0, 'Hours cannot be negative').nullable()
});
