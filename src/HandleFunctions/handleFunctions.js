import axios from "axios";
import storage from "../firebase/firebase_config";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
const uuid = require("react-uuid");
const {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} = require("firebase/storage");
export const handleSave = async (props) => {
  const { selectedTab, selectedVal, data, dispatch } = props;
  //   const dispatch = useDispatch();
  console.log("Save Hit!!");
  try {
    const response = await axios.post(
      "https://dynamic-portfolio-api.herokuapp.com/portfolio/save",
      {
        data: data,
        id: "1234587678",
        module: selectedTab.toLowerCase(),
        type: selectedVal.toLowerCase(),
      }
    );
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
    const response = await axios.delete(
      `https://dynamic-portfolio-api.herokuapp.com/portfolio/delete/${id}`
    );
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
    const response = await axios.put(
      `https://dynamic-portfolio-api.herokuapp.com/portfolio/update/${id}`,
      data
    );
    console.log(response.data);

    dispatch(getDataActionCreater());
  } catch (err) {
    console.log(err);
  }
};

export const fileUpload = async (props) => {
  const { file, dispatch, storeValue, setData, data } = props;
  //   const dispatch = useDispatch()
  try {
    const storageRef = ref(storage, "images/" + uuid() + "_" + name);
    let fileUrl = "";

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          let newData = data;
          newData[`${storeValue}`] = downloadURL;
          setData(newData);
          fileUrl = downloadURL;
        });
      }
    );

    //updateData
    return fileUrl;
  } catch (err) {
    console.log(err);
  }
};
