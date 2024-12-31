const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Compile the monthly financial report.",
        taskDate: "2024-01-05",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Discuss project updates and next steps.",
        taskDate: "2024-01-07",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review the new feature branch.",
        taskDate: "2024-01-08",
        category: "Development",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Customer Feedback Analysis",
        taskDescription: "Analyze customer feedback from surveys.",
        taskDate: "2024-01-06",
        category: "Customer Service",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Prepare Presentation",
        taskDescription: "Create a presentation for the upcoming conference.",
        taskDate: "2024-01-09",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Database Backup",
        taskDescription: "Ensure backup of all critical data.",
        taskDate: "2024-01-10",
        category: "IT",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Product Testing",
        taskDescription: "Test the new product before launch.",
        taskDate: "2024-01-06",
        category: "Quality Assurance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update Website",
        taskDescription: "Implement UI changes on the website.",
        taskDate: "2024-01-07",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Schedule Training",
        taskDescription: "Arrange training sessions for new employees.",
        taskDate: "2024-01-12",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Inventory Audit",
        taskDescription: "Conduct an audit of warehouse inventory.",
        taskDate: "2024-01-08",
        category: "Operations",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Create Marketing Campaign",
        taskDescription: "Design a campaign for the new product.",
        taskDate: "2024-01-09",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Security Update",
        taskDescription: "Implement the latest security patches.",
        taskDate: "2024-01-15",
        category: "IT",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Update Documentation",
        taskDescription: "Revise project documentation for clarity.",
        taskDate: "2024-01-05",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Run Diagnostics",
        taskDescription: "Run system diagnostics and generate a report.",
        taskDate: "2024-01-07",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Organize Workshop",
        taskDescription: "Plan and conduct a workshop on new tools.",
        taskDate: "2024-01-10",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = {
  id: 1,
  email: "admin@example.com",
  password: "123",
  tasks: [], // Admin tasks can be added here if needed
};

export const setLocalstorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalstorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return [employees, admin];
};
