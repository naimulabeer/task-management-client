const UserTypesSection = () => {
  const userTypes = [
    {
      id: 1,
      title: "Developers",
      description:
        "Enhance collaboration, organize tasks, and streamline project management for development teams.",
    },
    {
      id: 2,
      title: "Corporate Professionals",
      description:
        "Improve efficiency in task execution, project planning, and team communication within corporate environments.",
    },
    {
      id: 3,
      title: "Bankers",
      description:
        "Manage financial tasks, projects, and deadlines effectively with a tailored task management solution.",
    },
    // Add more user types as needed
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          Who Can Benefit from Our Website?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((userType) => (
            <div
              key={userType.id}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{userType.title}</h3>
              <p className="text-gray-600">{userType.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
