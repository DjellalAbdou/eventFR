import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";

export const chooseFile = async context => {
  const { status: permissionResult } = await Permission.getAsync(
    Permission.CAMERA_ROLL
  );

  //let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
  console.log(permissionResult);
  if (permissionResult !== "granted") {
    //alert("permission pour acceder au galerie et requise!");
    const { status } = await Permission.askAsync(Permission.CAMERA_ROLL);
    if (status !== "granted") {
      alert("vous devez ajouter la permission d'acceder au galerie");
      return;
    } else {
      chooseImage(context);
      return;
    }
  }

  chooseImage(context);
};

const chooseImage = async context => {
  let pickerResult = await ImagePicker.launchImageLibraryAsync({
    base64: false
  });
  console.log(pickerResult);
  if (pickerResult.cancelled === true) return;

  context.setState({
    imageDetails: pickerResult
  });
};
