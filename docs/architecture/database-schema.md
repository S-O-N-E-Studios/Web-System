# Database Schema

## Collections

### Users
```
{
  _id: ObjectId,
  name: String (required, max 50),
  email: String (required, unique),
  password: String (required, hashed, min 6),
  role: String (enum: admin, project_manager, developer, viewer),
  avatar: String (nullable),
  isActive: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

### Projects
```
{
  _id: ObjectId,
  name: String (required, max 100),
  description: String (required, max 2000),
  status: String (enum: planning, active, on_hold, completed, cancelled),
  owner: ObjectId (ref: User),
  members: [{
    user: ObjectId (ref: User),
    role: String (enum: lead, member, viewer)
  }],
  startDate: Date,
  endDate: Date,
  location: {
    type: String (Point),
    coordinates: [Number] (2dsphere index),
    formattedAddress: String,
    city: String,
    country: String
  },
  tags: [String],
  isArchived: Boolean (default: false),
  createdAt: Date,
  updatedAt: Date
}
```

### Tasks
```
{
  _id: ObjectId,
  title: String (required, max 200),
  description: String (max 5000),
  status: String (enum: todo, in_progress, in_review, done),
  priority: String (enum: low, medium, high, critical),
  project: ObjectId (ref: Project, required),
  sprint: ObjectId (ref: Sprint),
  assignee: ObjectId (ref: User),
  reporter: ObjectId (ref: User, required),
  dueDate: Date,
  estimatedHours: Number,
  loggedHours: Number (default: 0),
  tags: [String],
  attachments: [ObjectId (ref: File)],
  order: Number (default: 0),
  createdAt: Date,
  updatedAt: Date
}
```

### Sprints
```
{
  _id: ObjectId,
  name: String (required, max 100),
  goal: String (max 500),
  project: ObjectId (ref: Project, required),
  status: String (enum: planning, active, completed),
  startDate: Date (required),
  endDate: Date (required),
  order: Number (default: 0),
  createdAt: Date,
  updatedAt: Date
}
```

### Files
```
{
  _id: ObjectId,
  originalName: String (required),
  fileName: String (required),
  mimeType: String (required),
  size: Number (required),
  storageUrl: String (required),
  storageKey: String (required),
  uploadedBy: ObjectId (ref: User, required),
  project: ObjectId (ref: Project),
  task: ObjectId (ref: Task),
  createdAt: Date,
  updatedAt: Date
}
```

## Indexes

- `Users.email`: Unique index
- `Tasks.project + Tasks.status`: Compound index
- `Tasks.assignee + Tasks.status`: Compound index
- `Projects.location.coordinates`: 2dsphere index

## Relationships

- User -> Projects (one-to-many as owner)
- Project -> Tasks (one-to-many)
- Project -> Sprints (one-to-many)
- Sprint -> Tasks (one-to-many)
- User -> Tasks (one-to-many as assignee)
- Task -> Files (one-to-many)
