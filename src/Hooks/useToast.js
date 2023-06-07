import { toast } from "react-hot-toast";
const useToast = (message, title) => {
  if (message == "success") {
    return toast.success(title);
  }
  if (message == "error") {
    return toast.error(title);
  }
};

export default useToast;
