export type UserRole = "admin" | "manager" | "user"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
}

// Mock users for demonstration
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    avatar: "/admin-avatar.png",
  },
  {
    id: "2",
    name: "Manager User",
    email: "manager@example.com",
    role: "manager",
    avatar: "/manager-avatar.png",
  },
  {
    id: "3",
    name: "Regular User",
    email: "user@example.com",
    role: "user",
    avatar: "/diverse-user-avatars.png",
  },
]

export const authenticateUser = (email: string, password: string): User | null => {
  // Simple mock authentication
  const user = mockUsers.find((u) => u.email === email)
  if (user && password === "password") {
    return user
  }
  return null
}
