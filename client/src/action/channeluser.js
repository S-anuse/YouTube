import * as api from "../Api";

export const fetchallchannel = () => async (dispatch) => {
    console.log("Fetching all channels..."); // ✅ Debugging log
    try {
      const response = await fetch("/api/channels");
      const data = await response.json();
      dispatch({ type: "FETCH_ALL_CHANNELS", payload: data });
    } catch (error) {
      console.error("Error fetching channels:", error);
    }
  };
  

export const updatechaneldata=(id,updatedata)=>async(dispatch)=>{
    try {
        const {data}=await api.updatechaneldata(id,updatedata);
        dispatch({type:"UPDATE_DATA",payload:data})
    } catch (error) {
        console.log(error)
    }
}