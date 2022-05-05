import axios from "axios";
import { getDataActionCreater } from "../Redux/getDataActionCreater";

export const handleSave = async (props) => {
  const { selectedTab, selectedVal, data, dispatch } = props;
  //   const dispatch = useDispatch();
  console.log("Save Hit!!");
  try {
    const response = await axios.post("/portfolio/save", {
      data: data,
      id: "1234587678",
      module: selectedTab.toLowerCase(),
      type: selectedVal.toLowerCase(),
    });
    console.log(response.data);

    dispatch(getDataActionCreater());
  } catch (err) {
    console.log(err);
  }
};

export const handleDelete = async (props) => {
  const { id, dispatch } = props;
  //   const dispatch = useDispatch();
  console.log("Delete Hit!!", id);
  try {
    const response = await axios.delete(`/portfolio/delete/${id}`);
    console.log(response.data);

    dispatch(getDataActionCreater());
  } catch (err) {
    console.log(err);
  }
};

export const handleUpdate = async (props) => {
  const { id, data, dispatch } = props;
  //   const dispatch = useDispatch();
  console.log("Update Hit!!", id);
  try {
    const response = await axios.put(`/portfolio/update/${id}`, data);
    console.log(response.data);

    dispatch(getDataActionCreater());
  } catch (err) {
    console.log(err);
  }
};
