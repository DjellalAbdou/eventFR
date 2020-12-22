import axios from "axios";
import axiosBase from "../constants/axiosInstance";
import { createFormData } from "../utils/utils";

class EventApi {
  getAllEvents(setEvents) {
    axios
      .get(axiosBase + "events")
      .then(res => {
        if (res.status === 200) {
          let events = res.data.events;
          setEvents(events);
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        alert("une erreur est survenu , veuillez reseseyer ulterierment");
      });
  }

  getLikedEvents(setEvents) {
    axios
      .get(axiosBase + "likedEvents")
      .then(res => {
        if (res.status === 200) {
          let events = res.data.events;
          setEvents(events);
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        alert("une erreur est survenu , veuillez reseseyer ulterierment");
      });
  }

  postNewEvent(object, imageObj, parent, token) {
    axios
      .post(axiosBase + "addEvent", createFormData(object, imageObj), {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json"
        },
        timeout: 0
      })
      .then(resp => {
        if (resp.status === 200) parent.goBackScreen();
        else alert("une erreur est survenu , veuillez reseseyer ulterierment");
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
        alert("une erreur est survenu , veuillez reseseyer ulterierment");
      });
  }
}

export default EventApi;
