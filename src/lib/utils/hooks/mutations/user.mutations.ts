import { useMutation } from "@tanstack/react-query";
import API from "../../api/axios";
import toast from "react-hot-toast";

// update user 
export const useUpdateUser = () => {
    return useMutation({
        mutationFn: async (credential: any) => {
            const res = await API.patch("/user/update", credential)
            return res.data
        },
        onError: (error) => {
            console.error("reset password failed:", error);
        }
    })
}
