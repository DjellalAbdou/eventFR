import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

const vacation = {
  key: "vacation",
  color: "#FF4D4D",
  selectedDotColor: "#FF4D4D"
};
const massage = {
  key: "massage",
  color: "#76EF4D",
  selectedDotColor: "#76EF4D"
};

class CalendarComp extends Component {
  state = {
    selected: undefined,
    markedDates: {
      "2020-02-09": {
        dots: [vacation, massage],
        selected: false,
        selectedColor: "#76EF4D"
      }
    }
  };

  onDayPress = day => {
    console.log(this.state.markedDates);
    let daye = day.dateString;
    console.log(daye);
    let selected = true;
    let _markedDay = {};
    if (this.state.markedDates[daye]) {
      console.log("hahaha");
      selected = !this.state.markedDates[daye].selected;
      _markedDay = this.state.markedDates[daye];

      console.log(selected);
      _markedDay = { ..._markedDay, selected, selectedColor: "#76EF4D" };

      const updatedMarkedDates = {
        ...this.state.markedDates,
        ...{ [daye]: _markedDay }
      };

      this.setState({ markedDates: updatedMarkedDates });
    }
  };

  getLastMonth = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = "01";
    if (!month) {
      year -= 1;
      month = "12";
    }
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    let lastMonth = year + "-" + month + "-" + day;
    //console.log(lastMonth);
    return lastMonth;
  };

  render() {
    return (
      <View style={styles.calendarContainer}>
        <Calendar
          // Initially visible month. Default = Date()
          //current={"2012-03-01"}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={this.getLastMonth()}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          //maxDate={"2012-05-30"}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={this.onDayPress}
          // Handler which gets executed on day long press. Default = undefined
          /* onDayLongPress={day => {
            console.log("selected long day", day);
          }} */
          style={styles.calendar}
          markingType={"multi-dot"}
          markedDates={this.state.markedDates}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={"yyyy MM"}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log("month changed", month);
          }}
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "#ffffff",
            textSectionTitleColor: "#062743",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#00adf5",
            dayTextColor: "#062743",
            textDisabledColor: "#d9e1e8",
            dotColor: "#00adf5",
            selectedDotColor: "#ffffff",
            arrowColor: "#76EF4D",
            disabledArrowColor: "#d9e1e8",
            monthTextColor: "#062743",
            indicatorColor: "#062743",

            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          //renderArrow={direction => <Arrow />}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={false}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={false}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          // Disable left arrow. Default = false
          disableArrowLeft={false}
          // Disable right arrow. Default = false
          disableArrowRight={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendarContainer: {
    marginTop: 20
  }
});

export default CalendarComp;
