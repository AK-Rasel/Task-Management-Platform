import { useQuery } from "@tanstack/react-query";

const useTasks = () => {
  const { data: tasks, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await fetch("https://task-management-platform-server-ecru.vercel.app/tasks");
      return res.json();
    },
  });

  return [tasks, refetch];
};

export default useTasks;