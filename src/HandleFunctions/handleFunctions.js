import axios, { Axios } from "axios";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
import {
  loaderEndActionCreater,
  loaderStartActionCreater,
} from "../Redux/Loader/LoaderActionCreator";
import { openSnackbar } from "../Redux/Snackbar/snackbarStore";
const uuid = require("react-uuid");
const {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} = require("firebase/storage");

export const handleSave = async (props) => {
  const { selectedTab, selectedVal, data, dispatch, userData, userSecret } =
    props;
  //   const dispatch = useDispatch();
  console.log("Save Hit!!");
  // http://localhost:8080/
  // "http://localhost:8080/" + "portfolio/save",
  try {
    dispatch(loaderStartActionCreater());
    const response = await axios.post(
      "https://dynamic-portfolio-api.herokuapp.com/ " + "portfolio/save",
      {
        data: data,
        id: "1234587678",
        module: selectedTab.toLowerCase(),
        type: selectedVal.toLowerCase(),
        secret: { userData, userSecret },
      }
    );
    console.log(response.data);
    dispatch(openSnackbar("Details Saved Successfully", "success"));
    dispatch(getDataActionCreater());
  } catch (err) {
    console.log(err.response.data.message);
    dispatch(loaderEndActionCreater());
    dispatch(openSnackbar(err.response.data.message, "error"));
  }
};

export const handleDelete = async (props) => {
  const { id, dispatch, userData, secretData } = props;
  //   const dispatch = useDispatch();
  console.log("Delete Hit!!", id);
  const secret = { userData, userSecret: secretData };
  // "http://localhost:8080/" + `portfolio/delete/${id}`,
  try {
    dispatch(loaderStartActionCreater());
    const response = await axios.put(
      "https://dynamic-portfolio-api.herokuapp.com/" + `portfolio/delete/${id}`,
      {
        secret,
      }
    );
    console.log(response.data);
    dispatch(openSnackbar("Details Successfully Deleted", "success"));

    dispatch(getDataActionCreater());
  } catch (err) {
    console.log(err.response.data.message);
    dispatch(loaderEndActionCreater());
    dispatch(openSnackbar(err.response.data.message, "error"));
  }
};

export const handleUpdate = async (props) => {
  const { id, data, dispatch, userData, secretData, userSecret } = props;
  //   const dispatch = useDispatch();
  let secret = { userData, secretData };
  console.log("Update Hit!!", props);
  // `http://localhost:8080/` + `portfolio/update/${id}`,
  try {
    dispatch(loaderStartActionCreater());
    const response = await axios.put(
      `https://dynamic-portfolio-api.herokuapp.com/` + `portfolio/update/${id}`,
      { ...data, secret: { userData, userSecret } }
    );
    // console.log(response.data);

    dispatch(getDataActionCreater());
    dispatch(openSnackbar("Details Updated Successfully", "success"));
  } catch (err) {
    console.log(err.response.data.message);
    dispatch(loaderEndActionCreater());
    dispatch(openSnackbar(err.response.data.message, "error"));
  }
};

export const saveUserDetails = async (props) => {
  const { data, dispatch } = props;
  // `http://localhost:8080/` +`user/save`,

  try {
    dispatch(loaderStartActionCreater());
    const response = await axios.post(
      `https://dynamic-portfolio-api.herokuapp.com/` + `user/save`,
      {
        data,
      }
    );
    // console.log(response.data);

    dispatch(getDataActionCreater());
  } catch (err) {
    console.log(err);
    dispatch(loaderEndActionCreater());
  }
};

export const sendMessage = async (props) => {
  const { data, dispatch } = props;

  // console.log("In handle Function!!", data);

  // `http://localhost:8080/` + `message/sendMessage`,
  try {
    dispatch(loaderStartActionCreater());

    const response = await axios.post(
      `https://dynamic-portfolio-api.herokuapp.com/` + `message/sendMessage`,
      {
        data,
      }
    );
    // console.log(response.data);

    dispatch(getDataActionCreater());
    // dispatch(loaderEndActionCreater());
    dispatch(openSnackbar("Sent Message Successfully", "success"));
  } catch (err) {
    console.log(err);
    dispatch(loaderEndActionCreater());
  }
};

export const deleteMessage = async (props) => {
  const { id, dispatch } = props;

  // console.log("In handle Function!!", data);

  // `http://localhost:8080/` + `message/deleteMessage/${id}`,
  try {
    dispatch(loaderStartActionCreater());

    const response = await axios.post(
      `https://dynamic-portfolio-api.herokuapp.com/` +
        `message/deleteMessage/${id}`
    );
    // console.log(response.data);

    dispatch(getDataActionCreater());
    // dispatch(loaderEndActionCreater());
    dispatch(openSnackbar("Sent Message Successfully", "success"));
  } catch (err) {
    console.log(err);
    dispatch(loaderEndActionCreater());
  }
};

export const getMessage = async (props) => {
  const { userData, userSecret, dispatch } = props;

  // console.log("In handle Function!!", data);
  // `http://localhost:8080/` + `message/getMessage`,
  let data = { userData, userSecret };
  try {
    dispatch(loaderStartActionCreater());
    const response = await axios.post(
      `https://dynamic-portfolio-api.herokuapp.com/` + `message/getMessage`,
      {
        data,
      }
    );
    // console.log(response.data);
    dispatch(loaderEndActionCreater());

    return response.data;
    // dispatch(getDataActionCreater());
  } catch (err) {
    console.log(err);
    dispatch(loaderEndActionCreater());
  }
};

export const fileUpload = async (props) => {
  const { file, dispatch, storeValue, setData, data, userData, userSecret } =
    props;
  //   const dispatch = useDispatch()
  // console.log(file.name)

  try {
    const storageRef = ref(getStorage(), "images/" + uuid() + "_" + file.name);
    let fileUrl = "";
    dispatch(loaderStartActionCreater());
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
          // console.log("File available at", downloadURL);
          let newData = data;
          newData[`${storeValue}`] = downloadURL;
          setData(newData);
          fileUrl = downloadURL;
          dispatch(loaderEndActionCreater());
        });
      }
    );

    //updateData
    return fileUrl;
  } catch (err) {
    dispatch(loaderEndActionCreater());
    console.log(err);
  }
};
