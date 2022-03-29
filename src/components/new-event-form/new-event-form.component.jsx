import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./../common/custom-button/custom-button.component";
import InputError from "./../common/input-error/input-error.component";
import InputFeild from "./../common/input-feild/input-feild.component";
import "./new-event-form.styles.scss";
import validateEvent from "./new-event.validate";

class NewEventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      time: "",
      date: "",
      error: {},
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, time, date } = this.state;

    const { createNewEvent } = this.props;

    const result = validateEvent({
      name,
      description,
      time,
      date,
    });

    if (result.error) {
      return result.error.details.map((err) => {
        return this.setState({
          error: {
            [err.path]: err.message,
          },
        });
      });
    }

    const timedifference = new Date().getTimezoneOffset() * 60 * 1000;
    const timeInputs = new Date(`${date}T${time}:00.000Z`).getTime();

    const timeOfEvent = new Date(timeInputs + timedifference);

    console.log(timeOfEvent);

    if (Date.now() > timeOfEvent.getTime()) {
      console.log("e");
      return this.setState({
        error: {
          time: "Event time must be in the future",
        },
      });
    }

    this.setState({ error: {} });

    createNewEvent({
      name: name.trim(),
      description: description.trim(),
      timeOfEvent: timeOfEvent.toISOString(),
    });

    document.location = "/";
  };

  render() {
    const { name, description, time, date, error } = this.state;
    const today = new Date().toISOString().split("T")[0];

    return (
      <div className="new-event">
        <span className="close-button">
          <Link to={"/"}>&#10006;</Link>
        </span>
        <form className="new-event-form" onSubmit={this.handleSubmit}>
          <InputFeild
            name="name"
            value={name}
            label={"Name Of Event"}
            handleChange={this.handleChange}
            error={error.name}
          />
          <div className="input-feild-container">
            <textarea
              className="input-feild"
              placeholder="Event Description"
              name="description"
              onChange={this.handleChange}
              value={description}
              cols="30"
              rows="5"
            ></textarea>
            {error.description ? (
              <InputError error={error.description} />
            ) : null}
          </div>

          <InputFeild
            type="date"
            name="date"
            min={today}
            value={date}
            label={"Date"}
            handleChange={this.handleChange}
            error={error.date}
          />
          <InputFeild
            type="time"
            name="time"
            value={time}
            label={"Time"}
            handleChange={this.handleChange}
            error={error.time}
          />
          <CustomButton
            label={"Create New event"}
            size={"small"}
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default NewEventForm;
