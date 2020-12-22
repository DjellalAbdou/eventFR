import { Platform } from "react-native";

export const createFormData = (body, photo) => {
  const data = new FormData();
  console.log(body);
  data.append("imageDetails", {
    name: photo.filename,
    type: photo.type,
    uri: Platform.OS === "android" ? photo.uri : photo.uri.replace("file:/", "")
    // check for ios
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  console.log(data);
  return data;
};
