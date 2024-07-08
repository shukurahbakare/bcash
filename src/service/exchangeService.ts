import axiosInstance from "@/lib/axiosInstance";

export const fetchExchangeDonice = async() => {
    try {
    const response = await axiosInstance.get("/sendingReceivingCountryList")
        console.log('response',response)
    } catch (error) {
        console.log('errort',error)
    }
 
}

