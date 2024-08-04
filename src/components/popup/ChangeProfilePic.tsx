import { useEdgeStore } from "@/lib/edgestore";
import { useEffect, useState } from "react";
import { SingleImageDropzone } from "../edgestore/SingleImageDropzone";
import useMutation from "@/hooks/useMutation";
import { updateUser } from "@/services/actions/client.services";
import { User } from "@/interfaces/interfaces";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { setUser } from "@/lib/features/authSlice";
import LoadingAnimation from "../LoadingAnimation";

export default function ChangeProfilePic({
  user,
  close,
}: {
  user: any;
  close: () => void;
}) {
  const [file, setFile] = useState<File>();
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const { edgestore } = useEdgeStore();

  const dispacher = useAppDispatch();

  const { data, error, isLoading, mutate } = useMutation<User>(updateUser);

  const handleSubmit = async (prifileUrl: any) => {
    await mutate({
      id: user?._id,
      data: { profilePic: prifileUrl },
    });
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      toast.success("prifile updated successful");
      dispacher(setUser(data));
    }
    if (error) {
      toast.error(error);
      console.error(error);
    }
  }, [data, error, dispacher]);

  return (
    <div className="sm:w-full">
      <div className=" flex flex-col items-center justify-center">
        <SingleImageDropzone
          width={200}
          height={200}
          value={file}
          dropzoneOptions={{
            maxSize: 1024 * 1024 * 1, // 1 MB
          }}
          onChange={(file) => {
            setFile(file);
          }}
        />

        <button
          className="bg-blue-600 w-50 text-white p-2 rounded-lg mt-2 flex items-center justify-center disabled:opacity-90 hover:opacity-95"
          disabled={loading || isLoading}
          onClick={async () => {
            if (file) {
              setLoading(true);
              const res = await edgestore.publicimages
                .upload({
                  file,
                  input: { type: "profile" },
                  onProgressChange: (progress) => {
                    setProgress(progress);
                  },
                })
                .then(async (res) => {
                  await handleSubmit(res.url);
                })
                .catch((err) => {
                  // toast.error(err);
                  console.log(err);
                })
                .finally(() => {
                  setLoading(false);
                  close();
                });
              // you can run some server action or api here
              // to add the necessary data to your database
            }
          }}
        >
          Upload
          {(loading || isLoading) && (
            <span className="ms-2">
              <LoadingAnimation />
            </span>
          )}
        </button>

        <div className="h-[6px] rounded w-full m-2 border overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded transition-all duration-150"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
