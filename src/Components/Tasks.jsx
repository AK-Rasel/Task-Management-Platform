

import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useTasks from "../Hooks/useTesk";

const Tasks = () => {
  const [tasks, refetch] = useTasks();

  // const handleUpdete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!"
  // }).then(async (result) => {
  //     if (result.isConfirmed) {
  //         const res = await fetch(`https://task-management-platform-server-ecru.vercel.app/tasks/${id}`, {
  //             method: 'DELETE'
  //         });

  //         if (res) {
  //             refetch();
  //             Swal.fire({
  //                 title: "Deleted!",
  //                 text: "Your file has been deleted.",
  //                 icon: "success"
  //             });
  //         }
  //     }
  // });

  // }

  const handleDelete = async (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
        if (result.isConfirmed) {
            const res = await fetch(`https://task-management-platform-server-ecru.vercel.app/tasks/${id}`, {
                method: 'DELETE'
            });

            if (res) {
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        }
    });
};

  return (
    <div className="grid gap-2 grid-cols-3 py-8">
      <div>
        <div className="p-4 bg-[#5890ff] border rounded">
          <div>
            <h2 className="text-sm font-semibold">To do</h2>
          </div>
          {/* to do list */}
          {tasks
            ?.filter((task) => task?.status?.includes("to-do"))
            ?.map((task) => (
              <>
                <div className="bg-white rounded p-2 mt-2" key={task._id}>
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-base">{task?.title}</h2>
                    <div className="flex gap-2">
                      <MdOutlineModeEditOutline  />
                      <RiDeleteBin6Line onClick={() => handleDelete(task?._id)} />
                    </div>
                  </div>
                  <p className="text-[#5C5C5C] text-sm mt-1">
                    {task?.description}
                  </p>
                </div>
              </>
            ))}
        </div>
      </div>
      <div>
        <div className="p-4 bg-[#ffbe6f] border rounded">
          <div>
            <h2 className="text-sm font-semibold">On Going</h2>
          </div>
          {/* ongoing list */}
          {tasks
            ?.filter((task) => task?.status?.includes("ongoing"))
            ?.map((task) => (
              <>
                <div className="bg-white rounded p-2 mt-2" key={task._id}>
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-base">{task?.title}</h2>
                    <div className="flex gap-2">
                      <MdOutlineModeEditOutline />
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                  <p className="text-[#5C5C5C] text-sm mt-1">
                    {task?.description}
                  </p>
                </div>
              </>
            ))}
        </div>
      </div>
      <div>
        <div className="p-4 bg-[#3fe747] border rounded">
          <div>
            <h2 className="text-sm font-semibold">Completed</h2>
          </div>
          {/* completed list */}
          {tasks
            ?.filter((task) => task?.status?.includes("completed"))
            ?.map((task) => (
              <>
                <div className="bg-white rounded p-2 mt-2" key={task._id}>
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-base">{task?.title}</h2>
                    <div className="flex gap-2">
                      <MdOutlineModeEditOutline />
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                  <p className="text-[#5C5C5C] text-sm mt-1">
                    {task?.description}
                  </p>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
