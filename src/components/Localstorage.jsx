const employees = [
  {
    id: 1,
    firstName: "John",
    email: "employee1@example.com",
    password: "1234",
    tasks: [
      {
        completed: false,
        failed: false,
        active: true,
        new: true,
        title: "Task 1",
        description: "Complete the quarterly report.",
        date: "2025-03-25",
        category: "Reports",
      },
      {
        completed: true,
        failed: false,
        active: false,
        new: false,
        title: "Task 2",
        description: "Prepare presentation for the meeting.",
        date: "2025-03-20",
        category: "Presentations",
      },
    ],
    taskCount: {
      active: 1,
      completed: 1,
      failed: 0,
      new: 1,
    },
  },
  {
    id: 2,
    firstName: "Jane",
    email: "employee2@example.com",
    password: "1234",
    tasks: [
      {
        completed: false,
        failed: false,
        active: true,
        new: true,
        title: "Task 1",
        description: "Review the project proposal.",
        date: "2025-03-25",
        category: "Proposals",
      },
    ],
    taskCount: {
      active: 1,
      completed: 0,
      failed: 0,
      new: 1,
    },
  },
  {
    id: 3,
    firstName: "Alice",
    email: "employee3@example.com",
    password: "1234",
    tasks: [
      {
        completed: true,
        failed: false,
        active: false,
        new: false,
        title: "Task 1",
        description: "Finalize the marketing strategy.",
        date: "2025-03-22",
        category: "Marketing",
      },
      {
        completed: false,
        failed: false,
        active: true,
        new: true,
        title: "Task 2",
        description: "Update the website content.",
        date: "2025-03-25",
        category: "Web Development",
      },
    ],
    taskCount: {
      active: 1,
      completed: 1,
      failed: 0,
      new: 1,
    },
  },
  {
    id: 4,
    firstName: "Bob",
    email: "employee4@example.com",
    password: "1234",
    tasks: [
      {
        completed: false,
        failed: true,
        active: false,
        new: false,
        title: "Task 1",
        description: "Organize the team meeting.",
        date: "2025-03-20",
        category: "Meetings",
      },
      {
        completed: true,
        failed: false,
        active: false,
        new: false,
        title: "Task 2",
        description: "Prepare budget for next quarter.",
        date: "2025-03-18",
        category: "Finance",
      },
    ],
    taskCount: {
      active: 0,
      completed: 1,
      failed: 1,
      new: 0,
    },
  },
  {
    id: 5,
    firstName: "Eve",
    email: "employee5@example.com",
    password: "1234",
    tasks: [
      {
        completed: true,
        failed: false,
        active: false,
        new: false,
        title: "Task 1",
        description: "Update inventory list.",
        date: "2025-03-23",
        category: "Inventory",
      },
    ],
    taskCount: {
      active: 0,
      completed: 1,
      failed: 0,
      new: 0,
    },
  },
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "1234",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employee, admin };
};
